import React from "react";
import useFetch from ".";

const UseFetchHookTest = () => {
  const { data, error, loading } = useFetch("https://dummyjson.com/products");

  return (
    <div className="flex h-svh max-h-svh flex-col items-center overflow-y-auto bg-gray-300  ">
      <h1 className=" p-4 text-5xl font-semibold">Use Fetch Hook</h1>
      {loading ? (
        <h3 className=" p-4 text-3xl font-semibold">Pending ! please wait</h3>
      ) : null}
      {error ? <h3 className=" p-4 text-3xl font-semibold">{error}</h3> : null}
      <div className=" h-5/6  w-full overflow-y-auto">
        <div className=" flex  flex-col items-center space-y-4">
          {data && data.products && data.products.length
            ? data.products.map((productItem) => (
                <div
                  key={productItem.id}
                  className="w-96 cursor-pointer rounded border bg-gray-200 p-4 text-center font-medium shadow transition-transform hover:scale-105"
                >
                  {productItem.title}
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default UseFetchHookTest;
