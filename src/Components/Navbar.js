import React from 'react'
import './style.css'
import {NavLink, Outlet} from "react-router-dom"
const Navbar = () => {
   
 
    return (
        <>
          <header>
        <div className="logo">Lets<span>Learn365</span></div>
        <nav>
            <ul>
                {/* <li><a href="#home">Home</a></li> */}
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/course">Course</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                
                
                {/* <li><a href="#about">About Us</a></li>
                <li><a href="#course">Course</a></li>
                <li><a href="#contact">Contact</a></li> */}
                 
            </ul>
        </nav>
        <div className="button">
            <p className="btn1">Sign in</p>
            <button className="btn">Sign Up</button>
        </div>
        <div className="menu-toggle"><i className="fas fa-bars"></i></div>
    </header>  
    <Outlet/>
    </>
    )
}

export default Navbar
