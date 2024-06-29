import React from "react";
import Tabs from "./tabs";

const RandomComponent = () => {
  return <div>content from Random Component</div>;
};
const CustomTabs = () => {
  const tabsContent = [
    { label: "TAB 1", content: <div>this is tab 1</div> },
    { label: "TAB 2", content: <div>this is tab 2</div> },
    { label: "TAB 3", content: <RandomComponent /> },
  ];
  const handleOnChange = (TabIndex) => {
    console.log(TabIndex);
  };
  return (
    <div className="h-svh max-h-svh  bg-gray-800">
      <div className="p-4 text-center text-3xl text-white"> Custom Tabs</div>
      <Tabs tabsContent={tabsContent} onChange={handleOnChange} />
    </div>
  );
};

export default CustomTabs;
