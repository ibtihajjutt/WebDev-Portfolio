import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'; // Correct import for React 18+
import './index.css'
import React from "react";
import App from './App.jsx'

import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);