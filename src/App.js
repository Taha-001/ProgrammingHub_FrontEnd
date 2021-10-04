import "./App.css";
import React, { Fragment } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import Learn from "./components/Learn";
import Groups from "./components/Groups";
import ProgressPage from "./components/ProgressPage";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        {/* <LoginPage /> */}
        <Route path="/signup" component={SignUpPage} />
        <Route component={Learn} />
      </Switch>
    </Fragment>
  );
}

export default App;
