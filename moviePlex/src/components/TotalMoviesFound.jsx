import React from "react";
const TotalMoviesFound = ({ movies }) => {
  return <p className="pt-2 movieFound">Found {movies.length} results</p>;
};
export default TotalMoviesFound;
