import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Search from "./Search";
import Loading from "./Loading";
import ErrorMsg from "./ErrorMsg";
import TotalMoviesFound from "./TotalMoviesFound";
import Main from "./Main";
import Box from "./Box";
import MovieList from "./MovieList";
import Summary from "./Summary";
import WatchedMovies from "./WatchedMovies";
import SelectedMovieDetails from "./SelectedMovieDetails";
import useMovies from "./useMovies";
import useLocalStorageState from "./useLocalStorageState";
import InitiallyNoMovie from "./InitiallyNoMovie";
//key for the api
const key = "686025e";
const MainLayout = () => {
  //state variables
  const [query, setQuery] = useState("");
  const [movieDetail, setMovieDetail] = useState(null);
  const [movieDetailIsLoading, setMovieDetailIsLoading] = useState(false);
  const [movieDetailError, setMovieDetailError] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query, key, setSelectedId);
  //get the data of local storage and inititalize the watchedMovies state variable with it
  const [watchedMovies, setWatchedMovies] = useLocalStorageState([], "watched");

  //get watched movies
  const watchedMovie = (movie) => {
    setWatchedMovies((watched) => [...watched, movie]);
    // localStorage.setItem("watched", JSON.stringify([...watchedMovies, movie]));
  };

  //delete watched movie and reset the watched movies

  const onDelWatchedMovie = (id) => {
    const newData = watchedMovies.filter((element) => element.imdbID !== id);
    setWatchedMovies(newData);
  };

  //getting movie details

  useEffect(() => {
    async function getMovieDetail() {
      if (selectedId === null) {
        setMovieDetailError(false);
        return;
      }
      setMovieDetailIsLoading(true);
      setMovieDetailError(false);
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${key}&i=${selectedId}`
        );

        if (!response.ok)
          throw new Error(
            "Something went wrong for fetching movie data details...."
          );
        const data = await response.json();
        if (data.Response === "False") {
          //setMovies([]);
          throw new Error("No movie details found");
        }

        setMovieDetail(data);
        setMovieDetailError(false);
      } catch (err) {
        //console.error(err.message);
        setMovieDetailError(true);
      } finally {
        setMovieDetailIsLoading(false);
      }
    }

    getMovieDetail();
  }, [selectedId]);

  return (
    <div className="height">
      <Navbar>
        <Logo />
        <Search getQuery={setQuery} query={query} />
        <TotalMoviesFound movies={movies} />
      </Navbar>

      <Main>
        <div className="main">
          <Box>
            {isLoading && <Loading />}
            {error && <ErrorMsg />}
            {!isLoading &&
              !error &&
              movies.length === 0 &&
              query.length === 0 && <InitiallyNoMovie />}

            {!movieDetailIsLoading && !movieDetailError && selectedId && (
              <SelectedMovieDetails
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                movieDetail={movieDetail}
                query={query}
                watchedMovie={watchedMovie} //function
                watchedMovies={watchedMovies} //watched movies array
                movies={movies}
              />
            )}
            {!isLoading && !error && movies.length !== 0 && !selectedId && (
              <MovieList movies={movies} setSelectedId={setSelectedId} />
            )}
          </Box>
          <Box>
            {/* {movieDetailIsLoading && <Loading />}
            {movieDetailError && <ErrorMsg />} */}

            {!movieDetailIsLoading && !movieDetailError && (
              <>
                <Summary watchedMovies={watchedMovies} />
                <WatchedMovies
                  watchedMovies={watchedMovies}
                  onDelWatchedMovie={onDelWatchedMovie}
                />
              </>
            )}
          </Box>
        </div>
      </Main>
    </div>
  );
};

export default MainLayout;
