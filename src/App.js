import React from 'react';
import './App.css';
import myImage from './assets/Black.jpg';

function App() {
  return (
    <div className="app">
      <div className="image-container">
        <img src={myImage} alt="Responsive" className="responsive-image" />
      </div>
    </div>
  );
}

export default App;
