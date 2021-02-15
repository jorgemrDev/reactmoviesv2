import React from "react";
import { List, Avatar, Button } from "antd";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import "./MoviesList.scss";
import { IMAGE_BASE_URL } from "../../utils/constants";
import { RightCircleOutlined } from "@ant-design/icons";

export default function MoviesList(props) {
  const { movies, title } = props;
  if (movies.loading || !movies.result) return <Loading></Loading>;
  return (
    <List
      className="movies-list"
      size="default"
      header={<h2>{title}</h2>}
      bordered
      dataSource={movies.result.results}
      renderItem={(movie) => <RenderMovie movie={movie}></RenderMovie>}
    ></List>
  );
}

function RenderMovie(props) {
  const {
    movie: { id, title, poster_path },
  } = props;

  const posterPath = `${IMAGE_BASE_URL}${poster_path}`;
  return (
    <List.Item className="movies-list__movie">
      <List.Item.Meta
        avatar={<Avatar src={posterPath} />}
        title={<Link to={`/movie/${id}`}> {title} </Link>}
      />
      <Link to={`/movie/${id}`}>
        <Button type="primary" shape="circle" icon={<RightCircleOutlined />} />
      </Link>
    </List.Item>
  );
}
