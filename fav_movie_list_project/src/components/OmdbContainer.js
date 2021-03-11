import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";

class OmdbContainer extends Component {
  state = {
    result: {},
    search: "",
  };

  // When this component mounts, search for the movie "The Matrix"
  // componentDidMount() {
  //   this.searchMovies("soul");
  // }

  searchMovies = (query) => {
    API.search(query)
      .then((res) => {
        console.log(res);
        this.setState({ result: res.data.results });
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
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              title={this.state.result.title || "Search for a Movie to Begin"}
            >
              {this.state.result.title ? (
                <MovieDetail
                  title={this.state.result.title}
                  src={this.state.result.poster_path}
                  id={this.state.result.id}
                  popularity={this.state.result.popularity}
                  released={this.state.result.release_date}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
