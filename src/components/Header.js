import React from 'react';
import './Header.css'; // Import your CSS for Header

const Header = () => {
  return (
    <header>
      <h1>E-Commerce Store</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
