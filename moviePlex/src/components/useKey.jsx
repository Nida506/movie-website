import React, { useState, useEffect } from "react";
const useKey = (key, action) => {
  //focusing the element
  useEffect(() => {
    function callBackFun(e) {
      //when press enter then document.activeElement !== inputElement.current
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    }

    document.addEventListener("keydown", callBackFun);

    return function () {
      document.addEventListener("keydown", callBackFun);
    };
  }, [key, action]);
};

export default useKey;
