import "./App.css";
import React, { Fragment } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import Learn from "./components/Learn";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          {/* <LoginPage /> */}
          <Route path="/signup" component={SignUpPage} />
          <Route component={Learn} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
