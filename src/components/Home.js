import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import '../css/home.css';

const Home = () => {
  return (
    <div className="navbar">
      <div className="nav-links">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/filter" activeClassName="active">
          Filter
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About Us
        </NavLink>
      </div>
      <div className="logo">
        <img src="your_logo_url_here" alt="Logo" />
      </div>
      <div className="search-cart">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search..."
            style={{ borderRadius: '40px', height: '45px' }}
          />
          <img src="your_search_icon_url_here" alt="Search Icon" />
        </div>
        <div className="cart">
          <img src="your_cart_icon_url_here" alt="Shopping Cart" />
        </div>
        <br />
        <h1>Hehehe</h1>
      </div>
    </div>
  );
};

export default Home;
