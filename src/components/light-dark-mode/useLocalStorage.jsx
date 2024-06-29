import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [Value, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue =
        JSON.parse(localStorage.getItem(key)) || String(defaultValue);
    } catch (error) {
      console.log(error);
      currentValue = defaultValue;
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(Value));
  }, [key, Value]);
  return [Value, setValue];
};

export default useLocalStorage;
