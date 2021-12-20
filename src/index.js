import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Context from "./Hooks/Context";

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById("root")
);
