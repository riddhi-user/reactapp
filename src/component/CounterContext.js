import React, { createContext, useState } from "react";

// Create a new context
const CounterContext = createContext();

// Create a context provider component
const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    // Value object contains the state and functions to be shared
    const value = {
        count,
        increment,
        decrement,
    };

    return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>;
};

export { CounterContext, CounterProvider };
