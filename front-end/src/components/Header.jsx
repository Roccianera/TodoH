import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <StyledNavbar>
      <div className="nav-container">
        <div className="logo">
          <span className="logo-text">Todo<span className="accent">H</span></span>
        </div>
        
        <div className="nav-links-desktop">
          <Link to="/" className="nav-link active">Home</Link>
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/register" className="nav-link">Registration</Link>
        </div>
        
        <div className="nav-buttons">
          <Link to="/login" className="login-button">Login</Link>
          <Link to="/register" className="signup-button">Sign Up</Link>
        </div>
        
        <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-link active">Home</Link>
          <Link to="/dashboard" className="mobile-link">Dashboard</Link>
          <Link to="/login" className="mobile-link">Login</Link>
          <Link to="/register" className="mobile-link">Registration</Link>
          <div className="mobile-buttons">
            <Link to="/login" className="login-button">Login</Link>
            <Link to="/register" className="signup-button">Sign Up</Link>
          </div>
        </div>
      )}
    </StyledNavbar>
  );
};




/* 

       <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard"> ffdf</Link></li>
            <li><Link to="/login"> fd</Link></li>
            <li><Link to="/register">Registration</Link></li>



*/















const StyledNavbar = styled.nav`
  --font-color: #323232;
  --font-color-sub: #666;
  --bg-color: #fff;
  --main-color: #323232;
  --input-focus: #2d8cf0;
  
  width: 100%;
  background-color: lightgrey;
  padding: 15px 20px;
  border-bottom: 2px solid var(--main-color);
  box-shadow: 0 4px var(--main-color);
  position: relative;
  z-index: 100;
  
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo-text {
    font-weight: 900;
    font-size: 22px;
    color: var(--font-color);
  }
  
  .accent {
    color: var(--input-focus);
  }
  
  .nav-links-desktop {
    display: flex;
    gap: 25px;
    
    @media (max-width: 768px) {
      display: none;
    }
  }
  
  .nav-link {
    color: var(--font-color);
    font-weight: 600;
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 5px;
    transition: all 0.2s ease;
    
    &.active {
      background-color: var(--bg-color);
      border: 2px solid var(--main-color);
      box-shadow: 3px 3px var(--main-color);
    }
    
    &:hover:not(.active) {
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
  
  .nav-buttons {
    display: flex;
    gap: 10px;
    
    @media (max-width: 768px) {
      display: none;
    }
  }
  
  .login-button, .signup-button {
    padding: 8px 15px;
    border-radius: 5px;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .login-button {
    background-color: transparent;
    color: var(--font-color);
    border: 2px solid var(--main-color);
    
    &:hover {
      background-color: var(--bg-color);
    }
  }
  
  .signup-button {
    background-color: var(--bg-color);
    color: var(--font-color);
    border: 2px solid var(--main-color);
    box-shadow: 3px 3px var(--main-color);
    
    &:active {
      box-shadow: 0 0 var(--main-color);
      transform: translate(3px, 3px);
    }
  }
  
  .menu-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    
    @media (max-width: 768px) {
      display: flex;
    }
  }
  
  .bar {
    width: 25px;
    height: 3px;
    background-color: var(--main-color);
    transition: all 0.3s ease;
    
    &.open:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    
    &.open:nth-child(2) {
      opacity: 0;
    }
    
    &.open:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  }
  
  .mobile-menu {
    display: none;
    flex-direction: column;
    background-color: lightgrey;
    padding: 20px;
    border-top: 1px solid var(--font-color-sub);
    
    @media (max-width: 768px) {
      display: flex;
    }
  }
  
  .mobile-link {
    color: var(--font-color);
    font-weight: 600;
    text-decoration: none;
    padding: 12px 8px;
    border-radius: 5px;
    transition: all 0.2s ease;
    
    &.active {
      background-color: var(--bg-color);
      border: 2px solid var(--main-color);
      box-shadow: 3px 3px var(--main-color);
    }
  }
  
  .mobile-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
  }
`;

export default Navbar;