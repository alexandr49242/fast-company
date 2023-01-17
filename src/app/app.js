import React from "react";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Main from "./components/main";
import UsersList from "./components/usersList";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/users/:userId?" component={UsersList} />
      </Switch>
    </>
  );
}

export default App;
