
import "./SkillPage.scss" 
import { Grid } from "@mui/material"
export default function SkillPage() {
  return (
    <section className="skill-page">
      <h1>My Overall Skill</h1>
      <p className="pa">This page will show all my skill at Frontend, Backend, Framework JavaScript, and other.</p>
      
      <div className="ex-items">
      <h2>Frontend</h2>
       <Grid container my={4}>
        <Grid item xs={12} sm={6}>
         <div className="ex-item">
          <div className="ex-info" >
           <div className="ex-in">
            <p>HTML</p>
            <p>100%</p>
           </div>
          </div>
          <div className="ex-bar" data-percent="100%">
            <span style={{width: "100%"}}></span>
          </div>
         </div>
        </Grid>
         <Grid item xs={12} sm={6}>
          <div className="ex-item">
           <div className="ex-info" >
           <div className="ex-in">
            <p>CSS/SASS</p>
            <p>95%</p>
           </div>
           </div>
           <div className="ex-bar" data-percent="95%">
             <span style={{width: "95%"}}></span>
           </div>
          </div>
         </Grid>
         <Grid item xs={12} sm={6}>
         <div className="ex-item">
          <div className="ex-info" >
          <div className="ex-in">
           <p>JavaScript</p>
           <p>90%</p>
          </div>
          </div>
          <div className="ex-bar" data-percent="90%">
            <span style={{width: "90%"}}></span>
          </div>
         </div>
        </Grid>
        <Grid item xs={12} sm={6}>
         <div className="ex-item">
          <div className="ex-info" >
          <div className="ex-in">
           <p>ReactJS</p>
           <p>80%</p>
          </div>
          </div>
          <div className="ex-bar" data-percent="80%">
            <span style={{width: "80%"}}></span>
          </div>
         </div>
        </Grid>
         <Grid item xs={12} sm={6}>
         <div className="ex-item">
          <div className="ex-info" >
          <div className="ex-in">
           <p>VueJS</p>
           <p>55%</p>
          </div>
          </div>
          <div className="ex-bar" data-percent="55%">
            <span style={{width: "55%"}}></span>
          </div>
         </div>
        </Grid>
       </Grid>
      </div>
            <div className="ex-items">
      <h2>Backend</h2>
       <Grid container my={4}>
        <Grid item xs={12} sm={6}>
         <div className="ex-item">
          <div className="ex-info" >
           <div className="ex-in">
            <p>NodeJS/ExpressJS</p>
            <p>30%</p>
           </div>
          </div>
          <div className="ex-bar" data-percent="30%">
            <span style={{width: "30%"}}></span>
          </div>
         </div>
        </Grid>
         <Grid item xs={12} sm={6}>
          <div className="ex-item">
           <div className="ex-info" >
           <div className="ex-in">
            <p>Python</p>
            <p>30%</p>
           </div>
           </div>
           <div className="ex-bar" data-percent="30%">
             <span style={{width: "30%"}}></span>
           </div>
          </div>
         </Grid>
         <Grid item xs={12} sm={6}>
         <div className="ex-item">
          <div className="ex-info" >
          <div className="ex-in">
           <p>NextJS</p>
           <p>15%</p>
          </div>
          </div>
          <div className="ex-bar" data-percent="15%">
            <span style={{width: "15%"}}></span>
          </div>
         </div>
        </Grid>
       </Grid>
      </div>
            <div className="ex-items">
      <h2>Design</h2>
       <Grid container my={4}>
        <Grid item xs={12} sm={6}>
         <div className="ex-item">
          <div className="ex-info" >
           <div className="ex-in">
            <p>Web Design</p>
            <p>44%</p>
           </div>
          </div>
          <div className="ex-bar" data-percent="44%">
            <span style={{width: "44%"}}></span>
          </div>
         </div>
        </Grid>
         <Grid item xs={12} sm={6}>
          <div className="ex-item">
           <div className="ex-info" >
           <div className="ex-in">
            <p>Logo Design</p>
            <p>70%</p>
           </div>
           </div>
           <div className="ex-bar" data-percent="70%">
             <span style={{width: "70%"}}></span>
           </div>
          </div>
         </Grid>
         <Grid item xs={12} sm={6}>
         <div className="ex-item">
          <div className="ex-info" >
          <div className="ex-in">
           <p>UI/UX design</p>
           <p>41%</p>
          </div>
          </div>
          <div className="ex-bar" data-percent="41%">
            <span style={{width: "41%"}}></span>
          </div>
         </div>
        </Grid>
       </Grid>
     </div>
    </section>
  )
}

