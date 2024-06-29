import React, { useEffect, useState } from "react";

const RandomColor = () => {
  const [TypeOfColor, setTypeOfColor] = useState("hex");
  const [Color, setColor] = useState("#000000");
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleGenerateRandomHEXColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) hexColor += hex[randomColorUtility(hex.length)];
    setColor(hexColor);
  }
  function handleGenerateRandomRGBColor() {
    const R = randomColorUtility(256);
    const G = randomColorUtility(256);
    const B = randomColorUtility(256);
    setColor(`rgb(${R},${G},${B})`);
  }
  function handleGenerateRandomColor() {
    TypeOfColor === "rgb"
      ? handleGenerateRandomRGBColor()
      : handleGenerateRandomHEXColor();
  }

  useEffect(() => {
    handleGenerateRandomColor();
  }, [TypeOfColor]);
  return (
    <div className="custom-container h-svh p-6" style={{ background: Color }}>
      <div className=" flex justify-center gap-4">
        <button
          onClick={() => setTypeOfColor("hex")}
          className="rounded border-b-4 border-cyan-600 bg-cyan-800 px-4 py-2 font-bold text-white hover:bg-cyan-700"
        >
          Create Hex Color
        </button>
        <button
          onClick={() => setTypeOfColor("rgb")}
          className="rounded border-b-4 border-cyan-600 bg-cyan-800 px-4 py-2 font-bold text-white hover:bg-cyan-700"
        >
          Create RGB Color
        </button>
        <button
          onClick={handleGenerateRandomColor}
          className="rounded border-b-4 border-cyan-600 bg-cyan-800 px-4 py-2 font-bold text-white hover:bg-cyan-700"
        >
          Generate Random Color
        </button>
      </div>
      <div className="p-10 text-center font-mono text-8xl text-white ">
        {Color}
      </div>
    </div>
  );
};

export default RandomColor;
