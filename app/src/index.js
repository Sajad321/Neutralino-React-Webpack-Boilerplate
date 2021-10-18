import React from "react";
import { render } from "react-dom";
import { HashRouter as Router } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "jquery/dist/jquery";
import "popper.js/dist/popper";
import "./assets/sass/styles.scss";
// import "react-toastify/dist/ReactToastify.css";
import App from "./components/App";

let root = document.createElement("div");

root.id = "root";
document.body.appendChild(root);

// Now we can render our application into it
render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
