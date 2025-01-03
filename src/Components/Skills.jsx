
import { Grid } from "@mui/material";
import Carousel from "react-multi-carousel"

import "./Skills.scss"
import p44 from "./44.png"
import p41 from "./41.png"
import p53 from "./53.png"
import p70 from "./70.png"
import p17 from "./17.png"
export default function Skills() {
  return (
    <section className="skill" id="skill">
      <div>
           <div className="skill-bx">
             <h2>Skills</h2>
             <p>This is the list of the Skill I have and how I good at it in percent.</p>
            <Grid container my={4}>
             <Grid item xs={6} sm={4}>
              <div className="item" >
               <img src={p53} alt ="Image" />
               <h5>Frontend</h5>
              </div>
             </Grid>
             <Grid item xs={6} sm={4}>
                <div className="item" >
                 <img src={p17} alt ="Image" />
                 <h5>Backend</h5>
                </div>
             </Grid>
             <Grid item xs={6} sm={4}>
              <div className="item" >
                  <img src={p44} alt ="Image" />
                  <h5>Web Degisn</h5>
              </div>
             </Grid>
             <Grid item xs={6} sm={4}> 
              <div className="item" >
               <img src={p70} alt ="Image" />
               <h5>Logo Design</h5>
              </div>
             </Grid>
             <Grid item xs={6} sm={4}>
              <div className="item" >
               <img src={p41} alt ="Image" />
               <h5>UI/UX design</h5>
              </div>
             </Grid>
            </Grid>
          </div>
      </div>
    </section>
  )
}