import React, { useEffect } from "react";
import StarRating from "./StarRating";
import useKey from "./useKey";
const SelectedMovieDetails = ({
  selectedId,
  setSelectedId,
  movieDetail,
  query,
  watchedMovie,
  watchedMovies,
  movies,
}) => {
  //if no movie  is selected
  if (selectedId === null || movieDetail === null) return "";
  const moveBackHandler = () => {
    setSelectedId(null);
  };

  useKey("Escape", moveBackHandler);

  //tilte change

  useEffect(() => {
    if (!movieDetail.Title) return;
    document.title = `Movie | ${movieDetail.Title}`;
    return function () {
      document.title = "usePopcorn";
    };
  }, [movieDetail.Title]);

  //some local variables
  const isWatched = watchedMovies
    .map((element) => element.imdbID)
    .includes(selectedId);

  const watchedUserRating = watchedMovies.find(
    (element) => element.imdbID === selectedId
  )?.userRating;

  //component jsx
  return (
    <div className=" movieList mt-2 pb-5 ">
      <header>
        <div>
          <button
            onClick={moveBackHandler}
            className="rounded-circle py-0 fw-bold px-2 ms-2 mt-2 fs-3 mb-3 "
          >
            &larr;
          </button>
        </div>
        <div className="d-flex flex-row">
          <img className="img2 ms-5 me-0" src={movieDetail.Poster} alt="" />
          <div className=" mt-3 ms-3  fw-bold d-flex flex-column align-items-center justify-content-center">
            <h5>{movieDetail.Title}</h5>
            <p className="p-0 m-0 text-white">
              {movieDetail.Released} &bull; {movieDetail.Runtime}
            </p>
            <p className="p-0 m-0 text-white">{movieDetail.Genre}</p>
            <p className="p-0 m-0 text-white">
              ⭐ {movieDetail.imdbRating} IMDb rating
            </p>
          </div>
        </div>
      </header>

      <section>
        {isWatched ? (
          <div className="watchedMoviedRateBox">
            <p className="mt-3">
              You already rated movie ⭐ {watchedUserRating}
            </p>
          </div>
        ) : (
          <StarRating
            watchedMovie={watchedMovie}
            movieDetail={movieDetail}
            setSelectedId={setSelectedId}
          />
        )}

        <div className="mt-4 ms-5 me-5">
          <em className="fw-bold text-white me-5">{movieDetail.Plot}</em>
          <p className="mt-3 text-white fw-bold me-2">
            Starring {movieDetail.Actors}
          </p>
          <p className="fw-bold">Directed by {movieDetail.Director}</p>
        </div>
      </section>
    </div>
  );
};

export default SelectedMovieDetails;
