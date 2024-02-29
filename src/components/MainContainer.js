import React from "react";
import VideoBackground from "./VideoBackground";
import VideoInfo from "./VideoInfo";
import { useSelector } from "react-redux";
import ErrorContainer from "./ErrorContainer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const errMsg = useSelector((store) => store.error?.errorMessage);
  if (errMsg) {
    return <ErrorContainer />;
  }
  if (!movies) return null;
  const mainMovie = movies?.[1];
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoInfo title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
