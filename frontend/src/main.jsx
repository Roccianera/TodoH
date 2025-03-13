import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import createStore from 'react-auth-kit/createStore';
import { AuthProvider } from 'react-auth-kit';



createRoot(document.getElementById('root')).render(
 
      <App />

);
