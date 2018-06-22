import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    className="jumbotron"
  >
  <h1 className="display-3">Hello, world!</h1>
    {children}
  </div>
);

export default Jumbotron;
