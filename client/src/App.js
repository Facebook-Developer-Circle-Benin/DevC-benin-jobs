import React from "react";

import SignUp from "./pages/SignUp/signUp";
import SignIn from "./pages/signIn/signIn";
import Home from "./pages/Home/home";
import Profile from "./pages/profile";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/signIn" component={SignIn} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
