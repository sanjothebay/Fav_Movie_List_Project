import React from "react";
import API from "../utils/API";
import { Card } from "react-bootstrap";
import SearchFrom from "./SearchFrom";

class SearchResultContainer extends React.Component {
  state = {
    movies: [],
    search: "",

  };

  componentDidMount() {
    API.search(this.state.search)
      .then(res => {
        this.setState({ movies: res.data})
      })
      .catch(err => console.log(err));
    
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.search(this.state.search);
  };

  render() {
    const {movies} = this.state
    console.log(movies)
    return (
      <>
        <Card className="text-center">
          <Card.Body>
            <SearchFrom
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
             />
          </Card.Body>
          <div>
          <Card></Card>
          </div>
        </Card>
      </>
    );
  }
}

export default SearchResultContainer;
