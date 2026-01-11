import React from "react";

function Header() {
  return (
    <>
      <div
        className="text-white w-full h-[60px] bg-primary flex items-center justify-around fixed z-20"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="">
          <p className="text-[30px] font-anton cursor-default">CRIZY</p>
        </div>
        <div className="flex items-center gap-5 font-rajdhani">
          <p className="hover:text-secondary hover:scale-120 transition duration-400 cursor-pointer">
            <a href="#home">HOME</a>
          </p>
          <p className="hover:text-secondary hover:scale-120 transition duration-400 cursor-pointer">
            <a href="#portfolio">PORTFOLIO</a>
          </p>
          <p className="hover:text-secondary hover:scale-120 transition duration-400 cursor-pointer">
            <a href="#services">SERVICES</a>
          </p>
        </div>
        <div className="flex items-center font-rajdhani">
          <p className="hover:text-secondary hover:scale-120 transition duration-400 cursor-pointer">
            <a href="#contact">CONTACT</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
