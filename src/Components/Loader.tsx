// Loader.tsx
import React, { useEffect } from "react";
import { Center, Spinner, useToast } from "@chakra-ui/react";

const Loader: React.FC = () => {
  const toast = useToast();

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      toast.closeAll();
    }, 3000);

    toast({
      title: "Data Loading",
      description: "Please wait while the data is being loaded.",
      status: "info",
      duration: null,
      isClosable: true,
    });

    return () => {
      clearTimeout(loadingTimeout);
      toast.closeAll();
    };
  }, [toast]);

  return (
    <Center h="100vh">
      <Spinner size="xl" color="cyan.500" />
    </Center>
  );
};

export default Loader;
