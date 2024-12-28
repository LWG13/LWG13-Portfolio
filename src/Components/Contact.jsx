
import "./Contact.scss"
import axios from "axios"
import { Grid } from "@mui/material"

import { useState} from "react"
import contact from "./contact.png"

export default function Contact() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState()
  const [message, setMessage] = useState("")

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    let result = await fetch("https://contact-server-tw9s.onrender.com", {
      method : "post",
      body: JSON.stringify({name, email, phone, message}),
      headers: {
        "Content-Type": "application/json"
      },
    });
    result = await result.json();
    setName("")
    setEmail("")
    setPhone("")
    setMessage("")
  }


  return (
    <section className="contact" id="connect">
      <div className="container">
        
        <Grid container my={4} >
         <Grid item xs={12} sm={6} > 
         <div className="image">
          <img src={contact} alt ="contact" />
         </div>
         </Grid>
         <Grid item xs={12} sm={6}>
           <div className="form-contact">
          
            <h2>Contact me</h2>
             <div>
              <form onSubmit={handleSubmit} method="POST" action="">
               <label>Name</label>
                  <input type="text" value={name} placeholder="Name" onChange={(e) => setName( e.target.value)}/>
               <label>Email</label>
                  <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail( e.target.value)}/>
               <label>Phone Number</label>
                  <input type="tel" value={phone} min="0" max="10" placeholder="Phone Number" onChange={(e) => setPhone( e.target.value)} />
               <label>Message</label>
                  <textarea rows="6" value={message} placeholder="Message" onChange={(e) => setMessage( e.target.value)} />
        
                  <button   type="submit" className="btn-contact" ><span>Submit</span></button>
            </form>
             </div>
           </div>
         </Grid>
        </Grid>
      </div>
    </section>
  )
}
