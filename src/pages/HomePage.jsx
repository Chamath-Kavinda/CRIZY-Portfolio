import React, { useEffect, useState } from "react";
import MainSection from "../components/MainSection";
import PortfolioSection from "../components/PortfolioSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";

function HomePage() {
  

  return (
    <div className="flex w-full">
      <div className="w-[calc(33.33%-250px)] "></div>

      <div className="flex-1">
        <section id="home" className="flex relative h-[600px] mb-[50px] mt-[-50px] pt-[60px]">
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

      <div className="w-[calc(33.33%-250px)]"></div>
    </div>
  );
}

export default HomePage;
