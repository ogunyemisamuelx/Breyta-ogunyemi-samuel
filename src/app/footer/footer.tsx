import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="w-full h-[600px] flex flex-col items-center justify-center bg-[#311F35] text-[#B1A1B5]">
      <div className="w-full flex justify-around p-20">
        <div>
          <h4 className="text-[21px] font-bold">Company</h4>
          <p className="font-bold">About</p>
        </div>
        <div className="">
          <h4 className="text-[21px] font-bold">Resources</h4>
          <p className="font-bold">Help Center</p>
          <p className="font-bold">Blog</p>
          <p className="font-bold">Free dummy transcirpts</p>
          <p className="font-bold">Free Youtube analysis</p>
        </div>
        <div>
          <h4 className="text-[21px] font-bold">Legal</h4>
          <p className="font-bold">Privacy</p>
          <p className="font-bold">Limited Use Disclosure</p>
          <p className="font-bold">Cookie policy</p>
          <p className="font-bold">Terms and conditions</p>
        </div>
        <div>
          <h4 className="text-[21px] font-bold">Comparisons</h4>
          <p className="font-bold">Breyta vs Dovetail</p>
          <p className="font-bold">Breyta vs Copilot</p>
          <p className="font-bold">Breyta vs ChatGpt</p>
          <p className="font-bold">Breyta vs Claude</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="w-[1000px]  border-b-black border-[1px] mt-10" />
        <div className="flex justify-between items-center">
          <Image
            src="/purple.png"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[200px] h-[60px] object-contain pr-16 mt-7"
            alt=""
          />
          <div>Copyright © 2025 Breyta AS.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
