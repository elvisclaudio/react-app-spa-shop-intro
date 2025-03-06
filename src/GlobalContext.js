import { createContext, useState } from "react";

// Create Context
export const GlobalContext = createContext();

// Global Provider Component
export const GlobalProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const [user, setUser] = useState("John Doe");
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <GlobalContext.Provider value={{ theme, user,  setTheme, setUser, toggleTheme, isAuthenticated, setIsAuthenticated }}>
            {children}
        </GlobalContext.Provider>
    );
};
