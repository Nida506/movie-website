import React, { useState, useEffect, useRef } from "react";
import Star from "./Star";
import { Button } from "bootstrap";

const StarRating = ({ watchedMovie, movieDetail, setSelectedId }) => {
  //component JS

  //state variables
  const [rating, setRating] = useState("");
  const [tempRating, setTempRating] = useState("");

  //rating handler

  const countRef = useRef(0);
  let count = 0;
  useEffect(() => {
    if (rating) countRef.current++;
  }, [rating, count]);

  const ratingHandler = (rating) => {
    setRating(rating);
  };

  //for adding movie to the watched list
  const addBtnHandler = () => {
    const newWatchedMovie = {
      Poster: movieDetail.Poster,
      Title: movieDetail.Title,
      imdbRating: Number(movieDetail.imdbRating),
      userRating: Number(rating),
      Runtime: Number(movieDetail.Runtime.split(" ").at(0)),
      imdbID: movieDetail.imdbID,
    };

    watchedMovie(newWatchedMovie);
    setSelectedId(null);
  };

  //component jsx
  return (
    <>
      <div className="starBox">
        <div className=" d-flex flex-row ">
          <div>
            {" "}
            {Array.from({ length: 10 }, (ele, i) => (
              <Star
                key={i}
                full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
                onRate={() => ratingHandler(i + 1)}
                onHoverIn={() => setTempRating(i + 1)}
                onHoverOut={() => setTempRating(0)}
              />
            ))}
          </div>
          <div className="ms-1 me-3 p-0">
            {" "}
            <p className="d-inline fs-5 starText">
              {tempRating || rating || " "}
            </p>
          </div>
        </div>

        {Number(rating) > 0 ? (
          <button
            onClick={addBtnHandler}
            className=" mt-2  mb-2 fw-bold bg-white fs-6 addListBtn text-dark addMovieToListBorder rounded-pill"
          >
            + Add to List{" "}
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default StarRating;
