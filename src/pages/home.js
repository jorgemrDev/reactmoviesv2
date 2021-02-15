import React from "react";
import useFetch from "../hooks/useFetch";
import MoviesSlider from "../components/MoviesSlider";
import { API_KEY, API_URL } from "../utils/constants";
import MoviesList from "../components/MoviesList";
import { Row, Col } from "antd";

export default function Home() {
  const newmoviesUrl = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=es-Es&page=1`;
  const newMovies = useFetch(newmoviesUrl);

  const popularMoviesUrl = `${API_URL}movie/popular?api_key=${API_KEY}&language=es-Es&page=1`;
  const popularMovies = useFetch(popularMoviesUrl);

  return (
    <>
      <MoviesSlider movies={newMovies}></MoviesSlider>
      <Row>
        <Col span={12}>
          <MoviesList
            movies={popularMovies}
            title="Peliculas Populares"
          ></MoviesList>
        </Col>
        <Col span={12}>..</Col>
      </Row>
    </>
  );
}
