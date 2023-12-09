import React from 'react';
import logo from './gdg.png';
import RButton from './images/register-button.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <img src={logo} className="App-logo" alt="logo" />
          <div className='register-button'>
            <div className='container'>
              <img src={RButton} alt="register" />
              <div>Register</div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
