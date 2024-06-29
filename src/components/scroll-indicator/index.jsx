import React, { useEffect, useState } from "react";

const ScrollIndicator = ({ url }) => {
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [ScrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    setLoading(true);
    try {
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0)
        setData(data.products);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchData(url);

    return () => {};
  }, [url]);
  function handleScrollPercentage(params) {
    const bodyScrollTop = document.body.scrollTop;
    const ElementScrollTop = document.documentElement.scrollTop;
    const ElementScrollHeight = document.documentElement.scrollHeight;
    const ClientScrollHeight = document.documentElement.clientHeight;

    const height = ElementScrollHeight - ClientScrollHeight;

    const scrollPosition = bodyScrollTop || ElementScrollTop;

    // const scrollPercentage = Math.floor((scrollPosition / height) * 100);
    const scrollPercentage = (scrollPosition / height) * 100;

    setScrollPercentage(scrollPercentage || 0);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  if (Loading) {
    return (
      <div className="flex min-h-svh items-center justify-center bg-gray-700 p-4 text-center text-white">
        Loading ...
      </div>
    );
  }
  return (
    <div className=" relative min-h-svh bg-gray-700 p-0 pb-2">
      <div className=" sticky left-0 top-0 w-full space-y-4 bg-gray-800 text-center text-4xl text-white">
        <div className="p-4   ">Scroll Indicator</div>
        <div className="scroll-progress-tracking-container  bg-gray-900 ">
          <div
            className={`current-progress-bar h-1  duration-300 ease-in-out ${
              ScrollPercentage < 10
                ? "bg-green-50"
                : ScrollPercentage < 20
                  ? "bg-green-100"
                  : ScrollPercentage < 30
                    ? "bg-green-200"
                    : ScrollPercentage < 40
                      ? "bg-green-300"
                      : ScrollPercentage < 50
                        ? "bg-green-400"
                        : ScrollPercentage < 60
                          ? "bg-green-500"
                          : ScrollPercentage < 70
                            ? "bg-green-600"
                            : ScrollPercentage < 80
                              ? "bg-green-700"
                              : ScrollPercentage < 90
                                ? "bg-green-800"
                                : "bg-green-900"
            }  transition-all`}
            style={{ width: `${ScrollPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className=" mt-10 flex flex-col items-center  gap-4  text-white">
        {Data &&
          Data.length > 0 &&
          Data.map((item) => (
            <div
              key={item.id}
              className="w-72 rounded border border-gray-500 bg-gray-600 p-4 shadow shadow-black"
            >
              {item.title}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;
