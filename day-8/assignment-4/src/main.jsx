import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { ThemeContextProvider } from './ThemeContext/ThemeContextProvider.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <BrowserRouter>
    
    <App />
    </BrowserRouter>

  </ThemeContextProvider>
);
