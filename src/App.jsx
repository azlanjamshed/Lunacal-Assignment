import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Tabs from "./components/Tabs";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <div className=" w-[1728px] h-[895px] flex p-10 gap-10 ">
        {/* Left side */}
        <div className="w-1/2 bg-[#363C43] flex items-center justify-center rounded-[19px]">
          {/* You can put content here */}
          <h1 className="text-white text-3xl font-bold">Left Side</h1>
        </div>

        {/* Right side */}
        <div className="w-1/2  flex flex-col bg-gray-800 py-5 gap-10 items-center rounded-[19px] ">
          {/* Top right */}
          <div className="flex-1  w-[720px] max-h-[316px] overflow-auto rounded-[19px] shadow-2xl    ">
            <Tabs />
          </div>
          <hr className="w-[612px] h-[6px] rounded-full bg-gradient-to-b from-[#555A60] to-[#2F3439] shadow-inner" />

          {/* Bottom right */}
          <div className="flex-1  p-4 bg-[#2E3338] text-white flex items-center justify-center w-[720px] h-[330px] rounded-[19px] overflow-auto">
            <Gallery />
          </div>
          <hr className="w-[612px] h-[6px] rounded-full bg-gradient-to-b from-[#555A60] to-[#2F3439] shadow-inner" />
        </div>
      </div>
    </>
  );
}

export default App;
