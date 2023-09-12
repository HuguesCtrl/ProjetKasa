import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.css";
import APIcontext from "./theme/APIcontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <APIcontext>
    <App />
  </APIcontext>
);
