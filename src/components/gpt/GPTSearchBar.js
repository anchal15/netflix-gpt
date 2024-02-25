import React, { useRef } from "react";
import lang from "../../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { searchMovieTMDB, getGPTMoviesFromSearch } from "../../utils/api/gptApi";
import { addGptMovieResult } from "../../utils/slices/gptSlice";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchTextRef = useRef(null);
  const dispatch = useDispatch();

  const handleGPTSearchClick = async () => {
    const gptMovieResults = await getGPTMoviesFromSearch(searchTextRef.current.value);

    if (!gptMovieResults) {
      // TODO: Write Error Handling
    }

    console.log(gptMovieResults?.[0]?.message?.content);
    // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan

    const gptMovies = gptMovieResults?.[0]?.message?.content.split(",");

    // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

    // For each movie I will search TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
          ref={searchTextRef}
        />
        <button className="m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-3" onClick={handleGPTSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
