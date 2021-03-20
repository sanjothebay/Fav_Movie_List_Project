import React from "react";
import Axios from "axios";

const favoriteMovieAdd = () => {
  Axios({
    method: "POST",
    data: {
      favorite: String,
    },
  }).then((res) => console.log(res));
};


function MovieDetail(props) {
  return (
    <div className="text-center">
      <img
        alt={props.title}
        className="img-fluid"
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2` + props.src}
        style={{ margin: "0 auto" }}
      />
      <button  favoriteMovieAdd onClick={props.onClick} data-title={props.title}>
        favs.
      </button>
      <h3>id: {props.id}</h3>
      <h3>popularity: {props.popularity}</h3>
      <h3>Released: {props.released}</h3>
    </div>
  );
}

export default MovieDetail;
