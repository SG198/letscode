import React from 'react'
//import Navbar from './Navbar';
import './style.css'




const About = () => {
    const data = [
        { name: "Udemy",id:1 }, { name: "Google",id:3 }, { name: "Cloud Academy",id:3 }, { name: "Microsoft",id:4 }
    ];

    const detail=[
    {heading:"Expert Mentors",para:"Experienced teacher will guide you to learn",icon:"fas fa-chalkboard-teacher"},
    {heading:"Lifetime Access",para:"Videos provided are available for lifetime",icon:"fas fa-chalkboard-teacher"},
    {heading:"Certificate",para:"Certificate will be provide after successful completion",icon:"fas fa-chalkboard-teacher"}
]

    return (
        <>
        {/* <Navbar/> */}
            <section id="about">
                <div className="organisation">
                    {data.map((currElem) => {
                        const { name,id } = currElem
                        return <>
                            <div className="orgLogo" key={id}>
                                <h2>{name}</h2>
                            </div>
                        </>
                    })}
                </div>

                <div className="heading">
            <h4 className="headText">Will be worth it</h4>
            <h3>Benefits of Joining Our Course.</h3>
        </div>

        <div className="container">

<div className="rightContainer">
    <figure className="mainImage" id="banner2">
        <img src="./images/banner2.jpg" alt="banner2"/>
    </figure>
</div>
<div className="leftContainer">
    <div className="mainContent">
        {detail.map((currElem)=>{
           const {heading,para,icon}=currElem
           return <>
             <div className="mycontent">
            <div className="icon"> <i className={icon}></i></div>
            <div className="value">
                <span className="h3">{heading}</span><br/>
                <span className="P">{para}</span>
            </div>
        </div>
           </>
        })}
        {/* <div className="mycontent">
            <div className="icon"> <i className="fas fa-chalkboard-teacher"></i></div>
            <div className="value">
                <span className="h3">Expert Mentors</span><br/>
                <span className="P">Very experienced teacher will help you to understand the material easily and faster.</span>
            </div>
        </div> */}
    </div>
</div>

</div>

            </section>

        </>
    )
}

export default About
