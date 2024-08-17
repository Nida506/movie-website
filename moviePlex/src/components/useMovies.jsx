import React, { useState, useEffect } from "react";

const useMovies = (query, key, setSelectedId) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  //getting movie
  useEffect(() => {
    const controller = new AbortController();
    async function getData() {
      setIsLoading(true);
      setError(false);
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
          { signal: controller.signal }
        );

        if (!response.ok)
          throw new Error("Something went wrong for getting movies....");
        const data = await response.json();
        if (data.Response === "False") {
          setMovies([]);
          throw new Error("No movie found");
        }

        setMovies(data.Search);
        setError(false);
      } catch (err) {
        //console.error(err.message);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    if (query === "") {
      setMovies([]);
      setError(false);
      setIsLoading(false);
      setSelectedId(null);
    }
    if (query !== "") {
      getData();
      // if (query.length < 3) {
      //   setMovies([]);
      //   setError(false);
      //   setSelectedId(null);
      //   setIsLoading(false);

      //   return;
      // }
    }

    return function () {
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, error };
};

export default useMovies;
