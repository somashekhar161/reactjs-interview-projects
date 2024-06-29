import React from "react";
import useWindowResize from "./index";

const UseWindowResizeTest = () => {
  const { width, height } = useWindowResize();

  return (
    <div className="flex h-56 flex-col items-center gap-2  bg-gray-200 p-4">
      <h1 className="text-4xl font-semibold">UseWindowResizeTest</h1>
      <p className=" ">Width is :{width}</p>
      <p className=" ">Height is :{height}</p>
    </div>
  );
};

export default UseWindowResizeTest;
