import React, { useEffect } from "react";

const GenerateProfileColor = () => {
  const colors = [
    "teal",
    "blue",
    "blue",
    "purple",
    "pink",
    "red",
    "orange",
    "yellow",
    "teal",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Profile = ({ name }) => {
  return (
    <div className="flex items-center flex-row justify-center gap-4 items-center text-stone-400 font-semibold  md:-translate-x-4">
      <div className="bg-teal-300 bg-blue-300 bg-purple-300 bg-pink-300 bg-red-300 bg-orange-300 bg-yellow-300 bg-green-300 hidden">
        Ensure classes are not purged
      </div>

      <div
        className={`h-12 w-12 rounded-full bg-${GenerateProfileColor()}-300`}
      ></div>
      <div>{name}</div>
    </div>
  );
};

export default Profile;
