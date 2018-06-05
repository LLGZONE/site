import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import http from "./lib/fetch";
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
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  );
})();
