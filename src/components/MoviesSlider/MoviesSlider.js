import React from "react";
import "./MoviesSlider.scss";
import { Carousel, Button } from "antd";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../../utils/constants";

export default function MoviesSlider(props) {
  const { movies } = props;

  if (movies.loading || !movies.result) {
    return "Loading...";
  }

  const { results } = movies.result;
  return (
    <Carousel autoplay className="movies-slider">
      {results.map((movie) => (
        <Movie key={movie.id} movie={movie}></Movie>
      ))}
    </Carousel>
  );
}

function Movie(props) {
  const {
    movie: { id, backdrop_path, title, overview },
  } = props;
  const backdropPath = `${IMAGE_BASE_URL}${backdrop_path}`;

  return (
    <div
      className="movies-slider__movie"
      style={{ backgroundImage: `url('${backdropPath}')` }}
    >
      <div className="movies-slider__movie-info">
        <div>
          <h2>{title}</h2>
          <p>{overview}</p>
          <Link to={`/movie/${id}`}>
            <Button type="primary">Ver más</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
