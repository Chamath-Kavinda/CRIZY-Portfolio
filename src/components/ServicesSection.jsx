import React from "react";

function ServicesSection() {
  return (
    <>
      <div className="w-full h-[40px] md:h-[60px] bg-secondary hover:bg-primary flex justify-center items-center text-primary hover:text-secondary text-[30px] md:text-[40px] font-righteous cursor-default rounded-full" data-aos="fade-up"
        data-aos-delay="400">
          SERVICES
      </div>
      <div className="mt-[20px] flex flex-col md:flex-row justify-between gap-4 md:gap-0">
        <div className="w-full md:w-[32%] bg-accent rounded-[30px] pt-[30px] pl-[20px] pb-[30px]" data-aos="fade-up"
        data-aos-delay="600">
          <p className="font-outfit font-bold text-secondary mb-[20px] text-[18px] md:text-base">Graphic Designing</p>
          <p className="font-delius-regular text-white mb-[20px] text-[14px] md:text-base">Visual that define your brand.</p>
          <div className="font-delius-regular text-white mb-[20px] text-[14px] md:text-base">
            <p className="font-bold">Package:</p>
            <div className="font-delius-regular ml-[15px] leading-5 text-[13px] md:text-[15px] md:leading-5.5">
              <p>Starter Design Kit - Logo + 2 Social Media Posts</p>
              <p>Price: LKR 6,500</p>
              <p>Delivery: 3 Days</p>
            </div>
          </div>
          <div className="font-delius-regular text-white mb-[20px] text-[14px] md:text-base">
            <p className="font-bold">Quality:</p>
            <div className="ml-[15px] leading-5 md:leading-5.5 text-[13px] md:text-base">
              <ul>
                <li>• High-resolution exports</li>
                <li>• Brand-consistent color palette</li>
                <li>• Ready for print and digital platforms</li>
              </ul>
            </div>
          </div>
          <div className="font-delius-regular text-white text-[14px] md:text-base">
            <p className="font-bold">Revisions:</p>
            <div className="ml-[15px] leading-5 md:leading-5.5 text-[13px] md:text-base">
              <ul>
                <li>• 1 free revision</li>
                <li>• Additional revisions LKR 1,000 each</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[32%] bg-accent rounded-[30px] pt-[30px] pl-[20px] pb-[30px]" data-aos="fade-up"
        data-aos-delay="800">
          <p className="font-outfit font-bold text-secondary mb-[20px] text-[18px] md:text-base">Music Producing</p>
          <p className="font-delius-regular text-white mb-[20px] text-[14px] md:text-base">Sound that moves. Production that delivers.</p>
          <div className="font-delius-regular text-white mb-[20px] text-[14px] md:text-base">
            <p className="font-bold">Package:</p>
            <div className="font-delius-regular ml-[15px] leading-5 text-[13px] md:text-[15px] md:leading-5.5">
              <p>Basic Beat - 1 Custom Beat + MP3/WAV Export</p>
              <p>Price: LKR 9,500</p>
              <p>Delivery: 3-4 Days</p>
            </div>
          </div>
          <div className="font-delius-regular text-white mb-[20px] text-[14px] md:text-base">
            <p className="font-bold">Quality:</p>
            <div className="ml-[15px] leading-5 md:leading-5.5 text-[13px] md:text-base">
              <ul>
                <li>• Original beat production</li>
                <li>• Streaming-ready formats</li>
                <li>• Clean mix with punch and clarity</li>
              </ul>
            </div>
          </div>
          <div className="font-delius-regular text-white text-[14px] md:text-base">
            <p className="font-bold">Revisions:</p>
            <div className="ml-[15px] leading-5 md:leading-5.5 text-[13px] md:text-base">
              <ul>
                <li>• 1 free revision</li>
                <li>• Additional revisions LKR 2,000 each</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[32%] bg-accent rounded-[30px] pt-[30px] pl-[20px] pb-[30px]" data-aos="fade-up"
        data-aos-delay="1000">
          <p className="font-outfit font-bold text-secondary mb-[20px] text-[18px] md:text-base">Web UI/UX Design (Team-Based)</p>
          <p className="font-delius-regular text-white mb-[20px] text-[14px] md:text-base">Interfaces built for impact.</p>
          <div className="font-delius-regular text-white mb-[20px] text-[14px] md:text-base">
            <p className="font-bold">Package:</p>
            <div className="font-delius-regular ml-[15px] leading-5 text-[13px] md:text-[15px] md:leading-5.5">
              <p>Starter Web UI - Homepage + 1 Subpage Wireframe</p>
              <p>Price: LKR 18,000</p>
              <p>Delivery: 5 Days</p>
            </div>
          </div>
          <div className="font-delius-regular text-white mb-[20px] text-[14px] md:text-base">
            <p className="font-bold">Quality:</p>
            <div className="ml-[15px] leading-5 md:leading-5.5 text-[13px] md:text-base">
              <ul>
                <li>• Mobile-first responsive layout</li>
                <li>• Figma-based design</li>
                <li>• Clean, user-friendly interface</li>
              </ul>
            </div>
          </div>
          <div className="font-delius-regular text-white text-[14px] md:text-base">
            <p className="font-bold">Revisions:</p>
            <div className="ml-[15px] leading-5 md:leading-5.5 text-[13px] md:text-base">
              <ul>
                <li>• 2 free revision</li>
                <li>• Additional revisions LKR 2,500 each</li>
              </ul>
            </div>
          </div>
        </div>

        
      </div>
      <p className="text-white text-[16px] md:text-[20px] pt-[20px] font-libertinus-serif" data-aos="fade-up"
        data-aos-delay="200">• Services can be customized based on your need. Let's talk.</p>
    </>
  );
}

export default ServicesSection;