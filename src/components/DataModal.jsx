import React, { useState } from "react";
import Modal from "react-modal";
import { useDataFunctions } from "../hooks/data";
Modal.setAppElement("#root");

const DataModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getAverage } = useDataFunctions();
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-xl shadow-xl px-4 py-2 bg-black text-white hover:ring-2 hover:ring-blue-300"
      >
        See Data
      </button>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <div className="flex flex-col justify-center items-center ">
          <div className="flex flex-col justify-end items-end ">
            <button
              onClick={() => setIsOpen(false)}
              className="shadow-xl px-4 py-2 bg-black text-white"
            >
              Close
            </button>
          </div>
          <h1>Data</h1>
          <div className="text-sm">
            <h1>{getAverage()}</h1>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DataModal;
