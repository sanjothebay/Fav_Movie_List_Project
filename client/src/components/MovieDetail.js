import React from "react";

function MovieDetail(props) {
  return (
    <div className="text-center">
      <button onClick={props.onClick} data-title={props.title}>
        Add to My Watchlist
      </button>
      <img
        alt={props.title}
        className="img-fluid"
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2` + props.src}
        style={{ margin: "0 auto", height:"390px"}}
      />
      <button onClick={props.onClick} data-title={props.title}>
        💥🎬💥
      </button>
      <h3>Movie name: {props.popularity}</h3>
      <h3>Released: {props.released}</h3>
      <h3>Genre: {props.popularity}</h3>
      <h3>Director: {props.popularity}</h3>
      <h3>Overview: {props.popularity}</h3>
    </div>
  );
}

export default MovieDetail;
