

import { useState, useEffect } from "react"
import lwg from "./lwg.png"
import { ArrowRightCircle } from "react-bootstrap-icons"
import "./Banner.scss"
import { Grid } from "@mui/material"
export default function Banner() {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Web Developer", "Web Design"]
    const [text, setText] = useState("")
    const period = 4000;
    const [delta, setDelta] = useState(300 - Math.random() * 100)
  useEffect(() => {
      let ticker = setInterval(() => {
        tick()
      }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i]
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
      setText(updatedText)
      if(isDeleting) {
        setDelta(prevDelta => prevDelta / 2)
      }
      if(!isDeleting && updatedText === fullText) {
        setIsDeleting(true)
        setDelta(period)
      }
      else if(isDeleting && updatedText === ""){
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setDelta(500)
      }
    }
  return (
    <div className="banner" id="home">
      <Grid container my={4}>
        <Grid item xs={12} sm={6}>             <img src={lwg} alt="Headder Img" />
        </Grid>
        <Grid item xs={12} sm={6}>
         <div className="Banbox">
          <span className="tagline">Wellcome to my Portfolio</span>
          <h1>Hi I'm LWG13 {text}</h1>
          <p>I'm a new on Web Developer, I was started to learn Web Development in June 2024 and i have very much interesting thing to learn in the future!</p>
          <button onClick={() => console.log("connect")} className="btn"> <a href="mailto:tranlegiabao929@gmail.com">Let's Connect! <ArrowRightCircle size={25} /></a></button>
         </div>
        </Grid>
      </Grid>
    </div>
  )
}