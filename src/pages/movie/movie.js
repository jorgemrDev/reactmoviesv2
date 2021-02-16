import React from "react";
import { Row, Col, Button } from "antd";
import { useParams } from "react-router-dom";
import moment from "moment";
import useFetch from "../../hooks/useFetch";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../../utils/constants";
import Loading from "../../components/Loading";
import "./movie.scss";

export default function Movie() {
  const { id } = useParams();
  const movieUrl = `${API_URL}movie/${id}?api_key=${API_KEY}&language=es-Es`;
  const movie = useFetch(movieUrl);

  if (movie.loading || !movie.result) return <Loading></Loading>;

  return <Rendermovie movie={movie.result} />;
}

function Rendermovie(props) {
  const {
    movie: { title, backdrop_path, poster_path },
  } = props;

  const backdropPath = `${IMAGE_BASE_URL}${backdrop_path}`;

  return (
    <div
      className="movie"
      style={{ backgroundImage: `url('${backdropPath}')` }}
    >
      <div className="movie__dark"></div>
      <Row>
        <Col span={8} offset={3} className="movie__poster">
          <PosterMovie image={poster_path} />
        </Col>
        <Col span={10} className="movie__info">
          <MovieInfo movie={props.movie}></MovieInfo>
        </Col>
      </Row>
    </div>
  );
}

function PosterMovie(props) {
  const { image } = props;
  const posterPath = `${IMAGE_BASE_URL}${image}`;
  return <div style={{ backgroundImage: `url('${posterPath}')` }}></div>;
}

function MovieInfo(props) {
  const {
    movie: { id, release_date, overview, title, genres },
  } = props;

  console.log(genres);
  return (
    <>
      <div className="movie__info-header">
        <h1>
          {title}
          <span> {moment(release_date, "YYYY-MM-DD").format("YYYY")} </span>
        </h1>
        <button>Ver Traile</button>
      </div>
      <div className="movie__info-content">
        <h3>Genreral</h3>
        <p>{overview}</p>
        <h3>Generos</h3>
        <ul>
          {genres.map((gen) => (
            <li key={gen.id}>{gen.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
