import React, { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [QRCodeValue, setQRCodeValue] = useState("123");
  const [Input, setInput] = useState("");

  function handleGenerateQRCode() {
    setQRCodeValue(Input);
    setInput("");
  }
  return (
    <div className="flex h-svh flex-col items-center justify-center gap-4 bg-gray-950 text-white">
      <div
        className=" p-4 font-semibold  tracking-widest"
        style={{
          textShadow: "8px 8px 10px #000",
        }}
      >
        QR Code Generator
      </div>
      <div className=" min-w-96  rounded bg-gray-800 p-4 text-black shadow-lg shadow-black">
        <div className=" flex flex-col  items-center gap-2 p-4">
          <input
            type="text"
            name="qr-code"
            value={Input}
            className="rounded border-2  border-slate-700 bg-slate-400 p-2 px-4 shadow-lg shadow-black"
            onChange={(e) => setInput(e.target.value.trim())}
          ></input>
          <button
            onClick={handleGenerateQRCode}
            disabled={Input === ""}
            className="w-fit rounded bg-blue-400 p-1 px-4 shadow-lg shadow-black hover:bg-blue-500 hover:shadow-inner disabled:bg-gray-600  disabled:shadow-none"
          >
            Generate
          </button>
        </div>
        <div className=" rounded bg-slate-500 p-16">
          <QRCode
            id="qr-code-value"
            value={QRCodeValue}
            size={400}
            bgColor="#64748b"
          />
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
