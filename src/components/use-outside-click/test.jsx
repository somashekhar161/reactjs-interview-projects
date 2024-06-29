import React, { useRef, useState } from "react";
import useOutsideClick from ".";

const UseOnClickOutsideTest = () => {
  const [ShowContent, setShowContent] = useState(false);
  const ContentRef = useRef(null);
  useOutsideClick(ContentRef, () => {
    setShowContent(false);
  });
  return (
    <div className="flex max-h-svh min-h-80 flex-col items-center overflow-y-auto bg-gray-400 p-10">
      <h1 className="p-4 text-5xl font-semibold">Out Side Click </h1>

      {ShowContent ? (
        <div
          ref={ContentRef}
          className=" flex flex-col items-center gap-2 rounded-lg bg-gray-200 p-4 shadow "
        >
          <h1 className=" text-3xl font-medium ">This is a random content</h1>
          <p className=" max-w-72 text-center text-lg ">
            Please click outside of this to close this. It won{"'"}t close is
            you click inside of this content
          </p>
        </div>
      ) : (
        <button
          className="rounded bg-gray-100 p-4 shadow-md shadow-black active:shadow-inner"
          onClick={() => setShowContent(true)}
        >
          Show Content
        </button>
      )}
    </div>
  );
};

export default UseOnClickOutsideTest;
