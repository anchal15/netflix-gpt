import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import moviesReducer from "./slices/moviesSlice";
import gptReducer from "./slices/gptSlice";
import configReducer from "./slices/configSlice";
import errorReducer from "./slices/errorSlice";

const appStore = configureStore({
  reducer: { user: userReducer, movies: moviesReducer, gpt: gptReducer, config: configReducer, error: errorReducer },
});

export default appStore;
