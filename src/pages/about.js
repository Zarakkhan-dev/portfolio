import Arrow from '@/Component/Arrow/Arrow'
import React from 'react'
import Navbar from '@/Component/Navbar/Navbar';
import About from "@/Component/About_Page/information/About";
const about = () => {
  return (
    <>
    <div className="About-Page">
    <Arrow/>
    <Navbar/>
    <div className="Scrollable-About-Page ">
    <About/>
    </div>
    </div>
    </>
  )
}

export default about
