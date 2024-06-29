import React, { useEffect, useState } from "react";
import useElementOnScreen from "./hooks/useElementOnScreen";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const [ErrorMessage, setErrorMessage] = useState(null);
  const [containerRef, isVisble] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    treshold: 1.0,
  });
  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`,
      );
      const data = await res.json();
      const newProducts = data.products;

      setProducts((prev) => [...prev, ...newProducts]);
      setLoading(false);
    } catch (error) {
      setErrorMessage("Error Loading Data");
      setLoading(false);
    }
  }
  const disableButton = products.length === 100;

  useEffect(() => {
    if (!disableButton) fetchProducts();
  }, [count]);

  useEffect(() => {
    if (!disableButton && !loading && isVisble) setCount((prev) => prev + 1);
  }, [isVisble]);

  if (ErrorMessage) return <div>{ErrorMessage}</div>;
  return (
    <div className="load-more-container  flex h-svh max-h-svh flex-col items-center gap-4 overflow-y-auto bg-[#0C0808] p-4">
      <div className="product-container grid w-fit  grid-cols-4 gap-5">
        {products.map((product, index) => (
          <div
            key={index + product.id}
            className=" flex w-96 flex-col justify-between rounded  bg-[#332928] text-white"
          >
            <img
              src={product.thumbnail}
              alt="ProductImage"
              className="h-56 object-contain"
            ></img>
            <div className=" flex justify-between  p-4">
              <div> {product.title}</div>
              <div>$ {product.price}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="button-container flex flex-col items-center justify-center gap-4">
        {loading ? (
          <div className="text-center font-mono text-2xl text-white">
            Loading...
          </div>
        ) : (
          <button
            disabled={disableButton}
            className={` rounded   p-4 shadow-2xl transition-all duration-500
          ${disableButton ? "bg-gray-400" : "bg-[#caaea8]  hover:-translate-y-1 hover:shadow-[#caaea8]"}
          `}
            onClick={() => {
              setCount((prev) => prev + 1);
            }}
            ref={containerRef}
          >
            Load More Products
          </button>
        )}
        {disableButton ? (
          <p className="text-center text-2xl font-semibold text-[#F3ECEB]">
            You have reached to 100 products
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default LoadMoreData;
