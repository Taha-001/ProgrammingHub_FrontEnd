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
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/learn" component={Learn} />
          <Route path="/groups" component={Groups} />
          <Route path="/progress" component={ProgressPage} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
