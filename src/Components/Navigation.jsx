import "./Navigation.scss";
import React from "react";
import amd from "./amd.png";
import { HiMenuAlt2 } from "react-icons/hi" 
import { useState, useRef, useEffect  } from "react"
import github from "./github.png"
import Facebook from "./Facebook.png"
import inkendIn from "./inkendIn.png"
import Logo from "./Logo.png"
export default function 
Navigation() {
  return (
    <div className = "navigation">
      <img src={Logo} alt="amd" className="logoWeb" />
      <ul>
       <li><a href="#">Home</a></li>
       <li><a href="#">Skill</a></li>
       <li><a href="#">Projects</a></li>
      </ul>
      <span className="navbar-text">
       <div className="social-icon">
         <a href=" https://github.com/LWG13"><img src={github} alt="github" /></a>
         <a href=" https://www.facebook.com/profile.php?id=100086165035880&mibextid=ZbWKwL"><img src={Facebook} alt="Facbook" /></a>
         <a href=" https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav"><img src={inkendIn} alt="LinkedIn" /></a>
       </div>
       <button className="vvd" onClick ={() => console.log("connect")}>
        <a href="mailto:tranlegiabao929@gmail.com ">Let's Contact!</a>
       </button>
      </span>
    </div>
  )
}

