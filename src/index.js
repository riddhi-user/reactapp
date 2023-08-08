import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CounterProvider } from "./component/CounterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // context use
    <CounterProvider>
        <App />
    </CounterProvider>
);
