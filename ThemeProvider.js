import React, { useState, useEffect } from 'react';
import ThemeContext from './ThemeContext';

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        document.body.style.backgroundColor = theme === 'dark' ? '#333' : '#fff';
        document.body.style.color = theme === 'dark' ? '#fff' : '#000';
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}