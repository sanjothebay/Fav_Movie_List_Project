import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";
import YouTube from "react-youtube";
import Axios from "axios";

// or import movieTrailer from 'movie-trailer'
const movieTrailer = require("movie-trailer");

class OmdbContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {},
      search: "",
      trailerId: "",
      favouritesMovies: [],
      newfavouritesMoviesArray: [],
      newMovieTilte: [],
      copyOfFavouritesList: [],
      newTitle: [],
    };
    this.handleMOviefavourites = this.handleMOviefavourites.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  searchMovies = async (query) => {
    API.search(query)
      .then((res) => {
        console.log(res);
        movieTrailer(query, { id: true }).then((trailer) => {
          this.setState({ result: res.data.results[0], trailerId: trailer, search: "" });
        });
      })

      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleMOviefavourites = (event) => {
    event.preventDefault();
    this.searchMovies(this.state.search);
    const newfavouritesMoviesArray = this.state.newMovieTilte;
    const newMovieTilte = event.target.dataset.title;
    const copyOfFavouritesList = [...newfavouritesMoviesArray];
    copyOfFavouritesList.push(newMovieTilte);
    this.setState({
      newMovieTilte: copyOfFavouritesList,
    });
    console.log(this.state.result);
    console.log(newMovieTilte);
    console.log(copyOfFavouritesList);
    this.favoriteMovieAdd(this.state.result);
  };

  favoriteMovieAdd = (data) => {
    Axios({
      method: "POST",
      url: "/api/insert",
      data
    }).then((res) => console.log(res));
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };

  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
            <Card
              title={this.state.result.title || "Search for a Movie to Begin"}
            >
              <div id="trailerCard">
                {this.state.result.title ? (
                  <div>
                    <YouTube
                      videoId={this.state.trailerId}
                      opts={opts}
                      onReady={this._onReady}
                    />
                  </div>
                ) : (
                  <h3> </h3>
                )}
              </div>

              {this.state.result.title ? (
                <div id="movieInfoCard">
                  <MovieDetail
                    title={this.state.result.title}
                    src={this.state.result.poster_path}
                    videoId={this.state.trailerId}
                    id={this.state.result.id}
                    popularity={this.state.result.popularity}
                    released={this.state.result.release_date}
                    onClick={this.handleMOviefavourites}
                    favList={this.state.newMovieTilte}
                    overview={this.state.result.overview}

                    
                  />
                </div>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
