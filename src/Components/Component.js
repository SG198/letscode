import React from 'react'
import About from './About'
import Contact from './Contact'
import Course from './Course'
//import Eduworld from './Eduworld'
// import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'

const Component = () => {
           
    return (
        <>
      <Navbar/>
      <Home/>
      <About/>  
      <Course/>
      {/* <Eduworld/> */}
      <Contact/>
      {/* <Footer/> */}
        </>
    )
}

export default Component
