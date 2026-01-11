import React, { useEffect, useState } from "react";
import MainSection from "../components/MainSection";
import PortfolioSection from "../components/PortfolioSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";

function HomePage() {
  

  return (
    <div className="flex w-full flex-col md:flex-row">
      <div className="hidden md:block w-0 md:w-[calc(33.33%-250px)]"></div>

      <div className="flex-1 px-4 md:px-0">
        <section id="home" className="flex relative h-[300px] md:h-[600px] mb-[50px] mt-[-50px] pt-[60px]">
            <MainSection/>
        </section>
        <section id="portfolio" className="pt-[60px]">
            <PortfolioSection/>
        </section>
        <section id="services" className="pt-[60px]">
            <ServicesSection/>
        </section>
        <section id="contact" className="pt-[70px]">
            <ContactSection/>
        </section>
      </div>

      <div className="hidden md:block w-0 md:w-[calc(33.33%-250px)]"></div>
    </div>
  );
}

export default HomePage;