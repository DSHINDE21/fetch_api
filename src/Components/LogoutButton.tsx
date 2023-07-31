import React from "react";
import { Button } from "@chakra-ui/react";

interface LogoutButtonProps {
  handleLogout: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ handleLogout }) => {
  return (
    <Button colorScheme="red" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
