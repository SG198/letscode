import React from 'react'
import Eduworld from './Eduworld'
import './style.css'
const Course = () => {
  const list=[
      {
          id:"01",
          heading:"Create an Account",
          desc:"In order to become a part of the student, you must required to go through a registration process."
      },
      {
          id:"02",
          heading:"Choose Any Course",
          desc:"Select the course you are currently studying.There are many choices of courses here."
      },
      {
          id:"03",
          heading:"Payment",
          desc:"You can choose from various payment methods here.You can also choose monthly or annually."
      },
      {
          id:"04",
          heading:"Enjoy Your Course",
          desc:"You can access your course anytime and anywhere for a lifetime aka unlimited.There are updates too."
      }
]
    return (
        <>
          <section>
          <div class="heading">
            <h4 class="headText">in 4 easy steps</h4>
            <h3>How to Learn at LetsLearn365</h3>
        </div>
        <div class="modelContainer">
        {list.map((currElem)=>{
            const {id,heading,desc}=currElem
            return <>
            <div className="mainModel" key={id}>
                <div className="model">
                    <div className="number">{id}</div>
                    <h3>{heading}</h3>
                    <p>{desc}
                    </p>
                </div>
            </div>
            </>
        })}
        </div>
              
              </section>  
              <Eduworld/>
        </>
    )
}

export default Course
