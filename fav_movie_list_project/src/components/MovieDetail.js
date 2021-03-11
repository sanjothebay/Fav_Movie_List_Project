import React from "react";

function MovieDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3>id: {props.id}</h3>
      <h3>popularity: {props.popularity}</h3>
      <h3>Released: {props.released}</h3>
    </div>
  );
}

export default MovieDetail;
