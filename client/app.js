import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";
import Routers from "./routes";

export default () => (
  <Switch>
    {Routers.map(({ name, path, exact = true, component }) => (
      <Route path={path} exact={exact} component={component} key={name} />
    ))}
  </Switch>
);
