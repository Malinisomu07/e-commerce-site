import React from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="header">
      <div className="logo">
      <Link to="/">Logo</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Cart">Cart</Link></li>
          <li>
            <input type="text" placeholder="Search" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
