
import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../Constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="">
            <img src={footerLogo} alt="nike logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest nike store. Find
            your perfect size in store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link)=>(
                  <li key={link.name} className="text-white mt-3 font-montserrat text-base leading-normal hover:text-slate-gray cursor:pointer">{link.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
              <img src={copyrightSign} width={20} height={20} className="rounded-full" />
              <p>Copyright. All rights reserved</p>
          </div>
        <p className="font-montserrat cursor-pointer">Terms & conditions</p>
      </div> 
      <div className="flex justify-center items-center mt-10 mb-1">
          <p className="font-montserrat text-white-400">Made with ❤️ By Jayant </p>
      </div>
    </footer>
  );
};


export default Footer;
