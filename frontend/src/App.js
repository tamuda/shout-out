import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";

const App = () => {
  return (
    //add gradient bg

    <div className="flex flex-col items-center text-white justify-start bg-gradient-to-r from-pink-400 via-pink-300 to-pink-400 ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
