import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import ErrorContainer from "./ErrorContainer";
import MovieContainer from "./MovieContainer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const errMsg = useSelector((store) => store.error?.errorMessage);
  useMovieTrailer(movieId);
  if (errMsg) {
    return <ErrorContainer />;
  }
  return <MovieContainer videoKey={trailerVideo?.key} />;
};

export default VideoBackground;
