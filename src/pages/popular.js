import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../utils/constants";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import MoviesCatalog from "../components/MoviesCatalog";
import Pagination from "../components/Pagination";

export default function Popular() {
  const [moviesList, setMoviesList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${API_URL}movie/popular?api_key=${API_KEY}&language=es-Es&page=${page}`
      );
      const movies = await response.json();
      setMoviesList(movies);
    })();
  }, [page]);

  const onChangePage = (page) => {
    setPage(page);
  };

  return (
    <Row>
      <Col span={24} style={{ textAlign: "center", marginTop: 25 }}>
        <h1 style={{ fontSize: 35, fontWeight: "bold" }}>
          Peliculas Populares
        </h1>
      </Col>
      {moviesList.results ? (
        <>
          <Row span="24">
            <MoviesCatalog movies={moviesList} />
          </Row>
          <Row span="24">
            <Pagination
              currentPage={moviesList.page}
              totalItems={moviesList.total_results}
              onChangePage={onChangePage}
            />
          </Row>
        </>
      ) : (
        <Col span={24}>
          <Loading></Loading>
        </Col>
      )}

      <Col span={24}>
        <Footer></Footer>
      </Col>
    </Row>
  );
}
