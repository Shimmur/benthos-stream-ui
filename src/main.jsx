import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { App } from "./components/App";
import { Cache } from "./cache";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Cache>
        <App />
      </Cache>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
