import React from "react";
import Writer from "../Typewriter/Writer";
import { useRouter } from "next/router";
const Home = () => {

  const router = useRouter();
  return (
    <>
    <div className="HomePage">
      <div className="rigid"></div>
      <div className="grid">
        <section className="Profile-Image">

        <div className="img"></div></section>
        <div className="info">
          <div className="name font-bold ">I'M ZARAK KHAN.</div>
          <div className="typewriter leading-10 uppercase font-bold text-white text-[51px] w-[200%] h-[30px]">
            <Writer />
          </div>
          <div className="text mt-11 ">
            I'm a Zarak Khan based web designer & front‑end developer focused on
            crafting clean & user‑friendly experiences, I am passionate about
            building excellent software that improves the lives of those around
            me.
          </div>
          <div className="button" onClick={()=>router.push("/about")} >
            <div className="button-container-2">
              <span className="mas">Click here visit</span>
              <button type="button" name="Hover">
                More About Me
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
