import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaRegQuestionCircle } from "react-icons/fa";

const Gallery = () => {
  const [boxes, setBoxes] = useState([
    "from-pink-500 to-purple-500",
    "from-blue-500 to-cyan-500",
    "from-green-500 to-lime-500",
  ]);
  const [index, setIndex] = useState(0);

  const addBox = () => {
    const gradients = [
      "from-yellow-500 to-orange-500",
      "from-rose-500 to-red-500",
      "from-teal-500 to-emerald-500",
      "from-indigo-500 to-violet-500",
      "from-sky-500 to-blue-600",
    ];
    const randomGradient =
      gradients[Math.floor(Math.random() * gradients.length)];
    setBoxes((prev) => [...prev, randomGradient]);
  };

  const prevBox = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : boxes.length - 1));
  };

  const nextBox = () => {
    setIndex((prev) => (prev < boxes.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="bg-[#2E3338] text-white p-6 rounded-2xl shadow-xl w-[720px] max-h-[316px] ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          {/* Question Icon */}
          {/* <div className="p-[2px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            <div className="bg-[#2E3338] rounded-full p-2 text-white">
              <FaRegQuestionCircle />
            </div>
          </div> */}
          <div className="rounded-full p-[5px] bg-gradient-to-r from-[#4A4E54] to-[#A3ADBA] cursor-pointer hover:scale-110 transition-transform duration-300 flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 bg-[#363C43] rounded-full text-white text-lg font-bold">
              ?
            </div>
          </div>

          {/* Title */}
          <button className="bg-[#171717] text-white font-semibold px-6 py-2 rounded-2xl shadow-inner">
            Gallery
          </button>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={addBox}
            className="px-5 py-2 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            + ADD BOX
          </button>
          <button
            onClick={prevBox}
            className="w-10 h-10 bg-[#1e1e1e] rounded-full flex items-center justify-center hover:scale-110 transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextBox}
            className="w-10 h-10 bg-[#1e1e1e] rounded-full flex items-center justify-center hover:scale-110 transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Box Display */}
      <div className="flex gap-4 justify-center ">
        {boxes.slice(index, index + 3).map((color, i) => (
          <div
            key={i}
            className={`w-52 h-52 rounded-2xl bg-linear-to-r from-gray-400 via-gray-500 to-gray-600 shadow-lg 
    transition-all duration-500 transform hover:scale-105 
    hover:from-black hover:via-gray-900 hover:to-black`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
