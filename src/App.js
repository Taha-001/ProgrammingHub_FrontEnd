import "./App.css";
import React, { Fragment } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import Learn from "./components/Learn";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          {/* <LoginPage /> */}
          <Route path="/signup" component={SignUpPage} />
          <PrivateRoute component={Learn} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
