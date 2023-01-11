import React from "react";
import { Link, NavLink } from "react-router-dom";
import './navbar.css'

export default function NavBar(){
    return(
        <header>
            
            <span className="logo">
                <img src="https://beakerhealth.com/images/logo/beaker-health-full-logo.svg"/>
            </span>

            <nav className="main-nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/faq">FAQ</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>

            <span className="button-group">
                <Link to="/login">Log In</Link>
                <Link to="/login">Sign Up</Link>
            </span>
        </header>
        
    )
}