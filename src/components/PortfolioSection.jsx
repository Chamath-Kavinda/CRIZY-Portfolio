import React, { useState } from "react";
import { Images } from "../utils/images.js";

function PortfolioSection() {
  const [hoveredId, setHoveredId] = useState(null);
  const [clickedId, setClickedId] = useState(null);

  return (
    <>
      {/* PORTFOLIO Title with Fade-Down Animation */}
      <div
        className="w-full h-[60px] bg-secondary hover:bg-primary flex justify-center items-center text-primary hover:text-secondary text-[40px] font-righteous rounded-full cursor-default"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        PORTFOLIO
      </div>

      {/* Image Grid with Fade-Up Animation */}
      <div
        className="w-full flex justify-center mt-[40px] mb-[40px]"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="w-[80%] h-[400px] grid grid-cols-5 gap-5">
          {Images.slice(0, 10).map((item, index) => (
            <div
              key={item.id}
              className={`h-[190px] relative rounded-[20px] overflow-hidden cursor-pointer`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() =>
                setClickedId(clickedId === item.id ? null : item.id)
              }
              data-aos="zoom-in"
              data-aos-delay={`${300 + index * 100}`} // Staggered animation for each image
            >
              {/* Image */}
              <img
                src={item.url}
                alt="portfolio"
                className={`h-full w-full object-cover transition-all duration-300 cursor-pointer ${clickedId === item.id
                    ? "opacity-100"
                    : hoveredId === item.id
                      ? "opacity-80 blur-[1px]"
                      : "opacity-100"
                  }`}
              />


              {/* White Div with Description */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${clickedId === item.id
                    ? "bg-white opacity-100"
                    : hoveredId === item.id
                      ? "bg-white/50 opacity-100"
                      : "opacity-0"
                  }`}
              >
                <div className="m-1 font-rajdhani font-bold">
                  <p className="pb-[15px] underline text-[18px]">Art Description</p>
                  <p className="text-black text-[12px]">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visit More Button with Fade-Up Animation */}
      <div
        className="w-full h-[70px] flex justify-center p-2"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="w-[150px] h-[60px] rounded-[10px] bg-accent flex justify-center items-center cursor-pointer hover:font-semibold hover:scale-110 transition duration-900">
          <a
            href="https://www.instagram.com/didula_prabashwara/"
            target="_blank"
            className="text-white text-[22px] font-rajdhani transition duration-900"
          >
            Visit More ...
          </a>
        </div>
      </div>
    </>
  );
}

export default PortfolioSection;
