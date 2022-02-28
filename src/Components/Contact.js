import React,{useState} from 'react'
import Footer from './Footer';
//import Navbar from './Navbar';
import './style.css'
const Contact = () => {
    const [user, setUser] = useState({
        name:"",
        email:"",
        message:""
      })

      let name, value;
      const getData=(event)=>{
        name=event.target.name;
        value=event.target.value;
    
        setUser({...user,[name]:value})
      }

      const postData=async(e)=>{
        e.preventDefault();
        const {name,email,message}=user;
             if(name && email && message){
               const res=await fetch('https://reactformexample-d290a-default-rtdb.asia-southeast1.firebasedatabase.app/eduContact.json',{ method:"POST",
               headers:{
                "content-type":"application/json"
              },
              body:JSON.stringify({
                name,
                email,
                message
              })
            
            })
            if(res){
                setUser({name:"",
                email:"",
                message:""})
          
                alert("successfully data stored.....")
              }
             }else{
                 alert('please fill data')
             }
      }
    return (
       
        <>
        {/* <Navbar/> */}
         <section className="contact" id="contact">
         <div className="title">
            <h2 className="titletext">Contact <span>U</span>s</h2>
            <p>Please leave a message with detail for any query</p>
        </div> 
          <form method="POST">
          <div className="contactForm">
            <div className="inputBox">
                <input type="text" name="name" value={user.name} onChange={getData} placeholder="Enter Your Name" required/>
            </div>
            <div className="inputBox">
                <input type="email" name="email" value={user.email} onChange={getData} placeholder="Enter Your Email" required/>
            </div>
            <div className="inputBox">
                <textarea name="message" value={user.message} onChange={getData} placeholder="Enter Message" required></textarea>
            </div>
            <div className="inputBox">
              <button className="btn" onClick={postData}>Submit</button>
            </div>
        </div>
              </form> 
              </section> 
              <Footer/>
        </>
    )
}

export default Contact
