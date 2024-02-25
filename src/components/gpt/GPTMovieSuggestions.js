import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../MovieList";

const GPTMovieSuggestions = () => {
  const { movieNames, tmdbResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList key={movieName} title={movieName} movies={tmdbResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
