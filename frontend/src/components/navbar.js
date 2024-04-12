import React from "react";

const Navbar = () => {
  //make bg a white blurry kind
  return (
    <div className=" sticky top-2 backdrop-filter backdrop-blur-lg px-4 py-2 mt-10 rounded-full hover:bg-pink-200 z-50 bg-pink-100">
      <div className="flex justify-between text-black items-center px-16">
        <div className=" py-1 px-2 rounded-full text-md text-pink-600 font-semibold">
          shout out
        </div>
        <div className="flex space-x-4"></div>
      </div>
    </div>
  );
};

export default Navbar;
