import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Perform registration logic here, such as sending data to the server
    // For this example, we just log the data to the console.
    console.log(formData);

    // Clear the form data
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <Center
      h="100vh"
      background="linear-gradient(135deg, #2193b0, #6dd5ed)"
      boxShadow="md"
    >
      <Box
        bg="teal"
        maxW="sm"
        border="2px"
        borderColor="white"
        p="20px"
        borderRadius="10px"
      >
        <form onSubmit={handleSubmit}>
          <Heading as="h1" size="lg" mb={6} textAlign="center" color="white">
            Registratiom Page
          </Heading>
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              bg="white"
              borderRadius="md"
              _focus={{ borderColor: "blue.300", boxShadow: "outline" }}
            />
          </FormControl>
          <FormControl isRequired mt={2}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              bg="white"
              borderRadius="md"
              _focus={{ borderColor: "blue.300", boxShadow: "outline" }}
            />
          </FormControl>
          <FormControl isRequired mt={2}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              bg="white"
              borderRadius="md"
              _focus={{ borderColor: "blue.300", boxShadow: "outline" }}
            />
          </FormControl>
          <FormControl isRequired mt={2}>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              bg="white"
              borderRadius="md"
              _focus={{ borderColor: "blue.300", boxShadow: "outline" }}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" mt={4} w="100%">
            Register
          </Button>
          <Text p={3}>
            Already have an account? <Link to="/">Login</Link>
          </Text>
        </form>
      </Box>
    </Center>
  );
};

export default RegistrationForm;
