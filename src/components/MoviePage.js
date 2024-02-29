import React from "react";
import MovieContainer from "./MovieContainer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MoviePage = () => {
  const params = useParams();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(params?.movieid);
  return (
    <div className="h-screen bg-slate-800">
      <MovieContainer videoKey={trailerVideo?.key} />
    </div>
  );
};

export default MoviePage;
