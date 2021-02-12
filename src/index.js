import "core-js/stable";
import "regenerator-runtime/runtime";
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Sorry from "./Components/Sorry";

var userAgent = navigator.userAgent.toLowerCase();

if (userAgent.indexOf('trident') > -1) {
  ReactDOM.render(
    <React.StrictMode>

      <Sorry />
    </React.StrictMode>,
    document.getElementById("Portfolio")
  );
} else {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("Portfolio")
  );
}
