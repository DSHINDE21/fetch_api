// Loader.tsx
import React from "react";
import { Center, Spinner } from "@chakra-ui/react";

const Loader: React.FC = () => {
  return (
    <Center h="100vh">
      <Spinner size="xl" color="cyan.500" />
    </Center>
  );
};

export default Loader;
