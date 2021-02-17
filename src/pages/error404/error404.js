import React from "react";
import "./error404.scss";
import { Link } from "react-router-dom";

export default function error404() {
  return (
    <div className="error404">
      <h1>Error 404</h1>
      <h2>Página no encontrada</h2>
      <Link to="/">
        <h3>Volver al inicio</h3>
      </Link>
    </div>
  );
}
