import React from "react";
//import "../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyWatchList(props) {
  return (
    <container class="contactcard">
      <h1>My Watch List will be here</h1>
      <h2>
      Favourites Movies: {props.newMovieTilte}
      </h2>
    </container>
  );
}
export default MyWatchList;
