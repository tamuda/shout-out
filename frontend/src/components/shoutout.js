import React from "react";
import Profile from "./profile";

const deleteIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

const Shoutout = ({ name, title, text, deleteShout }) => {
  return (
    <div className="flex text-sm md:text-[1rem] flex-col gap-4 justify-start text-stone-800 bg-stone-100  py-8 md:px-16 px-8 rounded-3xl md:w-2/3 w-full">
      <div className="flex flex-row justify-between items-center">
        <Profile name={name} />
        <div
          onClick={() => deleteShout(name)}
          className="cursor-pointer flex gap-4 text-gray-400 hover:text-black items-center align-middle text-center"
        >
          {deleteIcon}
        </div>
      </div>
      <hr className="w-full border-1 border-gray-200 pb-2" />
      <div className="font-semibold">
        {title || "This is the title of the shoutout"}
      </div>
      <div>{text}</div>
    </div>
  );
};

export default Shoutout;
