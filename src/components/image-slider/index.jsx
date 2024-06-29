import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  function nextSlide() {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }
  function prevSlide() {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>;
  }

  return (
    <div className="custom-container    flex  h-svh flex-col items-center justify-center bg-slate-500">
      <div className="p-4 font-mono text-4xl font-semibold text-white">
        Carousel
      </div>
      <div className=" flex  h-1/2 w-4/5 items-center  justify-center  overflow-hidden ">
        <div className="carousel   relative h-full   w-full  max-w-4xl ">
          <div className="   flex  h-full  ">
            {images &&
              images.length > 0 &&
              images.map((image, index) => (
                <div
                  className="   block h-full w-full  shrink-0 grow-0 bg-gray-900 object-cover transition-all duration-700"
                  key={index}
                  style={{ translate: `${-100 * currentSlide}%` }}
                >
                  <img
                    src={image.download_url}
                    alt={image.download_url}
                    className={`  block h-full w-full shrink-0 grow-0 object-cover transition-all duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-30"}`}
                  />
                </div>
              ))}
          </div>
          <div className=" absolute bottom-0 left-0 top-0  flex items-center p-2">
            <button
              onClick={prevSlide}
              className="rounded-full bg-gray-900 bg-opacity-80 p-1  shadow-2xl   shadow-black transition-transform hover:scale-90"
            >
              <BsArrowLeftCircleFill className=" h-14 w-14 fill-white" />
            </button>
          </div>
          <div className=" absolute bottom-0 right-0 top-0 flex  items-center p-2">
            <button
              onClick={nextSlide}
              className="rounded-full bg-gray-900 bg-opacity-80 p-1  shadow-2xl  shadow-black  transition-transform hover:scale-90"
            >
              <BsArrowRightCircleFill className=" h-14 w-14 fill-white" />
            </button>
          </div>
          <div className="  absolute   bottom-3 w-full ">
            <div className="flex  justify-center gap-2 ">
              {images &&
                images.length > 0 &&
                images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={` rounded-full  p-2 hover:-translate-y-1 hover:scale-125 ${index === currentSlide ? "scale-150 bg-white" : "bg-gray-300"}`}
                  ></button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
