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
import { User } from './User';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path="/admin/*" element={<App />} />
        <Route path="/*" element={<User />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
