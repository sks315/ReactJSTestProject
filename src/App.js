import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AddRec from './components/AddRec';
import './CSS/customStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Ro
} from "react-router-dom";

function App() {
  return (
    <React.StrictMode>

    <Navbar />

    <Router>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addrec" element={<AddRec />} />
      </Routes>

    </Router>

  </React.StrictMode>
  );
}

export default App;
