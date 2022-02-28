import React from 'react'
//import Component from './Components/Component'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Components/Home'
import About from './Components/About'
import Course from './Components/Course'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
//import Navbar from './Components/Navbar'




const App = () => {
  return (
    <div>
      {/* <Component/> */}
      <Router>
        <Routes>
          
  
          {/* <Route path="/" element={<Component/>}/> */}
          <Route element={<Navbar/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/course" element={<Course/>}/>
          <Route path="/contact" element={<Contact/>}/>
          </Route>
          
        </Routes>
      </Router>
     
       
    </div>
  )
}

export default App
