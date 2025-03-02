import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { toaster } from "@/components/ui/toaster";
import useAuth from "@/hooks/useAuth";
import {
  Container,
  VStack,
  Text,
  Fieldset,
  Input,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    const prevRoute = location.state?.from?.pathname;

    try {
      const data = await login(email, password);
      if (data.user) {
        const redirectPath =
          prevRoute !== "/login" && prevRoute !== "/register" ? prevRoute : "/";
        navigate(redirectPath, { replace: true });
      }
      toaster.create({
        description: `Welcome back, ${data.user.email}!`,
        type: "success",
      });
    } catch (err) {
      toaster.create({
        description: `${err.message}`,
        type: "error",
      });
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
          <Text as={Link} to="/register" fontWeght="bold" color="green.400">
            Register
          </Text>
        </Text>
      </VStack>
    </Container>
  );
};
export default Login;
