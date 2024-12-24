// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 introduces the 'react-dom/client' entry point
import './index.css';  // Optionally import global styles
import App from './App';  // Import the root App component

// Render the App component to the root element in the HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
