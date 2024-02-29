import React, { useRef, useState } from "react";
import lang from "../../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { searchMovieTMDB, getGPTMoviesFromSearch } from "../../utils/api/gptApi";
import { addGptMovieResult } from "../../utils/slices/gptSlice";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchTextRef = useRef(null);
  const openAiRef = useRef(null);
  const dispatch = useDispatch();
  const [errMsg, setErrMsg] = useState(null);

  const handleGPTSearchClick = async () => {
    if (!searchTextRef.current.value || !openAiRef.current.value) {
      setErrMsg("Please provide values for both the fields");
      return;
    }
    setErrMsg(null);
    const gptMovieResults = await getGPTMoviesFromSearch(searchTextRef.current.value, openAiRef.current.value);

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
    <div className="pt-[50%] md:pt-[10%] flex justify-center ">
      <form className="w-full md:w-5/12 p-12 bg-black  flex-col bg-opacity-90" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="p-4 w-full rounded-sm"
          placeholder={lang[langKey].gptSearchPlaceholder}
          ref={searchTextRef}
        />
        <input
          type="text"
          className="p-4 my-2 w-full rounded-sm"
          placeholder={lang[langKey].openAiKey}
          ref={openAiRef}
        />

        <p className="text-red-500 font-bold text-lg py-2">{errMsg}</p>
        <button className="my-4 py-2 px-4 bg-red-700 text-white rounded-lg float-right" onClick={handleGPTSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
