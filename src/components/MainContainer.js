import React from "react";
import VideoBackground from "./VideoBackground";
import VideoInfo from "./VideoInfo";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return null;
  const mainMovie = movies?.[1];
  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoInfo title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
