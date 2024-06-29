import React, { useState } from "react";

const Tabs = ({ tabsContent, onChange }) => {
  const [CurrentTabIndex, setCurrentTabIndex] = useState(0);

  function handleTabChange(index) {
    setCurrentTabIndex(index);
    onChange(index);
  }
  return (
    <div className=" flex h-4/5 flex-col items-center justify-center gap-20   p-4">
      <div className="space-x-4">
        {tabsContent.map((tab, index) => (
          <button
            className={` rounded  p-2 px-4 font-medium shadow-2xl shadow-black active:shadow-inner ${CurrentTabIndex === index ? "bg-blue-400" : "bg-gray-300"}`}
            key={tab.label}
            onClick={() => {
              handleTabChange(index);
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className=" rounded  bg-gray-600 p-4 text-white shadow shadow-black">
        {tabsContent[CurrentTabIndex] &&
          tabsContent[CurrentTabIndex].content &&
          tabsContent[CurrentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
