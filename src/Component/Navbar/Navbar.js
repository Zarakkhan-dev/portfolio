import React, {  useState } from "react";
import Link from "next/link";
const Navbar = () => {
 const [Change_color,updateChange_color] = useState("home");


  return (
    <>
    <nav>
    <ul className="menu">
        <Link href="/"> 
        <li className={`menu-item  ${Change_color ==="home" ? "active":"" }`} onClick={()=>updateChange_color("home")} >
        <div className="icon" style={{marginLeft:11}}> <i className="fa-solid fa-house-chimney"></i> </div>
            <div className="name" >Home</div>
        </li>
        </Link>
        <Link href="/about">
        <li className={`menu-item  ${Change_color ==="about" ? "active":"" }`} onClick={()=>updateChange_color("about")}>
        <div className="icon"><i className="fa fa-user"></i></div>
            <div className="name">About </div>
        </li>
        </Link>
        <li className={`menu-item  ${Change_color ==="portfolio" ? "active":"" }`} onClick={()=>updateChange_color("portfolio")}>
        <div className="icon"> <i className="fa-solid fa-briefcase"></i> </div>
            <div className="name" id ="portfolio-tab" >Portfolio</div>
        </li>
        <li className={`menu-item  ${Change_color ==="contact" ? "active":"" }`} onClick={()=>updateChange_color("contact")} >
        <div className="icon"><i className="fa-solid fa-envelope-open"></i></div>
            <div className="name" id="contact-tab" >Contact </div>
        </li>
    </ul>
    </nav>
    </>
  );
};

export default Navbar;
