import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath, clickHandler }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4 cursor-pointer" onClick={() => clickHandler()}>
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
