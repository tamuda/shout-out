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
      <div className="bg-teal-600 bg-blue-600 bg-purple-600 bg-pink-600 bg-red-600 bg-orange-600 bg-yellow-600 bg-green-600 hidden">
        Ensure classes are not purged
      </div>

      <div
        className={`h-12 w-12 rounded-full bg-${GenerateProfileColor()}-600`}
      ></div>
      <div>{name}</div>
    </div>
  );
};

export default Profile;
