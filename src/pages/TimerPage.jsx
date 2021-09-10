import React from "react";
import DataModal from "../components/DataModal";
import Timer from "../components/Timer";

const TimerPage = () => {
  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center h-screen">
        <DataModal />
        <h5 className="text-gray-700 font-semibold">
          <span className="bg-clip-text text-transparent bg-gradient-to-l to-blue-600 from-gray-700">
            Click <span className="to-pink-100 from-purple-200">[Space]</span>{" "}
            to start/end timer.
          </span>
        </h5>
        <Timer />
      </div>
    </div>
  );
};

export default TimerPage;
