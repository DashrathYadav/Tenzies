import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { Restart } from "./Components/Restart.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
    <App />
    <Restart/>
    </>
)
