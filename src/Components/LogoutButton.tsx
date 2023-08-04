import React from "react";
import { Button, Flex, useToast } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";

interface LogoutButtonProps {
  handleLogout: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ handleLogout }) => {
  const toast = useToast();

  const handleLogoutClick = () => {
    handleLogout();

    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };

  return (
    <Flex justifyContent="flex-end" p={4}>
      <Button colorScheme="red" onClick={handleLogoutClick}>
        <ArrowLeftIcon /> Logout
      </Button>
    </Flex>
  );
};

export default LogoutButton;
