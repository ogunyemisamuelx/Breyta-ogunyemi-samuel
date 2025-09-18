"use client";
import Image from "next/image";

import { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [togglebox, setTogglebox] = useState<boolean>(false);
  const tb = () => {
    setTogglebox(!togglebox);
  };
  const tt = () => setToggle(!toggle);

  return (
    <div className="w-full h-[80px] bg-[#FFFC92] border-b flex justify-between items-center px-6 md:px-16">
      <div className="flex gap-8 cursor-pointer items-center">
        {/* Left Nav */}
        <div className="lg:flex gap-6 hidden">
          <div className="relative">
            <div
              className="flex gap-1 items-center cursor-pointer"
              onClick={tt}
            >
              <span>Product</span>
              <Image
                src="/caret.png"
                width={16}
                height={16}
                alt=""
                className={`transition-transform duration-200 ${
                  toggle ? "rotate-180" : ""
                }`}
              />
            </div>
            {toggle && (
              <div className="absolute bg-white w-[250px] rounded-md flex flex-col justify-center p-4 gap-4 border mt-3 shadow-md">
                <p>AI-driven qualitative data analysis</p>
                <p>Automatic transcription</p>
                <p>AI-driven research repository</p>
              </div>
            )}
          </div>
          <nav>Resources</nav>
          <nav>Get a demo</nav>
          <nav>Pricing</nav>
        </div>

        {/* Logo */}
        <Image
          src="/yellow.png"
          width={90}
          height={50}
          alt="logo"
          className="object-contain"
        />
      </div>

      {/* Right Buttons */}
      <div className="flex gap-4 items-center">
        <button className="px-5 py-2 bg-[#D5D3DD] rounded-3xl hidden lg:block">
          Login
        </button>
        <button className="px-4 py-2 bg-[#2ADD8C] rounded-3xl text-white hidden lg:block">
          Start 14-day free trial
        </button>
        <div>
          <VscThreeBars
            className="lg:hidden relative cursor-pointer"
            size={28}
            onClick={() => tb()}
          />
          {/* {absolute} */}
          {togglebox && (
            <div className=" absolute  left-0 lg:hidden w-full bg-white h-[500px] items-center justify-center">
              <div className="flex gap-8 cursor-pointer items-center">
                {/* Left Nav */}
                <div className="gap-6 w-full flex items-center justify-center flex-col">
                  <div className="relative">
                    <div
                      className="flex gap-1 items-center cursor-pointer"
                      onClick={tt}
                    >
                      <span>Product</span>
                      <Image
                        src="/caret.png"
                        width={16}
                        height={16}
                        alt=""
                        className={`transition-transform duration-200 ${
                          toggle ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {toggle && (
                      <div className="absolute bg-[#FFFC92] w-[250px] rounded-md flex flex-col justify-center p-4 gap-4 border mt-3 shadow-md">
                        <p>AI-driven qualitative data analysis</p>
                        <p>Automatic transcription</p>
                        <p>AI-driven research repository</p>
                      </div>
                    )}
                  </div>
                  <nav>Resources</nav>
                  <nav>Get a demo</nav>
                  <nav>Pricing</nav>
                </div>
              </div>

              {/* Right Buttons */}
              <div className="flex-col gap-4 items-center">
                <button className="px-5 py-2 bg-[#D5D3DD] rounded-3xl hidden lg:block">
                  Login
                </button>
                <button className="px-4 py-2 bg-[#2ADD8C] rounded-3xl text-white hidden lg:block">
                  Start 14-day free trial
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
