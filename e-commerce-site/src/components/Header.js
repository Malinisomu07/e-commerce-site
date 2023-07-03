import React from 'react';
import '../styles/homepage.css'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="#">Logo</a>
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Cart</a></li>
          <li>
            <input type="text" placeholder="Search" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
