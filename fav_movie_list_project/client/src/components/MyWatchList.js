import React from "react";
//import "../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyWatchList(props) {
  return (
    <container class="contactcard">
      <h1>
      My Watchlist: {props.newMovieTilte}
      </h1>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Movie Name</th>
            <th scope="col">Genre</th>
            <th scope="col">API Rating</th>
            <th scope="col">My Rating</th>
            <th scope="col">Already Watched</th>
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Movie Name 1</td>
            <td>Genre 1</td>
            <td>API Rating 1</td>
            <td>My Rating 1</td>
            <td>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                <label class="custom-control-label" for="customCheck1">Watched/Not Watched</label>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Movie Name 2</td>
            <td>Genre 2</td>
            <td>API Rating 2</td>
            <td>My Rating 2</td>
            <td>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck2"/>
                <label class="custom-control-label" for="customCheck2">Watched/Not Watched</label>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Movie Name 3</td>
            <td>Genre 3</td>
            <td>API Rating 3</td>
            <td>My Rating 3</td>
            <td>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck3"/>
                <label class="custom-control-label" for="customCheck3">Watched/Not Watched</label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </container>
  );
}
export default MyWatchList;
