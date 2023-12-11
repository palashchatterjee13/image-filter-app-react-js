import React from 'react';
import logo from './filterx.png';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div className='AppBar'>
      <img src={logo} className='logo' />
      <div className='logoText'>FilterX</div>
      <div className='credits'>Devloed by <br /> <b> Palash Chatterjee </b></div>
    </div>
  </React.StrictMode>
);