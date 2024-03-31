import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 

import Navigation from './components/navbar.jsx';
import Home from './components/home.jsx';
import Persuasive from './components/persuasive.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(


  
  <React.StrictMode>
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/persuasive" element={<Persuasive />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
