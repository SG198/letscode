import React from 'react'

const Button = ({filterItem,edudata}) => {
    return (
        <>
        <section id="course">
        <div class="heading">
            <h4 class="headText">Discover</h4>
            <h3>Our Popular Course</h3>
        </div>

          <div className="courseHeading">
            <div className="list">
           
                {edudata.map((curElem)=>{
                     return (
                    <button className="btn" onClick={() => filterItem(curElem)}>{curElem}</button>)
                })}
               
               
            </div>
        </div> 
        </section> 
        </>

    )
}

export default Button
