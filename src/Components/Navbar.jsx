
import "./Navbar.scss"

import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true)
      }
      else{
        setScrolled(false)
      }
      
    }
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll",onScroll)
    }
  }, [])
  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }
  return (
    <header className={scroll ? "scrolled" : ""}>
     <div className="logo">
       <img src="" alt ="logo" />
      </div>
      <div>
       <nav className="navigation">
        <a href="/" className={activeLink === "home"? "active nav-bar-link" : "nav-bar-link"} onClick={() => onUpdateActiveLink("home")}>Home </a>
        <a href="/" className={activeLink === "skill" ? "active nav-bar-link" : "nav-bar-link"} onClick={() => onUpdateActiveLink("skill")}>Skill</a>
        <a href="/" className={activeLink === "project"? "active nav-bar-link" : "nav-bar-link"} onClick={() => onUpdateActiveLink("project")}>Project</a>
       </nav>
      <span className="navbar-text">
       <div className="social-icon">
         <a href="#"><img src="" alt="github" /></a>
         <a href="#"><img src="" alt="Facbook" /></a>
         <a href="#"><img src="" alt="discord" /></a>
       </div>
       <button className="vvd" onClick ={() => console.log("connect")}>
        <span>Let's Contact!</span>
       </button>
      </span>
      </div>
    </header>
  )
}