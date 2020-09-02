import React from "react";
import Logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <a className='navbar-brand' href='#'>
          <img src={Logo} alt='logo' />
          Vazapay
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='mr-auto'></div>
          <div className='navbar-nav'>
            <a className='nav-link' href='#'>
              FAQ
            </a>
            <a className='nav-link' href='#'>
              Legal
            </a>
            <button class='btn nav-link' type='button'>
              Download App
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
