import React, { useEffect, useState } from "react";
import { Row, Col, Input } from "antd";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import MoviesCatalog from "../../components/MoviesCatalog";
import Footer from "../../components/Footer";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../../utils/constants";
import "./search.scss";

function Search(props) {
  const { location, history } = props;
  const [moviesList, setMoviesList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    (async () => {
      const searchValue = queryString.parseUrl(location.search);
      const { s } = searchValue.query;
      const response = await fetch(
        `${API_URL}search/movie?api_key=${API_KEY}&language=es-ES&query=${s}&page=1`
      );
      const movies = await response.json();
      setMoviesList(movies);
      setSearchValue(s);
    })();
  }, [location.search]);

  const onChangeSearch = (e) => {
    const urlParams = queryString.parse(location.search);
    urlParams.s = e.target.value;
    history.push(`?${queryString.stringify(urlParams)}`);
    setSearchValue(e.target.value);
  };

  return (
    <Row>
      <Col span={12} offSet={6} className="search">
        <h1>Busca tu pelicula</h1>
        <Input value={searchValue} onChange={onChangeSearch}></Input>
      </Col>
      {moviesList.results && (
        <Row>
          <MoviesCatalog movies={moviesList}></MoviesCatalog>
        </Row>
      )}
      <Col span={24}>
        <Footer></Footer>
      </Col>
    </Row>
  );
}

export default withRouter(Search);
