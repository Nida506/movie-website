import React, { useState, useEffect } from "react";
const useLocalStorageState = (initialState, key) => {
  const [value, setValue] = useState(() => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : initialState;
  });
  //put watched movies in the local storage of the browser
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorageState;
