import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext"; // ✅ Correct path
import "./Navbar.css";

const Navbar = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <>
      <nav className="navbar">
        <div className="logo">📚 BookStore</div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>

        <button className="cart-btn">🛒 Cart ({cartCount})</button>
      </nav>
    </>
  );
};


export default Navbar;
