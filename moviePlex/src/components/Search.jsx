import React, { useEffect, useRef, useState } from "react";
import useKey from "./useKey";
const Search = ({ getQuery, query }) => {
  //const [searchInput, setSearchInput] = useState("");
  const inputElement = useRef(null);
  //controlled element
  //when any changing in query then this called
  const queryHandler = (e) => {
    //setSearchInput(e.target.value);
    getQuery(e.target.value);
  };

  useKey("Enter", function () {
    if (document.activeElement === inputElement.current) return;
    inputElement.current.focus();
    getQuery("");
  });

  return (
    <div className="text-white mt-1">
      <input
        value={query}
        onChange={queryHandler}
        type="text"
        className=" search bg-search search-border search-text padding-search mb-2"
        placeholder="Search movies . . ."
        ref={inputElement}
      />
    </div>
  );
};
export default Search;
