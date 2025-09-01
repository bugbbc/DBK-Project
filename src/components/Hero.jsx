import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-white relative overflow-hidden bg-gray-900"
    >
      <div className="text-center z-20">
        <h1
          className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg"
        >
          DBK 智撰工坊
        </h1>
        <p
          className="text-lg md:text-2xl mb-8 drop-shadow-md"
        >
          赋能政务写作，开启智能新篇章
        </p>
        <a
          href="#project-intro"
          className="main-btn"
        >
          开始体验
        </a>
      </div>
      <div
        className="absolute bottom-10 animate-bounce z-20"
      >
        <FaArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
