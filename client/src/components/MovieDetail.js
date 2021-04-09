import React from "react";
import Container from "./Container";

function MovieDetail(props) {
  return (
    <Container>
      <img
        alt={props.title}
        className="img-fluid"
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2` + props.src}
        style={{ margin: "0 auto", height: "390px" }}
      />
      <button onClick={props.onClick} data-title={props.title}>
        💥🎬💥
      </button>
      <h3>{props.title}</h3>
      <h3>{props.released}</h3>
      <h3>{props.overview}</h3>
    </Container>
  );
}

export default MovieDetail;
