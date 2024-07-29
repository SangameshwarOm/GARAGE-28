import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import logo from '../asserts/LOGOOO.png'; 

export default function Header() {
    const { theme } = useContext(ThemeContext);

    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme === 'dark' ? 'darkblue' : 'lightgreen',
        padding: '5px 20px',
        width: '100%',
        fontFamily: 'Times New Roman, serif'  
    };

    const logoStyle = {
        width: '175px',
        height: '110px'
    };

    const titleStyle = {
        flexGrow: 1,
        textAlign: 'center',
        marginRight: '100px',
        color: theme === 'dark' ? 'white' : 'black'
    };

    return (
        <header style={headerStyle}>
            <img src={logo} alt="Site Logo" style={logoStyle} />
            <h1 style={titleStyle}>GARAGE 28</h1>
        </header>
    );
}
