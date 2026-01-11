import React from "react";

function Header() {
  return (
    <>
      <div
        className="text-white w-full h-[60px] bg-primary hidden md:flex flex-col md:flex-row items-center justify-around fixed z-20 px-4 md:px-0"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="mb-2 md:mb-0">
          <p className="text-[24px] md:text-[30px] font-anton cursor-default">CRIZY</p>
        </div>
        <div className="hidden md:flex flex-wrap items-center gap-3 md:gap-5 font-rajdhani justify-center md:justify-start">
          <p className="hover:text-secondary hover:scale-120 transition duration-400 cursor-pointer text-[16px] md:text-base">
            <a href="#home">HOME</a>
          </p>
          <p className="hover:text-secondary hover:scale-120 transition duration-400 cursor-pointer text-[16px] md:text-base">
            <a href="#portfolio">PORTFOLIO</a>
          </p>
          <p className="hover:text-secondary hover:scale-120 transition duration-400 cursor-pointer text-[16px] md:text-base">
            <a href="#services">SERVICES</a>
          </p>
        </div>
        <div className="hidden md:flex items-center font-rajdhani mt-2 md:mt-0">
          <p className="hover:text-secondary hover:scale-120 transition duration-400 cursor-pointer text-[16px] md:text-base">
            <a href="#contact">CONTACT</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;