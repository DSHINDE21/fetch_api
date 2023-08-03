import React from "react";
import { FormValues, LoginFormProps } from "../Models/LoginModel";
import { Link, useNavigate } from "react-router-dom";
import { Flex, Image } from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
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

const LoginComponent: React.FC<LoginFormProps> = ({ onLogin }) => {
  const navigate = useNavigate();
  const toast = useToast();

  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
  });

  const handleSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    setTimeout(() => {
      if (
        values.email === "dinesh.s.shinde1@gmail.com" &&
        values.password === "admin1234"
      ) {
        toast({
          title: "Login Successful",
          description: "Welcome back!",
          status: "success",
          duration: 1000,
          isClosable: true,
        });
        onLogin(values.email, values.password);
        navigate("/list");
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid Email or password. Please try again.",
          status: "error",
          duration: 1000,
          isClosable: true,
        });
      }
      setSubmitting(false);
    }, 1000);
  };

  return (
    <Center h="100vh" bgGradient="linear(to-b, #E0D2C7, #44B09E)">
      <Container
        background="linear-gradient(135deg, #2193b0, #6dd5ed)"
        boxShadow="md"
        maxW="sm"
        border="2px"
        borderColor="white"
        p="20px"
        borderRadius="10px"
      >
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Flex justify="center" mb={3}>
                <Image src="/logo.png" alt="Logo" h="50px" />
              </Flex>

              <Heading
                as="h1"
                size="lg"
                mb={6}
                textAlign="center"
                color="white"
              >
                Login Page
              </Heading>
              <FormControl mb={4}>
                <FormLabel htmlFor="email">Email:</FormLabel>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  as={Input}
                  placeholder="Enter Email"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel htmlFor="password">Password:</FormLabel>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  as={Input}
                  placeholder="Enter password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </FormControl>
              <Button
                type="submit"
                colorScheme="teal"
                size="lg"
                w="100%"
                isLoading={isSubmitting}
              >
                Login
              </Button>
              <Text p={3}>
                Don't have an account? <Link to="/register">Register</Link>
              </Text>
            </Form>
          )}
        </Formik>
      </Container>
    </Center>
  );
};

export default LoginComponent;
