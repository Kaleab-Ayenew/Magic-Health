import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  const activeStyle = {
    color: "orange",
  };
  const menuToggler = (e) => {
    const navBar = document.querySelector(".main-nav");
    navBar.classList.toggle("expand");
    e.currentTarget.querySelector("i").style.color = navBar.classList.contains(
      "expand"
    )
      ? "black"
      : "white";
  };
  window.onscroll = () => {
    if (window.scrollY > 170) {
      document.querySelector("header").classList.add("sticky");
    } else {
      document.querySelector("header").classList.remove("sticky");
    }
  };

  return (
    <header>
      <span className="logo">
        <img src="https://beakerhealth.com/images/logo/beaker-health-full-logo.svg" />
      </span>

      <nav className="main-nav">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/blog"
        >
          Blog
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/faq"
        >
          FAQ
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/contact"
        >
          Contact
        </NavLink>
      </nav>

      <span className="button-group">
        <Link to="/login">Log In</Link>
        <Link to="/login">Sign Up</Link>
      </span>
      <span onClick={menuToggler} className="header__menu-button-holder">
        <i className="fa-solid fa-bars"></i>
      </span>
    </header>
  );
}
