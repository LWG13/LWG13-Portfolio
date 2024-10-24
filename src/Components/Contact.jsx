
import "./Contact.scss"
import { Grid } from "@mui/material"
import { useState } from "react"
import contact from "./contact.png"

export default function Contact() {
  const formD = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  }

  const [formDetail, setFormDetail] = useState(formD)
  const [buttonText, setButtonText] = useState("Send")
  const [status, setStatus] = useState({})

  const onFormUpdate = (category, value) => {
    setFormDetail({
      ...formDetail,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...")

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetail),
      });

      const result = await response.json(); 

      setButtonText("Send");
      setFormDetail(formD);

      if (result.code === 200) {
        setStatus({
          success: true,
          message: "Message sent successfully"
        });
      } else {
        setStatus({ success: false, message: "Something went wrong, please try again later" });
      }
    } catch (error) {
      setButtonText("Send");
      setStatus({ success: false, message: "Error: " + error.message });
    }
  };
  return (
    <section className="contact" id="connect">
      <div className="container">
        <Grid container my={4}>
          <Grid item xs={12} md={6}>
            <div className="image-contact">
              <img src={contact} alt="contact" />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
           <div className="form-contact">
            <h2>Contact me</h2>
            <form onSubmit={handleSubmit}>
                  <input type="text" value={formDetail.firstName} placeholder="First Name" onChange={(e) => onFormUpdate("firstName", e.target.value)} />
            
                  <input type="text" value={formDetail.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate("lastName", e.target.value)} />
            
                
                  <input type="email" value={formDetail.email} placeholder="Email" onChange={(e) => onFormUpdate("email", e.target.value)} />
          
              
                  <input type="tel" value={formDetail.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate("phone", e.target.value)} />
            
                
                  <textarea rows="6" value={formDetail.message} placeholder="Message" onChange={(e) => onFormUpdate("message", e.target.value)} />
                  <br />
                  <button  className="btn-contact" type="submit"><span>{buttonText}</span></button>
            
                {status.message && (
                  <Grid item>
                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                  </Grid>
                )}
            
            </form>
           </div>
          </Grid>
        </Grid>
      </div>
    </section>
  )
}
