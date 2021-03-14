import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";
import YouTube from "react-youtube";
import TrailerYoutubeVideo from "./TrailerYoutubeVideo";

const movieTrailer = require("movie-trailer"); // or import movieTrailer from 'movie-trailer'

class OmdbContainer extends Component {
  state = {
    result: {},
    search: "",
    trailerId: "",
  };

  // When this component mounts, search for the movie "The Matrix"
  // componentDidMount() {
  //   this.searchMovies("soul");
  // }

  searchMovies = async (query) => {
    API.search(query)
      .then((res) => {
        console.log(res);
        movieTrailer(query, { id: true }).then((trailer) => {
          console.log(trailer);
          this.setState({ result: res.data.results[0], trailerId: trailer });
        });
      })

      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
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
          <Col size="md-6">
            <Card
              title={this.state.result.title || "Search for a Movie to Begin"}
            >
              {this.state.result.title ? (
                <div>
                  <MovieDetail
                    title={this.state.result.title}
                    src={this.state.result.poster_path}
                    videoId={this.state.trailerId}
                    id={this.state.result.id}
                    popularity={this.state.result.popularity}
                    released={this.state.result.release_date}
                  />
                  {/* <YouTube
                    videoId={this.state.trailerId}
                    opts={opts}
                    onReady={this._onReady}
                  /> */}
                </div>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>
          <Col size="md-3">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
            <Col size="md-">
              <div>
                {this.state.result.title ? (
                  <div>
                    <YouTube
                      videoId={this.state.trailerId}
                      opts={opts}
                      onReady={this._onReady}
                    />
                  </div>
                ) : (
                  <h3></h3>
                )}
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
