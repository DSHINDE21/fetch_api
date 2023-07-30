// import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPageView from "./Views/LoginPageView";
import ListPageView from "./Views/ListPageView";
import "./index.css";
function App() {
  return (
    <>
      <Router>
        {/* <Route path="/" exact component={LoginPageView  onLogin={handleLogin}} /> */}
        <Route path="/" exact render={() => <LoginPageView />} />
        <Route exact path="/list" component={ListPageView} />
      </Router>
    </>
  );
}

export default App;
