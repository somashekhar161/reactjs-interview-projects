import React, { useState } from "react";
import Modal from "./modal";

const ModalTest = () => {
  const [isShowModal, setisShowModal] = useState(false);
  const handleToggleModal = () => {
    setisShowModal((prev) => !prev);
  };
  const closeModal = () => {
    setisShowModal(false);
  };
  return (
    <div className="flex h-svh flex-col items-center  bg-gray-500 p-4">
      <button
        onClick={handleToggleModal}
        className=" h-fit rounded-s border-b-4  border-b-gray-700 bg-gray-800 p-2 px-4 font-medium text-white shadow-md shadow-black  active:shadow-inner"
      >
        Open
      </button>
      {isShowModal && (
        <Modal
          onClose={closeModal}
          body={<div className=""> customized body</div>}
        />
      )}
    </div>
  );
};

export default ModalTest;
