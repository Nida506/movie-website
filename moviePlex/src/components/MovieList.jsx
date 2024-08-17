import React from "react";
import Movie from "./Movie";
const MovieList = ({ movies, setSelectedId }) => {
  // Check if movies is undefined or null

  if (!movies) {
    return <ul className="list-group  movieList mt-2"></ul>;
  }
  return (
    <ul className="list-group  movieList mt-2 mb-2">
      {movies.map((movie, id) => (
        <Movie movie={movie} key={id} setSelectedId={setSelectedId} />
      ))}
    </ul>
  );
};
export default MovieList;
