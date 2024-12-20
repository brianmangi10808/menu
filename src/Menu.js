// Menu.js
import React from 'react';
import './App.css';
import myImage from './assets/Black.jpg';

function Menu() {
  return (
    <div className='full'>
      <div className="app">
        <div className="image-container">
          <img src={myImage} alt="Responsive" className="responsive-image" />
          <img src={myImage} alt="Responsive" className="responsive-image" />
        </div>
      </div>
    </div>
  );
}

export default Menu;
