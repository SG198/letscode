import React from 'react'
import About from './About'
import Contact from './Contact'
import Course from './Course'
//import Navbar from './Navbar'
import './style.css'
const Home = () => {
    return (
        <>
        {/* <Navbar/> */}
        <section id="home">
           
        <div className="container">
            <div className="leftContainer">
                <h4 className="headText">the right choice</h4>
                <h2 className="subText">Learn <span>365 Days Per Year</span> Here</h2>
                <p className="pText">You will learn the easiest way from various tutors who are experienced in their fields.
                </p>
                <div className="button" id="group">
                    <button className="btn">Get Started</button>
                    <button className="btn" id="vButton"><i className="fas fa-play"></i> Watch Video</button>
                </div>
            </div>
            <div className="rightContainer">
                <figure className="mainImage">
                    <img src="./images/banner1.jpg" alt="banner1"/>
                </figure>
            </div>
        </div>
    </section>  
    <About/>
    <Course/>
    <Contact/>
        </>
    )
}

export default Home
