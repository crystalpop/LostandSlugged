import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main.jsx';
import App from './App.js';
import './index.css'
import { AuthProvider, useAuth } from './contexts/AuthContext.js';
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <Main />
    </AuthProvider>
  </React.StrictMode>
);
