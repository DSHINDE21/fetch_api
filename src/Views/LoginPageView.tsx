import React from "react";
import LoginComponent from "../Components/LoginComponent";
// import { useHistory } from "react-router-dom";

const LoginForm: React.FC = () => {
  //   const history = useHistory();

  const handleLogin = (username: string, password: string) => {
    console.log("Logged in as:", username, password);
  };

  return <LoginComponent onLogin={handleLogin} />;
};

export default LoginForm;
