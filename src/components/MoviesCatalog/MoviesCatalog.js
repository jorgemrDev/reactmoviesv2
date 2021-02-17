import React from "react";
import "./MoviesCatalog.scss";
import { Col, Card } from "antd";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../../utils/constants";
import { EyeFilled } from "@ant-design/icons";

export default function MoviesCatalog(props) {
  const {
    movies: { results },
  } = props;
  return results.map((movie) => (
    <Col key={movie.id} xs={4} className="movies-catalog">
      <MovieCard movie={movie}></MovieCard>
    </Col>
  ));
}

function MovieCard(props) {
  const {
    movie: { id, title, poster_path },
  } = props;
  const { Meta } = Card;
  const posterPath = `${IMAGE_BASE_URL}/${poster_path}`;

  return (
    <Link to={`/movie/${id}`}>
      <Card
        hoverable
        style={{ width: "240px" }}
        cover={<img alt={title} src={posterPath}></img>}
        actions={<EyeFilled />}
      >
        <Meta title={title}></Meta>
      </Card>
    </Link>
  );
}
