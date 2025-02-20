import { createContext, useState } from "react";

export const counterContext = createContext();
export default function CounterProvider({ children }) {
    const increment = () => {
        setCounter(counter + 1);
    };
    const decrement = () => {
        setCounter(counter - 1);
    };
    const [counter, setCounter] = useState(0);
    return (
        <counterContext.Provider value={{ counter, setCounter,increment, decrement }}>
            {children}
        </counterContext.Provider>
    );
}


