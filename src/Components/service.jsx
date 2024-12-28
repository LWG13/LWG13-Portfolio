import "./Service.scss"
import webdev from "./webdev.png"
import webdesign from "./webdesign.png"
import logodesign from "./logodesign.png"
import { Grid } from "@mui/material"
export default function Service() {
  return (
    <div className="service">
     <h1>Service</h1>
     <p>I provide some good service to help you to do something here</p>
     <Grid container my={4}>
      <Grid item lg={6} md={4} xl={3} >
       <div className="service-bx">
         <img src={webdev} alt="Web Develop" />
        <h2>Web Develop</h2>
        <p>This service i will building a website in Frontend, Backend or both, contact me to talk about this</p>
       </div>
      </Grid>
      <Grid item lg={6} md={4} xl={3} >
       <div className="service-bx">
        <img src={webdesign} alt="Web Design" />
        <h2>Web design</h2>
         <p>This service i will design a website base in guest's request, contact me to talk about this</p>
       </div>
      </Grid>
      <Grid item lg={6} md={4} xl={3} >
       <div className="service-bx">
        <img src={logodesign} alt="Logo Design" />
        <h2>Logo design</h2>
         <p>This service i will design a logo for someone needed and make a quality logo, contact me to talk about this</p>
       </div>
      </Grid>
     </Grid>
    </div>
  )
}