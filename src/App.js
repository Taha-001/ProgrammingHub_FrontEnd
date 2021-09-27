import "./App.css";
import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import Learn from "./components/Learn";

function App() {
  return (
    <Fragment>
      <Route exact path="/" component={LoginPage} />
      {/* <LoginPage /> */}
      <Route path="/signup" component={SignUpPage} />
      <Route path="/learn" component={Learn} />
    </Fragment>
  );
}

export default App;
