"use client";

import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className="w-full h-[80px] border-b flex justify-between items-center p-16">
      <div className="flex gap-8 ">
        {/* {Parent} */}
        <div className="flex gap-4">
          <div className="relative">
            Product
            {/* <div className=" absolute bg-white w-[200px] h-[100px] rounded-md"></div> */}
          </div>
          <nav>Reasources</nav>
          <nav>Get a demo</nav>
          <nav>Pricing</nav>
        </div>
        <div>Breyta</div>
      </div>
      <div className="flex gap-5">
        {/* {Parent} */}
        <button className="px-6 py-2 rounded-3xl border">Login</button>
        <button className="px-6 py-3 rounded-3xl border">
          Start 14-day free trial
        </button>
      </div>
    </div>
  );
};

export default Header;
