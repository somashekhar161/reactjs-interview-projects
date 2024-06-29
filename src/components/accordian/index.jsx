import React, { useState } from "react";
import data from "./data";
//single selection

//multi selection

const Accordian = () => {
  const [selected, setselected] = useState(null);
  const [isMultiSelect, setisMultiSelect] = useState(false);
  const [MultiSelected, setMultiSelected] = useState([]);

  const toggleMultiSelect = () => {
    setisMultiSelect((prev) => !prev);
  };

  function handleSingleSelection(selectedId) {
    setselected(selectedId === selected ? null : selectedId);
  }

  function handleMultiSelection(selectedId) {
    let copyMultiple = [...MultiSelected];
    const findIndexOfCurrentId = copyMultiple.indexOf(selectedId);

    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(selectedId);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiSelected(copyMultiple);
  }

  function handleSelection(selectedId) {
    isMultiSelect
      ? handleMultiSelection(selectedId)
      : handleSingleSelection(selectedId);
  }

  return (
    <div className="wrapper flex h-svh  flex-col items-center justify-center  space-y-4 overflow-x-hidden  bg-gray-900">
      <div>
        <label
          htmlFor="default-toggle"
          className="relative inline-flex cursor-pointer items-center"
        >
          <input
            type="checkbox"
            checked={isMultiSelect}
            onChange={toggleMultiSelect}
            id="default-toggle"
            className="peer sr-only"
          />
          <div
            className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] 
          after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border
           after:border-white after:bg-white after:transition-all after:content-['']
            peer-checked:bg-cyan-600 peer-checked:after:translate-x-full peer-checked:after:border-white 
            peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-cyan-800"
          ></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Multi Selection
          </span>
        </label>
      </div>
      <div className="accordian h-2/4  w-2/5 space-y-2">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="item  space-y-4 rounded-sm border-b-8 border-cyan-900 bg-slate-800 text-white shadow"
              onClick={() => handleSelection(dataItem.id)}
            >
              <div className="title flex cursor-pointer justify-between  p-4">
                <h3 className=" text-2xl font-semibold">{dataItem.question}</h3>
                <span>+</span>
              </div>
              {isMultiSelect
                ? MultiSelected.indexOf(dataItem.id) !== -1 && (
                    <div className="content h-auto bg-slate-700 bg-opacity-80  p-4 text-center text-lg font-medium ">
                      {dataItem.answer}
                    </div>
                  )
                : selected === dataItem.id && (
                    <div className="content h-auto bg-slate-700 bg-opacity-60  p-4 text-center text-lg font-medium ">
                      {dataItem.answer}
                    </div>
                  )}
            </div>
          ))
        ) : (
          <div> No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
