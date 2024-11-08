
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
