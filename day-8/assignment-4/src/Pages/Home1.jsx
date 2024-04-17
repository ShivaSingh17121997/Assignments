import React from 'react';
import { useTheme } from '../ThemeContext/ThemeContextProvider';

const Home1 = () => {
    const { theme, toggleTheme } = useTheme();

    console.log(theme)
    return (
        <div style={{backgroundColor:theme ? "#4c4c4c": "white", height:"100vh"}} className={`homepage ${theme}`}>
            <h1>Welcome to the Homepage</h1>
            <p>This is a simple homepage.</p>
            {/* <button onClick={toggleTheme}>
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button> */}
        </div>
    );
};

export default Home1;
