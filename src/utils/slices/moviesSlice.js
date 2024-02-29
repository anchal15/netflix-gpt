import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "Movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    clearAllMoviesData: (state, action) => {
      state.nowPlayingMovies = null;
      state.trailerVideo = null;
      state.popularMovies = null;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, clearAllMoviesData } = moviesSlice.actions;

export default moviesSlice.reducer;
