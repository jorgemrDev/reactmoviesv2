import React from "react";
import useFetch from "../hooks/useFetch";
import MoviesSlider from "../components/MoviesSlider";
import { API_KEY, API_URL } from "../utils/constants";

export default function Home() {
  const newmoviesUrl = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=es-Es&page=1`;
  const newMovies = useFetch(newmoviesUrl);
  console.log(newMovies);
  return (
    <>
      <MoviesSlider movies={newMovies}></MoviesSlider>
    </>
  );
}
