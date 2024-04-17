import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserForm from './Pages/UserForm'
import Home1 from './Pages/Home1'
import Navbars from './Navbar/Navbars'
import AllRoutes from './Routes/AllRoutes'
import { useTheme } from './ThemeContext/ThemeContextProvider';


function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{backgroundColor:theme ? "#252525": "white", height:"100vh"}} > 
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
      <h1>Assignment -4 </h1>
      <Navbars />
      <AllRoutes />


    </div>
  )
}

export default App
