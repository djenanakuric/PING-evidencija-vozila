import React from 'react';
import NavBar from './NavBar/navBar';

import './index.css';

function App() {
  return (
    <div className='container'>
      <div className='header'> 
       <img src='./images/ping-logo.png'/>
      </div>
      <div className='main'>
        <NavBar/>
      </div>

      
    </div>
    

  );
}

export default App;
