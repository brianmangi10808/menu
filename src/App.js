// App.js (or the main entry point of your app)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Menu />} />
      
        {/* Add other routes as needed */}
      </Routes>
      <About/>
      <Contact/>
    </Router>
  );
}

export default App;
