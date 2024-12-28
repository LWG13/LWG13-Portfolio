
import "./Footer.scss"
import lwg from "./Logo.png"
import { Grid } from "@mui/material"
import github from "./github.png"
import Facebook from "./Facebook.png"
import inkendIn from "./inkendIn.png"
export default function Footer() {
  return (
    <footer className="Footer">
      <div>
       <Grid container my={4}>
         <Grid item lg={12} md={6} xl={5}>
           <div>
            <img className="imo"src={lwg} alt="logo" />
             <h5 className="hel">LWG13's Portfolio Website</h5>
             
           </div>
         </Grid>
         <Grid item md={6} xl={7}>
           <div className="social-icon1">
            <a href=" https://github.com/LWG13"  ><img src={github} alt="github" /></a>
            <a href=" https://www.facebook.com/profile.php?id=100086165035880&mibextid=ZbWKwL" ><img src={Facebook} alt="facebook" /></a>
            <a href=" https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav" ><img src={inkendIn} alt="LinkedIn" /></a>
           </div>
           <p> Copyright © 2025. LWG13</p>
         </Grid>
       </Grid>
      </div>
    </footer>
  )
}