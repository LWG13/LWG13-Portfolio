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
   <div>
    <div className = "navigation">
      <img src={Logo} alt="amd" className="logoWeb" />
      <ul>
       <li><Link to="/LWG13-Portfolio/">Home</Link></li>
       <li><Link to="/LWG13-Portfolio/faq">FAQ</Link></li>
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
      <Menu menu={menu} setMenu={setMenu} />
     </div>
      <Outlet />
    </div>
  )
}
function Menu({menu, setMenu}) {
    useEffect(() => {
     let handler = (e) => {
       if(!menuRef.current.contains(e.target)){
         setMenu(false)
       }
     }
     document.addEventListener("mousedown", handler)
     return () => document.removeEventListener("mousedown",handler)
    })
  const menuRef = useRef(null)
  return (
     <div className="app">
       <div className="menuContainer" ref={menuRef}>
         <div className="menu-trigger" onClick={() => {setMenu(!menu)}} >
         <img className="image" src={menu2} alt="menu" width="30px"/>
         </div>
         <div className={`dropdownmenu ${ menu ? "active" : "deactive" }`}>
           <h3>LWG13<br/><span>Web Developer</span></h3>
             <li  className="dropdownitem" >
               <Link to="/LWG13-Portfolio/" className="link">Home</Link>
             </li>
             <li className="dropdownitem">
              <Link to="/LWG13-Portfolio/service" className="link">Service</Link>
             </li> 
            <li className="dropdownitem">
      <Link to="/LWG13-Portfolio/faq" className="link">FAQ</Link>
           </li>
         </div>
       </div>
     </div>
  )
}
