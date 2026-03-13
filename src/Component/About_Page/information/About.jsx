import React from "react";

const About = () => {
  return (
    <>
      <div className="title relative  text-center  mt-20">
        <h1 className="front  font-extrabold text-[55px]  relative z-10 uppercase">
          About{" "}
          <span className="span-tag text-[#ffb400] font-extrabold ">Me</span>
        </h1>
        <h1 className="absolute top-[-50%] w-[100%] text-[14vh] text-[#222222] font-extrabold z-0 uppercase">
          Resume
        </h1>
      </div>

      <div className="Section-1">
        <div className="personal_info">
          <div className="info_title font-semibold text-[25px] uppercase">
            Personal infos
          </div>
          <div className="details ">
            <div className="First-Name text-[#bbbbbb] h-[100%]">
              First Name : <span className="text-[#e6e6e6]">Zarak</span>
            </div>
            <div className="Last-Name text-[#bbbbbb] ">
              Last Name : <span className="text-[#e6e6e6]">Khan</span>
            </div>
            <div className="Age text-[#bbbbbb] ">
              Age : <span className="text-[#e6e6e6]">24</span>
            </div>
            <div className="Nationality text-[#bbbbbb] ">
              Nationality : <span className="text-[#e6e6e6]">Pakistani</span>
            </div>
            <div className="Freelance text-[#bbbbbb] ">
              Freelance : <span className="text-[#5be85b]">Available</span>
            </div>
            <div className="Address text-[#bbbbbb] ">
              Address :{" "}
              <span className="text-[#e6e6e6]">Lahore</span>
            </div>
            <div className="Phone text-[#bbbbbb] ">
              Phone : <span className="text-[#e6e6e6]">+92 310-1758072</span>
            </div>
            <div className="Email text-[#bbbbbb] ">
              Email :{" "}
              <span className="text-[#e6e6e6]">zarak.khan.swe@gmail.com</span>
            </div>
            <div className="Linkedin text-[#bbbbbb] ">
              LinkedIn :{" "}
              <span className="text-[#e6e6e6]">
                https://www.linkedin.com/in/zarak-khan-dev/
              </span>
            </div>
            <div className="language text-[#bbbbbb] ">
              Language :{" "}
              <span className="text-[#e6e6e6]">English , Urdu and Spanish</span>
            </div>
          </div>
        </div>
        <div className="overview ">
          <div className="overview-1 grid grid-cols-2 ">
            <div className="year-experience box-work ">
              <div className="number text-[#ffb400]">3+</div>

              <div className="discr flex gap-5 mt-1 ml-2">
                <div className="hr">
                  {" "}
                  <div className="w-[35px] h-[1px] bg-white"> </div>
                </div>
                <div className="text-About">Years of experience</div>
              </div>
            </div>
            <div className="Project-complete box-work">
              <div className="number">97+</div>
              <div className="discr flex gap-5 mt-1 ml-2">
                <div className="hr">
                  {" "}
                  <div className="w-[35px] h-[1px] bg-white"> </div>
                </div>
                <div className="text-About">Completed projects</div>
              </div>
            </div>
            <div className="Happy-customer box-work">
              <div className="number">81+</div>

              <div className="discr flex gap-5 mt-1 ml-2">
                <div className="hr">
                  {" "}
                  <div className="w-[35px] h-[1px] bg-white"> </div>
                </div>
                <div className="text-About">Happy Customers</div>
              </div>
            </div>
            <div className="certification-win box-work">
              <div className="number">10+</div>
              <div className="discr flex gap-5 mt-1 ml-3">
                <div className="hr">
                  {" "}
                  <div className="w-[35px] h-[1px] bg-white"> </div>
                </div>
                <div className="text-About">Completed projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="mt-[12vh] text-center font-extrabold text-[25px] uppercase">
        My SKills
      </h1>
      <div className="Skills-show">
        <div className="Skill">
          <div className="progress-bar">95%</div>
          <h1 className="text-center mt-4">HTML</h1>
        </div>
        <div className="Skill">
          <div className="progress-bar">87%</div>
          <h1 className="text-center mt-4">CSS</h1>
        </div>
        <div className="Skill">
          <div className="progress-bar">85%</div>
          <h1 className="text-center mt-4">JAVASCRIPT</h1>
        </div>
        <div className="Skill">
          <div className="progress-bar">80%</div>
          <h1 className="text-center mt-4">REACT JS</h1>
        </div>
        <div className="Skill">
          <div className="progress-bar">85%</div>
          <h1 className="text-center mt-4">NEXT JS</h1>
        </div>
        <div className="Skill">
          <div className="progress-bar">70%</div>
          <h1 className="text-center mt-4">NODE JS</h1>
        </div>
        <div className="Skill">
          <div className="progress-bar">75%</div>
          <h1 className="text-center mt-4">EXPRESS JS</h1>
        </div>
        <div className="Skill">
          <div className="progress-bar">87%</div>
          <h1 className="text-center mt-4">MONGODB</h1>
        </div>
        <div className="Skill">
          <div className="progress-bar">90%</div>
          <h1 className="text-center mt-4">MONGOOSE</h1>
        </div>
        <div className="Skill">
          <div className="progress-bar">85%</div>
          <h1 className="text-center mt-4">DJANGO</h1>
        </div>
        <div className="Skill">
          <div className="progress-bar">70%</div>
          <h1 className="text-center mt-4">PYTORCH</h1>
        </div>
        <div className="Skill">
          <div className="progress-bar">70%</div>
          <h1 className="text-center mt-4">REACT NATIVE</h1>
        </div>
            <div className="Skill">
          <div className="progress-bar">90%</div>
          <h1 className="text-center mt-4">.Net</h1>
        </div>
           <div className="Skill">
          <div className="progress-bar">70%</div>
          <h1 className="text-center mt-4">Blazor .Net</h1>
        </div>
           <div className="Skill">
          <div className="progress-bar">80%</div>
          <h1 className="text-center mt-4">Generative AI</h1>
        </div>
      </div>
      <h1 className="mt-[12vh] text-center font-extrabold text-[25px] uppercase">
        EXPERIENCE & EDUCATION
      </h1>
      <div className="Experience-Education-Section">
        <div className="Experience">
          <div className="experince-box">
            <div className="Layout-Icon flex flex-col items-center">
            <div className="icon-section-About ">
              <i
                className="fa-solid fa-briefcase fa-sm"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
            <div className="w-[1px] h-[100px] bg-[#333333] border-none" > </div>
            </div>
            <div className="Info-section-About ">
              <p className="bg-[#212121] text-[#c6c6c6] text-[12px] rounded-lg font-[700] uppercase flex items-center gap-[3px]  py-[3px] px-[7px]">
                {" "}
                2023 <span className="w-[3px] h-[1px] bg-white"></span> Present
              </p>
              <h1 className="flex items-center   gap-[7px] font-[600] text-[20px]">
                Ceo & Founder <span className="w-[10px] h-[1px] bg-[#cfcfcf]"></span>{" "}
                <span className="text-[#cfcfcf]">Devverse</span>
              </h1>
              <p className="text-[#c6c6c6] text-[15px]">
                Offer Service of Web Development, Business Development ,
                Automated Software ,Graphic Designing and Cotent Writing
              </p>
            </div>
          </div>
          <div className="experince-box">
          <div className="Layout-Icon flex flex-col items-center">
            <div className="icon-section-About ">
              <i
                className="fa-solid fa-briefcase fa-sm"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
            <div className="w-[1px] h-[100px] bg-[#333333] border-none" > </div>
            </div>
            <div className="Info-section-About ">
              <p className="bg-[#212121] text-[#c6c6c6] text-[12px] rounded-lg font-[700] uppercase flex items-center gap-[3px]  py-[3px] px-[7px]">
                {" "}
                2026 <div className="w-[3px] h-[1px] bg-white"></div> Present
              </p>
              <h1 className="flex items-center   gap-[7px] font-[600] text-[20px]">
              Associate Software Engineer <span className="w-[10px] h-[1px] bg-[#cfcfcf]"></span>{" "}
                <span className="text-[#cfcfcf]">Tronsit Solutions</span>
              </h1>
              <p className="text-[#c6c6c6] text-[15px]">
              Developed and maintained software applications using .NET framework. Collaborated with cross-functional teams to deliver high-quality solutions.
              </p>
            </div>
          </div>
            <div className="experince-box">
          <div className="Layout-Icon flex flex-col items-center">
            <div className="icon-section-About ">
              <i
                className="fa-solid fa-briefcase fa-sm"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
            <div className="w-[1px] h-[100px] bg-[#333333] border-none" > </div>
            </div>
            <div className="Info-section-About ">
              <p className="bg-[#212121] text-[#c6c6c6] text-[12px] rounded-lg font-[700] uppercase flex items-center gap-[3px]  py-[3px] px-[7px]">
                {" "}
                20 <div className="w-[3px] h-[1px] bg-white"></div> 2023
              </p>
              <h1 className="flex items-center   gap-[7px] font-[600] text-[20px]">
              Mern Developer <span className="w-[10px] h-[1px] bg-[#cfcfcf]"></span>{" "}
                <span className="text-[#cfcfcf]">Weeam Elnaggar</span>
              </h1>
              <p className="text-[#c6c6c6] text-[15px]">
              Work on a real estate Project, Build modules survey, listing, expense and whole website modals
              </p>
            </div>
          </div>
          <div className="experince-box">
          <div className="Layout-Icon flex flex-col items-center">
            <div className="icon-section-About ">
              <i
                className="fa-solid fa-briefcase fa-sm"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
            <div className="w-[1px] h-[100px] bg-[#333333] border-none" > </div>
            </div>
            <div className="Info-section-About ">
              <p className="bg-[#212121] text-[#c6c6c6] text-[12px] rounded-lg font-[700] uppercase flex items-center gap-[3px]  py-[3px] px-[7px]">
                {" "}
                2024 <div className="w-[3px] h-[1px] bg-white"></div> 2025
              </p>
              <h1 className="flex items-center   gap-[7px] font-[600] text-[20px]">
              Junior Associate Software Engineering <span className="w-[10px] h-[1px] bg-[#cfcfcf]"></span>{" "}
                <span className="text-[#cfcfcf]">Edify Group of IT</span>
              </h1>
              <p className="text-[#c6c6c6] text-[15px]">
              Work on a React Native and Next js
              </p>
            </div>
          </div>
        </div>
        <div className="Education">
        <div className="education-box">
        <div className="Layout-Icon flex flex-col items-center">
            <div className="icon-section-About ">
              <i
                className="fa-solid fa-briefcase fa-sm"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
            <div className="w-[1px] h-[100px] bg-[#333333] border-none" > </div>
            </div>
            <div className="Info-section-About ">
              <p className="bg-[#212121] text-[#c6c6c6] text-[12px] rounded-lg font-[700] uppercase flex items-center gap-[3px]  py-[3px] px-[7px]">
                {" "}
                2020 <div className="w-[3px] h-[1px] bg-white"></div> 2024
              </p>
              <h1 className="flex items-center   gap-[7px] font-[600] text-[20px]">
              BS Software Engineering <span className="w-[10px] h-[1px] bg-[#cfcfcf]"></span>{" "}
                <span className="text-[#cfcfcf]">The University of Faisalabad</span>
              </h1>
              <p className="text-[#c6c6c6] text-[15px]">
             cgpa : 3.54
              </p>
            </div>
          </div>
          <div className="education-box">
          <div className="Layout-Icon flex flex-col items-center">
            <div className="icon-section-About ">
              <i
                className="fa-solid fa-briefcase fa-sm"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
            <div className="w-[1px] h-[100px] bg-[#333333] border-none" > </div>
            </div>
            <div className="Info-section-About ">
              <p className="bg-[#212121] text-[#c6c6c6] text-[12px] rounded-lg font-[700] uppercase flex items-center gap-[3px]  py-[3px] px-[7px]">
                {" "}
                2018 <div className="w-[3px] h-[1px] bg-white"></div>  2020
              </p>
              <h1 className="flex items-center gap-[7px] font-[600] text-[20px]">
              F.S.c Engineering  <span className="w-[10px] h-[1px] bg-[#cfcfcf]"></span>{" "}
                <span className="text-[#cfcfcf]">Punjab Group of Collage</span>
              </h1>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
