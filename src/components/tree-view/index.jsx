import React, { useState } from "react";
import menus from "./data";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import {} from "react-icons/io";
const Card = ({ data, isParent = false, setTo }) => {
  const [isExpanded, setisExpanded] = useState(false);
  return (
    <div className={`    w-full  bg-gray-800 pl-2`}>
      <div className="flex items-center gap-2 rounded p-1 py-2 hover:bg-gray-950 ">
        {data.children && (
          <button
            onClick={() => setisExpanded((prev) => !prev)}
            className={` drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]  transition-all  duration-300  ${isExpanded ? "rotate-90" : "rotate-0"}  `}
          >
            <IoIosArrowDroprightCircle className="h-6 w-6 " />
          </button>
        )}
        {!data.children && <div className="h-6 w-6 "></div>}

        <div
          className="w-full  cursor-pointer   text-xl"
          onClick={() => setTo(data.to)}
        >
          {data.label}
        </div>
      </div>

      <div
        className={` overflow-hidden pl-2 transition-all duration-300 ease-in-out `}
        style={{
          //   transform: `translateY(${isExpanded ? "0px" : "-40px"})`,

          maxHeight: `${isExpanded ? "1000px " : "0px"}`,
        }}
      >
        {data.children &&
          data.children.map((child, index) => (
            <Card key={index + child.label} data={child} setTo={setTo} />
          ))}
      </div>
    </div>
  );
};

const TreeView = () => {
  const [To, setTo] = useState("");
  return (
    <div className="custom-container h-svh bg-gray-900">
      <div className="wrapper flex  h-full text-white">
        <div className="h-[96rem] max-h-svh w-96  overflow-y-auto bg-gray-700 p-2 ">
          {menus.map((menu, index) => (
            <Card
              key={index + menu.label}
              data={menu}
              isParent={true}
              setTo={setTo}
            />
          ))}
        </div>
        <div className="flex h-full  w-full flex-col items-center">
          <div className=" font-mono text-4xl font-bold"> TREE VIEW</div>
          <div className=" flex h-full w-full items-center justify-center">
            <div className="   animate-bounce font-mono text-4xl font-bold">
              To : {To}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreeView;
