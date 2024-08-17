import React from "react";
const Movie = ({ movie, setSelectedId }) => {
  return (
    <div
      onClick={() =>
        setSelectedId((e) => (movie.imdbID === e ? null : movie.imdbID))
      }
    >
      <li className="d-flex flex-row ps-3 py-2 ">
        <img className="img1" src={movie.Poster} alt="" />
        <div className="ps-4 mt-2">
          <p className="p-0 m-0  movieNameFont">{movie.Title}</p>
          <span className="p-0 m-0  movieYearFont">📅 {movie.Year}</span>
        </div>
      </li>
    </div>
  );
};
export default Movie;
