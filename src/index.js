import "core-js/stable";
import "regenerator-runtime/runtime";
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

var userAgent = navigator.userAgent.toLowerCase();

if(userAgent.indexOf('trident')>-1){
  ReactDOM.render(
    <React.StrictMode>

      <div>Sorry, This Browser can't open this Site. Plz use another Browser like Chrome, Opara..</div>
    </React.StrictMode>,
    document.getElementById("Portfolio")
  );
}else{
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("Portfolio")
  );
}
