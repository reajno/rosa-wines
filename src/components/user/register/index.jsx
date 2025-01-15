import {
  Box,
  Container,
  VStack,
  Text,
  Fieldset,
  Input,
  Button,
  Link,
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(email + " " + password);
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
          <Link href="/register" colorPalette={"green"}>
            Sign in
          </Link>
        </Text>
      </VStack>
    </Container>
  );
};
export default Register;
