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
          <p className="text-[40px] font-squada-one text-zinc-300">Contact</p>
        </div>
        <div className="text-white flex mt-[20px]">
          <div
            className="w-[calc(45%)] p-3 flex flex-col items-center gap-10 ml-[20px] pt-[70px]"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <p className="text-[40px] font-rubik-80s-fade">Get in Touch</p>
            <p className="text-center text-[16px] text-zinc-400">
              I'd love to hear from you - whether it's about a new project, a
              collaboration, or just to say hi. Drop me a message anytime, and
              I'll get back to you as soon as I can.
            </p>
            <div className="text-black flex gap-5">
              <div className="p-3 w-[50px] h-[50px] bg-zinc-500 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition duration-900">
                <FaInstagram className="text-[30px]" />
              </div>
              <div className="p-3 w-[50px] h-[50px] bg-zinc-500 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition duration-900">
                <FaWhatsapp className="text-[30px]" />
              </div>
              <div className="p-3 w-[50px] h-[50px] bg-zinc-500 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition duration-900">
                <FaFacebookF className="text-[30px]" />
              </div>
              <div className="p-3 w-[50px] h-[50px] bg-zinc-500 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition duration-900">
                <FaLinkedinIn className="text-[30px]" />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-zinc-500">
              <TbMailFilled className="text-[30px]" />
              <p>gmail@gmail.com</p>
            </div>
          </div>
          <div
            className="w-[calc(50%)] py-[40px] bg- rounded-[30px] flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <form
              action=""
              className="flex flex-col items-center p-2 w-[calc(90%)] gap-5 text-zinc-400"
            >
              <div className="flex justify-between w-full">
                <div className="flex flex-col">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    className="border-1 border-zinc-500 rounded-[5px] text-[18px] w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Last Name</label>
                  <input
                    type="text"
                    className="border-1 border-zinc-500 rounded-[5px] text-[18px] w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className="border-1 border-zinc-500 rounded-[5px] text-[18px]"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="">Message</label>
                <textarea
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="50"
                  className="border-1 border-zinc-500 rounded-[5px] text-[18px]"
                ></textarea>
              </div>
              <div className="w-full flex items-center justify-center">
                <button className="py-[8px] w-full bg-zinc-600 rounded-[10px] hover:bg-zinc-700 cursor-pointer hover:scale-105 transition duration-900">
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
