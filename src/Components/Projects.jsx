
import "./Projects.scss"
import { useState } from "react"
import { Grid } from "@mui/material"
import web from "./myweb.jpg"
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
       <Grid container my={4} columnSpacing={1}>
        <Grid item xs={6} sm={4}>
         <div className="content">
          <img src={web} alt="project" />
          <h5>My Website Portfolio</h5>
          <button className="linkBtn">Link Demo</button>
         </div>
        </Grid>
         <Grid item xs={6} sm={4}>
          <div className="content">
           <img src={web} alt="project" />
           <h5>My Website Portfolio</h5>
           <button className="linkBtn">Link Demo</button>
          </div>
         </Grid>
         <Grid item xs={6} sm={4}>
          <div className="content">
           <img src={web} alt="project" />
           <h5>My Website Portfolio</h5>
           <button className="linkBtn">Link Demo</button>
          </div>
         </Grid>
         <Grid item xs={6} sm={4}>
          <div className="content">
           <img src={web} alt="project" />
           <h5>My Website Portfolio</h5>
           <button className="linkBtn">Link Demo</button>
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