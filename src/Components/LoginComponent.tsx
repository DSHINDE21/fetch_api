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
  Text,
} from "@chakra-ui/react";
import { LoginFormProps } from "../Models/LoginModel";
import { Link, useNavigate } from "react-router-dom";

const LoginComponent: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const toast = useToast();
  // const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Check if the provided username and password match the specified values
    if (username === "dinesh" && password === "admin") {
      toast({
        title: "Login Successful",
        description: "Welcome back!",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      onLogin(username, password);
      navigate("/list");
      // setLoggedIn(true);
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password. Please try again.",
        status: "error",
        duration: 1000,
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
          <Text p={3}>
            Don't have an account? <Link to="/register">Register</Link>
          </Text>
        </form>
      </Container>
    </Center>
  );
};

export default LoginComponent;
