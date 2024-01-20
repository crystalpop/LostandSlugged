import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import './app.css';
import background from "./assets/homepage_background.png";
import logo from "./assets/logo.png";

function App() {
  const navigate = useNavigate();
  return (
    <div style ={{ backgroundImage: `url(${background})`,
                   backgroundPosition: 'center',
                   backgroundSize: 'cover',
                   backgroundRepeat: 'no-repeat',
                   width: '100vw',
                   height: '100vh'
                }}>
    <div className='homepage-container'>
      <div className='title'>
        <img className='home-logo' src={logo} width={200} height={200} ></img>
      <h1>Lost and Slugged</h1>
      </div>
    <p className='welcome-text'>Welcome! We are a team of UC undergraduates interested in 
      helping others find items that they have lost or found around 
      the UCSC campus. Sign in below to start looking!
    </p>
    <div className='login-signup'>
    <button className='login-button' onClick={()=> navigate('./login')}>Login</button>
    <button className='signup-button' onClick={()=> navigate('./signup')}>Sign up</button>
    </div>
    </div>
    </div>
  );
}

export default App;
