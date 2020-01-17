import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

if (!localStorage) {
  localStorage.theme = "light-theme";
}
ReactDOM.render(<App />, document.getElementById("root"));
