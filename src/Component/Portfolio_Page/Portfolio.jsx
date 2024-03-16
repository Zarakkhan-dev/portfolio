import React from 'react'

const portfolio = () => {
  return (
    <>
    <div className="Portfolio_Page ">
      <div className="title relative  text-center  mt-20 ">
        <h1 className="front  font-extrabold text-[55px]  relative z-10 uppercase">
          My{" "}
          <span className="span-tag text-[#ffb400] font-extrabold ">Portfolio</span>
        </h1>
        <h1 className="absolute top-[-50%] w-[100%] text-[14vh] text-[#222222] font-extrabold z-0 uppercase">
          Working
        </h1>
      </div>

      <div className="Portfolio-grid">

        <div className="Portfolio-grid-1 w-[40vh] h-[70vh] bg-white"></div>
        <div className="Portfolio-grid-2 w-[40vh] h-[70vh] bg-white"></div>
        <div className="Portfolio-grid-3 w-[40vh] h-[70vh] bg-white"></div>
        <div className="Portfolio-grid-4 w-[40vh] h-[70vh] bg-white"></div>
        <div className="Portfolio-grid-5 w-[40vh] h-[70vh] bg-white"></div>
        <div className="Portfolio-grid-6 w-[40vh] h-[70vh] bg-white"></div>
        <div className="Portfolio-grid-7 w-[40vh] h-[70vh] bg-white"></div>
      </div>
      </div>
    </>
  )
}

export default portfolio
