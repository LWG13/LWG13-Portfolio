
import "./Subscribe.scss"
import { Grid } from "@mui/material"
import {useState, useEffect} from "react"
export default function SubscribeTemp({onValidated, status, message}) {
  useEffect(() => {
    if(status === "success") clearFields()
  },[status])
  const [email, setEmail] = useState("")
  const handleSubmit = () => {
    e.preventDefault();
    email && email.indexOf("@") > -1 && onValidated({
      EMAIL: email
    })
  }
  const clearFields = () => {
    setEmail("")
  }
  return(
       <div className="newsletter-bx">
        <Grid container my={4}>
          <Grid item lg={12} md={6} xl={5} >
           <h2>Subscribe to my Newsletter</h2>
           <p>Get the lasted news in my work</p>
            {status === "sending" && <p className="alert">Sending...</p>}
            {status === "error" && <p className="error">{message}</p>}
            {status === "success" && <p className="success">{message}</p>}
          </Grid>
          <Grid item md={6} xl={7} >
          
            <div className="new-email-bx" >
             <input value={email}  type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address"/>
             <br />
             <button onClick={handleSubmit} className="btn-sub" >Submit</button>
            </div>
           
          </Grid>
        </Grid>
       </div>
  )
}