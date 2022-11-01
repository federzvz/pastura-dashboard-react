import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyLoginPage from './components/MyLoginPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { StoreAdmin } from './StoreAdmin';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path="/admin/*" element={<App />} />
        <Route path="/*" element={<StoreAdmin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
