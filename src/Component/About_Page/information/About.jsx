import React from 'react'

const About = () => {
  return (
    <>
    <div className="title relative  text-center  mt-20" >
      <h1 className="front  font-extrabold text-[8vh]  relative z-10">
        About <span className='span-tag text-[#ffb400] font-extrabold '>Me</span>
      </h1>
      <h1 className='absolute top-[-40%] right-[33%] text-[14vh] text-[#222222] font-extrabold z-0 uppercase'>Resume</h1>
    </div>

    <div className="Section-1">
      <div className="personal_info">
        <div className="info_title font-semibold text-[3vh]">
          Personal infos
        </div>
        <div className="details ">
          <div className="First-Name text-[#bbbbbb] h-[100%]" >First Name : <span className='text-[#e6e6e6]'>Zarak</span></div>
          <div className="Last-Name text-[#bbbbbb] ">Last Name : <span className='text-[#e6e6e6]'>Khan</span></div>
          <div className="Age text-[#bbbbbb] ">Age : <span className='text-[#e6e6e6]'>22</span></div>
          <div className="Nationality text-[#bbbbbb] ">Natioanlity : <span className='text-[#e6e6e6]'>Pakistani</span></div>
          <div className="Freelance text-[#bbbbbb] ">Freelance : <span className='text-[#e6e6e6]'>Available</span></div>
          <div className="Address text-[#bbbbbb] ">Address : <span className='text-[#e6e6e6]'>Faisal, Town Faisalabad</span></div>
          <div className="Phone text-[#bbbbbb] ">Phone : <span className='text-[#e6e6e6]'>+92 310-1758072</span></div>
          <div className="Email text-[#bbbbbb] ">Email : <span className='text-[#e6e6e6]'>zarakkhan1031@gmail.com</span></div>
          <div className="Linkedin text-[#bbbbbb] ">LinkedIn : <span className='text-[#e6e6e6]'>Zarak</span></div>
          <div className="language text-[#bbbbbb] ">Language : <span className='text-[#e6e6e6]'>English , Urdu and Spanish</span></div>
        </div>

      </div>
      <div className="overview">
        <div className="overview-1 grid grid-cols-2 ">
    <div className="year-experience box-work ">
      <div className="number text-[#ffb400]">
        3+
      </div>
      <div className="text-About">
        Years of experience
      </div>
    </div>
    <div className="Project-complete box-work">
      <div className="number">
        97+
      </div>
      <div className="text-About">
        Completed projects 
      </div>
    </div>
    <div className="Happy-customer box-work">
      <div className="number">
        81+
      </div>
      <div className="text-About">
        Happy Customers
      </div>
    </div>
    <div className="certification-win box-work">
      <div className="number">
        10+
      </div>
      <div className="text-About">
        Cerification
      </div>
    </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default About
