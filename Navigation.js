import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

export default function Navigation() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '10px 20px',
        backgroundColor: theme === 'dark' ? 'darkgreen' : 'lightgreen',
        color: theme === 'dark' ? 'white' : 'black'
    };

    const linkStyle = {
        margin: '0 15px',
        textDecoration: 'none',
        color: theme === 'dark' ? 'white' : 'brown',
        fontSize: '16px',
        transition: 'transform 0.3s ease',
        display: 'inline-block'
    };

    const buttonStyle = {
        transition: 'transform 0.3s ease',
        backgroundColor: theme === 'dark' ? 'gray' : 'darkgreen',
        color: theme === 'dark' ? 'black' : 'white',
        display: 'inline-block',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer'
    };

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav style={navStyle}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {['home', 'about', 'contact', 'login', 'register'].map((item) => (
                    <a
                        key={item}
                        href={`#${item}`}
                        style={linkStyle}
                        onClick={() => handleScroll(item)}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                ))}
            </div>
            <button
                className="btn btn-primary ml-3"
                onClick={toggleTheme}
                style={buttonStyle}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
                Change Theme
            </button>
        </nav>
    );
}
