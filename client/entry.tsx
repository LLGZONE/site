import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Routers from "./routes";

import http from "./lib/http";
import URL from "./constants/url";
(async function() {
  try {
    const result = await http({
      method: "GET",
      url: URL.user_info
    });
    window.user_info = result;
  } catch (err) {
    window.user_info = {};
  }
  ReactDOM.render(
    <Router>
      {Routers.map(({ name, path, component: Component }) => {
        return <Component key={name} path={path} />;
      })}
    </Router>,
    document.getElementById("root")
  );
})();
