import React from "react";
import { Link, NavLink } from "react-router-dom";
import './navbar.css'

export default function NavBar(){
    const activeStyle = {
        color: "orange",
    }
    return(
        <header>
            
            <span className="logo">
                <img src="https://beakerhealth.com/images/logo/beaker-health-full-logo.svg"/>
            </span>

            <nav className="main-nav">
                <NavLink style={({isActive})=>isActive ? activeStyle : undefined} to="/">Home</NavLink>
                <NavLink style={({isActive})=>isActive ? activeStyle : undefined} to="/about">About</NavLink>
                <NavLink style={({isActive})=>isActive ? activeStyle : undefined} to="/blog">Blog</NavLink>
                <NavLink style={({isActive})=>isActive ? activeStyle : undefined} to="/faq">FAQ</NavLink>
                <NavLink style={({isActive})=>isActive ? activeStyle : undefined} to="/contact">Contact</NavLink>
            </nav>

            <span className="button-group">
                <Link to="/login">Log In</Link>
                <Link to="/login">Sign Up</Link>
            </span>
        </header>
        
    )
}