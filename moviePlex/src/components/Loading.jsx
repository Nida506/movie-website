import React, { useState, useEffect } from "react";

const Loading = () => {
  return (
    <div className=" movieList mt-2 p-5 d-flex flex-row justify-content-center align-items-center">
      <div className="spinner-grow text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
