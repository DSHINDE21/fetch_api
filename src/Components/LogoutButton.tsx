import React from "react";
import { Button, useToast } from "@chakra-ui/react";

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
    <Button colorScheme="red" onClick={handleLogoutClick}>
      Logout
    </Button>
  );
};

export default LogoutButton;
