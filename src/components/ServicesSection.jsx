import React from "react";

function ServicesSection() {
  return (
    <>
      <div className="w-full h-[60px] bg-secondary hover:bg-primary flex justify-center items-center text-primary hover:text-secondary text-[40px] font-righteous cursor-default rounded-full" data-aos="fade-up"
        data-aos-delay="400">
          SERVICES
      </div>
      <div className="mt-[20px] flex justify-between">
        <div className="w-[32%] bg-accent rounded-[30px] pt-[30px] pl-[20px] pb-[30px]" data-aos="fade-up"
        data-aos-delay="600">
          <p className="font-outfit font-bold text-secondary mb-[20px]">Graphic Designing</p>
          <p className="font-delius-regular text-white mb-[20px]">Visual that define your brand.</p>
          <div className="font-delius-regular text-white mb-[20px]">
            <p className="font-bold">Package:</p>
            <div className="font-delius-regular ml-[15px] leading-5.5 text-[15px]">
              <p>Starter Design Kit - Logo + 2 Social Media Posts</p>
              <p>Price: LKR 6,500</p>
              <p>Delivery: 3 Days</p>
            </div>
          </div>
          <div className="font-delius-regular text-white mb-[20px]">
            <p className="font-bold">Quality:</p>
            <div className="ml-[15px] leading-5.5">
              <ul>
                <li>• High-resolution exports</li>
                <li>• Brand-consistent color palette</li>
                <li>• Ready for print and digital platforms</li>
              </ul>
            </div>
          </div>
          <div className="font-delius-regular text-white">
            <p className="font-bold">Revisions:</p>
            <div className="ml-[15px] leading-5.5">
              <ul>
                <li>• 1 free revision</li>
                <li>• Additional revisions LKR 1,000 each</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-[32%] bg-accent rounded-[30px] pt-[30px] pl-[20px] pb-[30px]" data-aos="fade-up"
        data-aos-delay="800">
          <p className="font-outfit font-bold text-secondary mb-[20px]">Music Producing</p>
          <p className="font-delius-regular text-white mb-[20px]">Sound that moves. Production that delivers.</p>
          <div className="font-delius-regular text-white mb-[20px]">
            <p className="font-bold">Package:</p>
            <div className="font-delius-regular ml-[15px] leading-5.5">
              <p>Basic Beat - 1 Custom Beat + MP3/WAV Export</p>
              <p>Price: LKR 9,500</p>
              <p>Delivery: 3-4 Days</p>
            </div>
          </div>
          <div className="font-delius-regular text-white mb-[20px]">
            <p className="font-bold">Quality:</p>
            <div className="ml-[15px] leading-5.5">
              <ul>
                <li>• Original beat production</li>
                <li>• Streaming-ready formats</li>
                <li>• Clean mix with punch and clarity</li>
              </ul>
            </div>
          </div>
          <div className="font-delius-regular text-white">
            <p className="font-bold">Revisions:</p>
            <div className="ml-[15px] leading-5.5">
              <ul>
                <li>• 1 free revision</li>
                <li>• Additional revisions LKR 2,000 each</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-[32%] bg-accent rounded-[30px] pt-[30px] pl-[20px] pb-[30px]" data-aos="fade-up"
        data-aos-delay="1000">
          <p className="font-outfit font-bold text-secondary mb-[20px]">Web UI/UX Design (Team-Based)</p>
          <p className="font-delius-regular text-white mb-[20px]">Interfaces built for impact.</p>
          <div className="font-delius-regular text-white mb-[20px]">
            <p className="font-bold">Package:</p>
            <div className="font-delius-regular ml-[15px] leading-5.5">
              <p>Starter Web UI - Homepage + 1 Subpage Wireframe</p>
              <p>Price: LKR 18,000</p>
              <p>Delivery: 5 Days</p>
            </div>
          </div>
          <div className="font-delius-regular text-white mb-[20px]">
            <p className="font-bold">Quality:</p>
            <div className="ml-[15px] leading-5.5">
              <ul>
                <li>• Mobile-first responsive layout</li>
                <li>• Figma-based design</li>
                <li>• Clean, user-friendly interface</li>
              </ul>
            </div>
          </div>
          <div className="font-delius-regular text-white">
            <p className="font-bold">Revisions:</p>
            <div className="ml-[15px] leading-5.5">
              <ul>
                <li>• 2 free revision</li>
                <li>• Additional revisions LKR 2,500 each</li>
              </ul>
            </div>
          </div>
        </div>

        
      </div>
      <p className="text-white text-[20px] pt-[20px] font-libertinus-serif" data-aos="fade-up"
        data-aos-delay="200">• Services can be customized based on your need. Let's talk.</p>
    </>
  );
}

export default ServicesSection;
