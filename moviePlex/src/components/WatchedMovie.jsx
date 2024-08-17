import React from "react";

const WatchedMovie = ({ watchedmovie, onDelWatchedMovie }) => {
  return (
    <li className="d-flex flex-row ps-3 py-2">
      <img className="img1" src={watchedmovie.Poster} alt="" />
      <div className="ps-4 pe-0 mt-2">
        <p className="p-0 m-0 fw-bold movieNameFont">{watchedmovie.Title}</p>
        <span className="p-0 m-0 fw-bold movieYearFont">
          {`  ⭐    ${watchedmovie.imdbRating}   🌟    ${watchedmovie.userRating}   ⏳    ${watchedmovie.Runtime} min`}
        </span>
      </div>
      <div>
        <button
          className="delBtn"
          onClick={() => onDelWatchedMovie(watchedmovie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
};

export default WatchedMovie;
