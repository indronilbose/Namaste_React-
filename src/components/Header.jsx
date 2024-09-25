import React from 'react'
import { LOGO_URL } from '../utils/contants';

const Header = () => {
    return (
        <header className="header">
          <img
            src={LOGO_URL}
            alt="Company Logo"
            className="logo"
          />
          <nav className="nav-items">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
      );
}

export default Header


  