import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BACKGROUND_NETFLIX_IMAGE } from "../../utils/constant";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-20">
        <img src={BACKGROUND_NETFLIX_IMAGE} alt="logo" />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
