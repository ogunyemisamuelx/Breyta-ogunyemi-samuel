import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="w-full bg-[#311F35] text-[#B1A1B5] py-16 px-6 md:px-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        <div>
          <h4 className="text-lg font-bold mb-2">Company</h4>
          <p className="hover:text-white cursor-pointer">About</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">Resources</h4>
          <p className="hover:text-white cursor-pointer">Help Center</p>
          <p className="hover:text-white cursor-pointer">Blog</p>
          <p className="hover:text-white cursor-pointer">
            Free dummy transcripts
          </p>
          <p className="hover:text-white cursor-pointer">
            Free YouTube analysis
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">Legal</h4>
          <p className="hover:text-white cursor-pointer">Privacy</p>
          <p className="hover:text-white cursor-pointer">Cookie Policy</p>
          <p className="hover:text-white cursor-pointer">Terms & Conditions</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">Comparisons</h4>
          <p className="hover:text-white cursor-pointer">Breyta vs Dovetail</p>
          <p className="hover:text-white cursor-pointer">Breyta vs Copilot</p>
          <p className="hover:text-white cursor-pointer">Breyta vs ChatGPT</p>
          <p className="hover:text-white cursor-pointer">Breyta vs Claude</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#4A3C4F] pt-6">
        <Image
          src="/purple.png"
          width={200}
          height={60}
          className="object-contain"
          alt="logo"
        />
        <div className="flex gap-6 mt-6 md:mt-0">
          <FaTwitter className="cursor-pointer hover:text-white" />
          <FaLinkedin className="cursor-pointer hover:text-white" />
          <FaInstagram className="cursor-pointer hover:text-white" />
          <FaFacebook className="cursor-pointer hover:text-white" />
        </div>
        <p className="mt-6 md:mt-0">Copyright © 2025 Breyta AS.</p>
      </div>
    </footer>
  );
};

export default Footer;
