import React from "react";
import { useState } from "react";
// import framer
import { motion } from "framer-motion";
import axios from "axios";
//import context
import { useUserContext } from "../pages/UserContext";

const Navbar = () => {
  const [showInsert, setShowInsert] = useState(false);
  const [shoutTitle, setShoutTitle] = useState("");
  const [shoutText, setShoutText] = useState("");
  const { user } = useUserContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting", user);
    if (!shoutText) {
      alert("Please fill in all fields");
      return;
    }

    setShowInsert(!showInsert);
    //alert
    //submit
    axios.post("http://localhost:5050/api/v1/shoutoutsapp/shoutouts", {
      soid: Math.floor(Math.random() * 1000),
      message: shoutText,
      userid: user.userId || 1,
      eventid: 1,
    }); //soid, message, userid, eventid

    alert("Your shout has been submitted!");

    console.log("submitted");
    setShoutText("");
    setShoutTitle("");
  };
  const plusIcon = (
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
        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    duration: 0.31,
  };

  return (
    <motion.div className="flex flex-col">
      <div
        className=" sticky top-2 backdrop-filter backdrop-blur-lg px-4 py-2 mt-10 rounded-[1rem] group hover:bg-pink-200 z-50 bg-pink-100 cursor-pointer"
        onClick={() => setShowInsert(!showInsert)}
      >
        <div className="flex justify-between text-black items-center px-16">
          <div className="flex gap-2 py-1 px-2 rounded-full text-md text-pink-600 group-hover:text-pink-800  group-hover:scale-105 transition-all duration-100">
            <div className="group-hover:scale-110 transition-all duration-100">
              {plusIcon}
            </div>
            shout out
          </div>
          <div className="flex space-x-4"></div>
        </div>
      </div>
      {showInsert && (
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: -50 }} // Start 50 pixels below the final position and with zero opacity
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
          }} // Animate to full opacity and final position at y=0
          viewport={{ once: true }}
        >
          <form
            className="flex flex-col text-sm"
            onSubmit={(event) => handleSubmit(event)}
          >
            <textarea
              type="text"
              onChange={(e) => setShoutText(e.target.value)}
              name="text"
              id="text"
              placeholder="text"
              className="w-full px-4 py-2 text-black text-xs rounded-lg mt-4 focus:outline-0"
            />
            <div className="flex flex-row justify-start gap-4">
              <button
                className="px-4 py-2 rounded-lg mt-4 bg-pink-50 bg-opacity-30 text-pink-800 hover:bg-opacity-50"
                onClick={() => setShowInsert(!showInsert)}
              >
                cancel
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="px-4 py-2 rounded-lg mt-4 bg-pink-600 text-white hover:bg-pink-800"
              >
                shout
              </button>
            </div>
          </form>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
