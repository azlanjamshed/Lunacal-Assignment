import React, { useState } from "react";
import Navbar from "./Navbar";
import AboutMe from "../pages/About";
import Experiences from "../pages/Experience";
import Recommended from "../pages/Recommended";
import { FaRegQuestionCircle } from "react-icons/fa";

const Tabs = () => {
  const pages = [<AboutMe />, <Experiences />, <Recommended />];
  const items = [
    { name: "About Me" },
    { name: "Experiences" },
    { name: "Recommended" },
  ];
  const [active, setActive] = useState(0);

  return (
    // <div className="min-h-screen bg-[#363C43] p-10">
    //   <div className="inline-block rounded-full p-[5px] bg-gradient-to-r from-[#4A4E54] to-[#A3ADBA] cursor-pointer hover:scale-110 transition-transform duration-300">
    //     <div className="flex items-center justify-center w-10 h-10 bg-[#363C43] rounded-full text-white text-lg font-bold">
    //       ?
    //     </div>
    //   </div>
    //   <div>
    //     <Navbar items={items} active={active} setActive={setActive} />
    //     <div>{pages[active]}</div>
    //   </div>
    // </div>

    <div className=" bg-[#363C43] p-5 ">
      {/* Top row: Icon + Navbar */}

      <div className="flex items-start gap-6">
        {/* Gradient ? Icon */}
        <div className="rounded-full p-[5px] bg-gradient-to-r from-[#4A4E54] to-[#A3ADBA] cursor-pointer hover:scale-110 transition-transform duration-300 flex-shrink-0">
          <div className="flex items-center justify-center w-12 h-12 bg-[#363C43] rounded-full text-white text-lg font-bold">
            ?
          </div>
        </div>

        {/* Navbar + Page Content */}
        <div className="flex-1">
          <Navbar items={items} active={active} setActive={setActive} />
          <div className="mt-6 text-white">{pages[active]}</div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
