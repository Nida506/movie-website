import React from "react";
const ErrorMsg = () => {
  return (
    <div className=" movieList movieBox  text-red mt-2 py-5 px-2 d-flex text-center flex-row justify-content-center align-items-center">
      <h4 className="bold">Movies Related To Your Search Not Found </h4>
    </div>
  );
};

export default ErrorMsg;
