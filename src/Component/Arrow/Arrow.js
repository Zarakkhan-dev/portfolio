import React, { useEffect } from 'react'

const Arrow = () => {
    useEffect(()=>{
        document.addEventListener("mousemove", (e) => {
            const customCursor = document.getElementById("custom-cursor");
            customCursor.style.left = `${e.clientX}px`;
            customCursor.style.top = `${e.clientY}px`;
          });
          document.addEventListener("mousemove", (e) => {
            const customCursor = document.getElementById("custom-cursor1");
            customCursor.style.left = `${e.clientX}px`;
            customCursor.style.top = `${e.clientY}px`;
          });
    })
   
  return (
    <>
    <div id="custom-cursor"></div>
    <div id="custom-cursor1"></div>
    </>
 
  )
}

export default Arrow
