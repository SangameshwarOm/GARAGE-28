import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

export default function ThemeConsumer() {
    const { theme } = useContext(ThemeContext);

    const consumerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1px',
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white'
    };

    return (
        <div style={consumerStyle}>

        </div>
    );
}