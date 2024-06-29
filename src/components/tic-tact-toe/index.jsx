import React, { useEffect, useState } from "react";

const TikTactToe = () => {
  const [Squares, setSquares] = useState(() => Array(9).fill(""));
  const [IsXTurn, setIsXTurn] = useState(true);
  const [Status, setStatus] = useState("");

  function getWinner() {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 9],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPattern.length; i++) {
      const [x, y, z] = winningPattern[i];
      if (
        Squares[x] != "" &&
        Squares[x] === Squares[y] &&
        Squares[x] === Squares[z]
      )
        return Squares[x];
    }
    return;
  }

  function resetGame() {
    setSquares(() => Array(9).fill(""));
    setStatus("");
    setIsXTurn(true);
  }
  function handleSquareClick(squareIndex) {
    if (Status || Squares[squareIndex]) return;
    let tempSquares = [...Squares];
    tempSquares[squareIndex] = IsXTurn ? "X" : "O";
    setSquares(tempSquares);
    setIsXTurn((prev) => !prev);
  }
  useEffect(() => {
    const winner = getWinner();
    if (winner) {
      setStatus(`Your Winner is ${winner}`);
    }
    const AllFilled = Squares.every((squar) => squar != "");
    if (AllFilled) {
      setStatus("GAME OVER ");
    }
  }, [Squares]);

  const SquareBox = ({ value, handleOnClick }) => {
    return (
      <button
        className=" size-32 rounded-sm  bg-gray-800 text-center font-mono text-5xl font-semibold text-white active:scale-95 dark:bg-white  dark:text-black"
        onClick={handleOnClick}
      >
        {value}
      </button>
    );
  };

  return (
    <div className="h-svh bg-gray-400 dark:bg-gray-700">
      <div className="p-20 text-center text-3xl font-semibold text-black  dark:text-white ">
        Tik - Tact - Toe
      </div>
      <div className="  flex flex-col items-center justify-center gap-2 p-4">
        <div className="row flex  gap-2">
          <SquareBox
            handleOnClick={() => handleSquareClick(0)}
            value={Squares[0]}
          />
          <SquareBox
            handleOnClick={() => handleSquareClick(1)}
            value={Squares[1]}
          />
          <SquareBox
            handleOnClick={() => handleSquareClick(2)}
            value={Squares[2]}
          />
        </div>
        <div className="row flex  gap-2">
          <SquareBox
            handleOnClick={() => handleSquareClick(3)}
            value={Squares[3]}
          />
          <SquareBox
            handleOnClick={() => handleSquareClick(4)}
            value={Squares[4]}
          />
          <SquareBox
            handleOnClick={() => handleSquareClick(5)}
            value={Squares[5]}
          />
        </div>
        <div className="row flex  gap-2">
          <SquareBox
            handleOnClick={() => handleSquareClick(6)}
            value={Squares[6]}
          />
          <SquareBox
            handleOnClick={() => handleSquareClick(7)}
            value={Squares[7]}
          />
          <SquareBox
            handleOnClick={() => handleSquareClick(8)}
            value={Squares[8]}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 p-10">
        <div className="text-3xl font-semibold text-black dark:text-white">
          {Status}
        </div>
        <button
          onClick={resetGame}
          className="rounded bg-white p-2 px-4 font-semibold shadow shadow-black active:scale-95"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TikTactToe;
