import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";

function ContactSection() {
  return (
    <>
      <div
        className="w-full bg-accent rounded-[30px] pb-[50px]"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div
          className="w-full flex justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <p className="text-[30px] md:text-[40px] font-squada-one text-zinc-300">Contact</p>
        </div>
        <div className="text-white flex flex-col md:flex-row mt-[20px]">
          <div
            className="w-full md:w-[45%] p-3 flex flex-col items-center gap-10 ml-0 md:ml-[20px] pt-[40px] md:pt-[70px]"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <p className="text-[30px] md:text-[40px] font-rubik-80s-fade">Get in Touch</p>
            <p className="text-center text-[14px] md:text-[16px] text-zinc-400 px-4 md:px-0">
              I'd love to hear from you - whether it's about a new project, a
              collaboration, or just to say hi. Drop me a message anytime, and
              I'll get back to you as soon as I can.
            </p>
            <div className="text-black flex gap-3 md:gap-5">
              <a href="https://www.instagram.com/didula_prabashwara/" target="_black" className="p-2 md:p-3 w-[40px] md:w-[50px] h-[40px] md:h-[50px] bg-zinc-500 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition duration-900">
                <FaInstagram className="text-[24px] md:text-[30px]" />
              </a>
              <a href="https://wa.me/94715973909" className="p-2 md:p-3 w-[40px] md:w-[50px] h-[40px] md:h-[50px] bg-zinc-500 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition duration-900">
                <FaWhatsapp className="text-[24px] md:text-[30px]" />
              </a>
              <a href="https://www.facebook.com/dcrizy1" className="p-2 md:p-3 w-[40px] md:w-[50px] h-[40px] md:h-[50px] bg-zinc-500 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition duration-900">
                <FaFacebookF className="text-[24px] md:text-[30px]" />
              </a>
              <a href="https://www.linkedin.com/in/didula-prabashwara-695a14282" className="p-2 md:p-3 w-[40px] md:w-[50px] h-[40px] md:h-[50px] bg-zinc-500 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition duration-900">
                <FaLinkedinIn className="text-[24px] md:text-[30px]" />
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-zinc-500 text-[14px] md:text-base">
              <TbMailFilled className="text-[24px] md:text-[30px]" />
              <p>gmail@gmail.com</p>
            </div>
          </div>
          <div
            className="w-full md:w-[50%] py-[40px] bg- rounded-[30px] flex flex-col items-center mt-4 md:mt-0"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <form
              action=""
              className="flex flex-col items-center p-2 w-[90%] gap-5 text-zinc-400"
            >
              <div className="flex flex-col md:flex-row justify-between w-full gap-4 md:gap-0">
                <div className="flex flex-col w-full md:w-auto">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    className="border-1 border-zinc-500 rounded-[5px] text-[16px] md:text-[18px] w-full"
                  />
                </div>
                <div className="flex flex-col w-full md:w-auto">
                  <label htmlFor="">Last Name</label>
                  <input
                    type="text"
                    className="border-1 border-zinc-500 rounded-[5px] text-[16px] md:text-[18px] w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className="border-1 border-zinc-500 rounded-[5px] text-[16px] md:text-[18px]"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="">Message</label>
                <textarea
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="50"
                  className="border-1 border-zinc-500 rounded-[5px] text-[16px] md:text-[18px]"
                ></textarea>
              </div>
              <div className="w-full flex items-center justify-center">
                <button className="py-[8px] w-full bg-zinc-600 rounded-[10px] hover:bg-zinc-700 cursor-pointer hover:scale-105 transition duration-900 text-[16px] md:text-base">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactSection;