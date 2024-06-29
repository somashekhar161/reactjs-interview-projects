import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [Data, setData] = useState(null);
  const [IsLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data: Data, loading: IsLoading, error: Error };
};

export default useFetch;
