import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
const StarRating = ({ NoofStarts }) => {
  const [Rating, setRating] = useState(0);
  const [HoverRating, setHoverRating] = useState(0);

  return (
    <div className=" flex h-svh flex-col items-center justify-center bg-gray-600">
      <div className=" p-1 font-mono text-4xl text-white">Rating:{Rating}</div>
      <div className="flex gap-2  p-6 ">
        {[...Array(NoofStarts)].map((_, index) => {
          return (
            <div key={index}>
              <FaStar
                className={`
                  ${index + 1 <= (HoverRating || Rating) ? "fill-yellow-400" : "fill-white"}
                  transition-transform hover:scale-125 
                 `}
                size={"50"}
                style={{ filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" }}
                onClick={() => setRating(index + 1)}
                onMouseOver={() => {
                  setHoverRating(index + 1);
                }}
                onMouseOut={() => {
                  setHoverRating(Rating);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
