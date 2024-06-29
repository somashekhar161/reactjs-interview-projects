import { useLayoutEffect, useState } from "react";

const useWindowResize = () => {
  const [windowSize, setwindowSize] = useState({ width: 0, height: 0 });

  function handleResize() {
    setwindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowResize;

// const [windowSize, setwindowSize] = useState({ width: 0, height: 0 });

// function handleResize() {
//   setwindowSize({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });
// }

// useLayoutEffect(() => {
//   handleResize();
//   document.addEventListener("resize", handleResize);

//   return () => {
//     document.removeEventListener("resize", handleResize);
//   };
// }, []);

// return windowSize;
