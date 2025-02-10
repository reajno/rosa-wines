import {
  Box,
  Container,
  VStack,
  Text,
  Fieldset,
  Input,
  Button,
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { useState } from "react";
import { Link } from "react-router-dom";

import useAuth from "@/hooks/useAuth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await register(email, password);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container fluid bgColor="gray.600">
      <VStack minHeight="calc(100vh - 5.5rem)" justify="center">
        <Text textStyle="2xl">Create your account</Text>
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
          <Button type="submit" onClick={handleRegister}>
            Submit
          </Button>
        </Fieldset.Root>
        <Text as="p">
          Already have an account? {""}
          <Text as={Link} to="/login" fontWeght="bold" color="green.400">
            Sign In
          </Text>
        </Text>
      </VStack>
    </Container>
  );
};
export default Register;
