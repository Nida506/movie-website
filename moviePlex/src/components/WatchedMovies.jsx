import React from "react";
import WatchedMovie from "./WatchedMovie";
const WatchedMovies = ({ watchedMovies, onDelWatchedMovie }) => {
  if (!watchedMovies) return;
  return (
    <>
      <ul className="list-group  movieList ">
        {watchedMovies.map((watchedmovie, id) => (
          <WatchedMovie
            watchedmovie={watchedmovie}
            key={id}
            onDelWatchedMovie={onDelWatchedMovie}
          />
        ))}
      </ul>
    </>
  );
};
export default WatchedMovies;
