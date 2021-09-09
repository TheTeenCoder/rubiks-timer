import React from "react";
import { Link, useHistory } from "react-router-dom";

const Button = () => {
  return (
    <button className="rounded-xl shadow-xl px-4 py-2 bg-black text-white">
      Go to experimental timer
    </button>
  );
};

const Home = () => {
  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center h-screen space-y-2">
        <h1 className="text-gray-700 font-semibold">
          <span className="bg-clip-text text-transparent bg-gradient-to-l to-blue-600 from-gray-700">
            Cubing Timer.
          </span>
        </h1>
        <span className="text-gray-600">
          Minimalist, customizable (soon), and unopinionated toward any cuber
        </span>
        <Link to="/timer">
          <Button />
        </Link>
      </div>
    </div>
  );
};

export default Home;
