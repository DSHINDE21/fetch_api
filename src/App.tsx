// import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPageView from "./Views/LoginPageView";
import ListPageView from "./Views/ListPageView";
import "./index.css";
import RegistrationForm from "./Views/registrationPageView";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPageView />} />
        <Route path="/list" element={<ListPageView />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </>
  );
}

export default App;
