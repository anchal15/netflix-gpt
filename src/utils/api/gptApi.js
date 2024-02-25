import { API_OPTIONS, OPENAI_KEY } from "../constant";
import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

// search movie in TMDB
export const searchMovieTMDB = async (movie) => {
  const data = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1",
    API_OPTIONS
  );
  const json = await data.json();

  return json.results;
};

// Make an API call to GPT API and get Movie Results
export const getGPTMoviesFromSearch = async (searchText) => {
  const gptQuery =
    "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchText +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

  const gptResults = await openai.chat.completions.create({
    messages: [{ role: "user", content: gptQuery }],
    model: "gpt-3.5-turbo",
  });

  return gptResults?.choices;
};
