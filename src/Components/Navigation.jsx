import "./Navigation.scss";
import React from "react";
import amd from "./amd.png";
import menu2 from "./menu.png" 
import { useState, useRef, useEffect  } from "react"
import {Outlet} from "react-router-dom"
import { Link } from "react-router-dom"
import github from "./github.png"
import Facebook from "./Facebook.png"
import inkendIn from "./inkendIn.png"
import Logo from "./Logo.png"

export default function 
Navigation() {
  const [menu, setMenu] = useState(false)
  return (
   <div className="navi">
    <div className = "navigation">
      <img src={Logo} alt="amd" className="logoWeb" />
      <ul>
       <li><Link to="/LWG13-Portfolio/">Home</Link></li>   
       <li><Link to="/LWG13-Portfolio/skill">Skills</Link></li>
      </ul>
      <span className="navbar-text">
       <div className="social-icon">
         <a href=" https://github.com/LWG13"><img src={github} alt="github" /></a>
         <a href=" https://www.facebook.com/profile.php?id=100086165035880&mibextid=ZbWKwL"><img src={Facebook} alt="Facbook" /></a>
