import React from "react";
const Summary = ({ watchedMovies }) => {
  let totalTime = 0;
  let totalImdbRatings = 0;
  let totalUserRatings = 0;
  //map function return or may not return the array here map function update the some local variables
  watchedMovies.map((element) => {
    totalTime = totalTime + element.Runtime;
    totalImdbRatings = totalImdbRatings + element.imdbRating;
    totalUserRatings = totalUserRatings + element.userRating;
  });

  //JSx
  return (
    <div className=" summary">
      <h5 className="fw-bold colorBrown text-center pb-2">
        MOVIES YOU WATCHED
      </h5>
      <div className="ps-0 mt-2 d-flex d-flex flex-row justify-content-center align-items-center">
        <p className="padding m-0 fw-bold font">
          {watchedMovies.length} {watchedMovies.length < 2 ? "movie" : "movies"}
        </p>
        <span className="padding m-0 fw-bold font">
          ⭐{" "}
          {totalImdbRatings
            ? (totalImdbRatings / watchedMovies.length).toFixed(2)
            : 0}
        </span>
        <span className="padding m-0 fw-bold font">
          🌟{" "}
          {totalUserRatings
            ? (totalUserRatings / watchedMovies.length).toFixed(2)
            : 0}{" "}
        </span>
        <span className="padding m-0 fw-bold font">
          ⏳ {totalTime ? totalTime.toFixed(1) : 0} min
        </span>
      </div>
    </div>
  );
};
export default Summary;
