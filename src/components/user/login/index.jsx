import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import {
  Box,
  Container,
  VStack,
  Text,
  Fieldset,
  Input,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/login-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container fluid bgColor="gray.600">
      <VStack minHeight="calc(100vh - 5.5rem)" justify="center">
        <Text textStyle="2xl">Sign in to your account</Text>
        <Fieldset.Root size="lg">
          <Fieldset.Content>
            <Field label="Email">
              <Input
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Field>
            <Field label="Password">
              <PasswordInput
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Field>
          </Fieldset.Content>
          <Button type="submit" onClick={handleLogin}>
            Submit
          </Button>
        </Fieldset.Root>
        <Text as="p">
          Not a member? {""}
          <Text as={Link} to="/register" fontWeight="bold" color="green.400">
            Register
          </Text>
        </Text>
      </VStack>
    </Container>
  );
};
export default Login;
