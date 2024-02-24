import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import GPTSearch from "./gpt/GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <>
      <Header />
      {!showGPTSearch ? (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      ) : (
        <GPTSearch />
      )}
    </>
  );
};

export default Browse;
