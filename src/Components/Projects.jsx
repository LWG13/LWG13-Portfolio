import shop from "./lwgshop.jpg"
import niex from "./XRecorder_20250818_01.jpg"
import "./Projects.scss"
import { useState } from "react"
import { Grid } from "@mui/material"
import web from "./myweb.jpg"
import viober from "./viober.jpg"
import biomusic from "./logo.png"
import fitness1 from "./fitness1.jpg"
export default function Projects() {
  const [tab, setTab] = useState(1)
  return (
    <div className="box-project">
      <h1>Projects</h1>
      <p>Its the list of Projects I was making in the time I study Web Development to now</p>
      <div className="tab-select">
       <span onClick={() => setTab(1)}>
        Tab 1
       </span>
       <span onClick={() => setTab(2)}>
         Tab 2
       </span>
       <span onClick={() => setTab(3)}>
          Tab 3
       </span>
      </div>
      <div className={tab === 1 ? "content-box" : "content-box deactive"}>
       <Grid container Spacing={1}>
        <Grid item xs={6} sm={4}>
         <div className="content">
          <img src={web} alt="project" />
          <h5>My Portfolio</h5>
          <button className="linkBtn"><a href=" https://github.com/LWG13/LWG13-Portfolio" >Link Github</a></button>
         </div>
        </Grid>

         <Grid item xs={6} sm={4}>
          <div className="content">
           <img src={shop} alt="project" />
           <h5>lwg13shop</h5>
           <button className="linkBtn"><a href=" https://github.com/LWG13/LWG13-shop" >Link Github</a></button>
          </div>
         </Grid>
         <Grid item xs={6} sm={4}>
          <div className="content">
           <img src={fitness1} alt="project" />
           <h5>fitness1</h5>
           <button className="linkBtn"><a href="https://github.com/LWG13/Fitness1-vuejs" >Link Github</a></button>
          </div>
         </Grid>
         <Grid item xs={6} sm={4}>
          <div className="content">
           <img src={viober} alt="project" />
           <h5>Viober</h5>
           <button className="linkBtn"><a href="https://github.com/LWG13/Viober-social-media" >Link Github</a></button>
          </div>
         </Grid>
         <Grid item xs={6} sm={4}>
          <div className="content">
           <img src={niex} alt="project" />
           <h5>Niex News</h5>
           <button className="linkBtn"><a href="https://github.com/LWG13/niex-news.git" >Link Github</a></button>
          </div>
         </Grid>
         <Grid item xs={6} sm={4}>
          <div className="content">
           <img src={biomusic} alt="project" />
           <h5>Bio Music</h5>
           <button className="linkBtn"><a href="https://github.com/LWG13/bio-music.git" >Link Github</a></button>
          </div>
         </Grid>
      </Grid>
     </div>
        <div className={tab === 2 ? "content-box" : "content-box deactive"}>
         <h1>Coming Soon</h1>
       </div>
    <div className= {tab === 3 ? "content-box" : "content-box deactive"}>
      <h1>Coming Soon</h1>
     </div>
    </div>
  )
}
