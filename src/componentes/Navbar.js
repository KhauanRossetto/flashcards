import React from 'react';
import logo from '../assets/img/logo.png';

function NavBar() {
    return (
      <div className="logo">
        <img src={logo} alt="logo"/>
        <span>ZapRecall</span>
      </div>
    );
}
export default NavBar;
