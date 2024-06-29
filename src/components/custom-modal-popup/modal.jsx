import React from "react";
import "./modal.css";
const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div
      className="modal  fixed left-0 top-0 z-10 h-full w-full overflow-auto bg-black bg-opacity-55 p-60"
      id={id || "Modal"}
    >
      <div className="modal-content relative m-auto  w-fit min-w-96 rounded border  bg-slate-50 shadow-2xl   shadow-black">
        <div className="modal-header   bg-gray-200 p-4 px-8 pt-2  text-center font-semibold">
          <span
            className="close-modal-icon float-right  cursor-pointer text-3xl  font-bold   transition-transform duration-75 hover:scale-110 active:text-gray-700 "
            onClick={onClose}
          >
            &times;
          </span>
          <h2 className="ml-6 pt-2">{header ? header : "Header"}</h2>
        </div>
        <div className="modal-body max-h-svh min-h-52 p-4">
          {body ? (
            body
          ) : (
            <div>
              <p>This is our Modal Body</p>
            </div>
          )}
        </div>
        <div className="modal-footer bg-gray-200 p-4 px-8 text-center font-semibold ">
          {footer ? footer : <h2>footer</h2>}
        </div>
      </div>
    </div>
  );
};

export default Modal;
