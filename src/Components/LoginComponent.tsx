import React from "react";
import {
  Center,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { LoginFormProps } from "../Models/LoginModel";
import { useNavigate } from "react-router-dom";

const LoginComponent: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Check if the provided username and password match the specified values
    if (username === "dinesh" && password === "admin") {
      toast({
        title: "Login Successful",
        description: "Welcome back!",
        status: "success",
        duration: 500,
        isClosable: true,
      });
      onLogin(username, password);
      navigate("/list");
      // window.location.reload();
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password. Please try again.",
        status: "error",
        duration: 500,
        isClosable: true,
      });
    }
  };

  return (
    <Center
      h="100vh"
      background="linear-gradient(135deg, #2193b0, #6dd5ed)"
      boxShadow="md"
    >
      <Container
        maxW="sm"
        border="2px"
        borderColor="white"
        p="20px"
        borderRadius="10px"
      >
        <form onSubmit={handleSubmit}>
          <Heading as="h1" size="lg" mb={6} textAlign="center" color="white">
            Login Page
          </Heading>
          <FormControl mb={4}>
            <FormLabel htmlFor="username">Username:</FormLabel>
            <Input
              type="text"
              id="username"
              value={username}
              placeholder="enter username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel htmlFor="password">Password:</FormLabel>
            <Input
              type="password"
              id="password"
              value={password}
              placeholder="enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="teal" size="lg" w="100%">
            Login
          </Button>
        </form>
      </Container>
    </Center>
  );
};

export default LoginComponent;
