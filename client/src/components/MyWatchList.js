import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import ReactStars from "react-rating-stars-component";

function MyWatchList() {
  const [favMovies, setFavMovies] = useState([]);

  const getfavoriteMovieAdd = () => {
    Axios({
      method: "GET",
      url: "/api/get-data",
    }).then((res) => {
      console.log(res, "these are the docs from the backend");
      setFavMovies(res.data.docs);
    });
  };

  const deletefavoriteMovie = (event) => {
    event.stopPropagation();
    Axios({
      method: "DELETE",
      url: "/api/delete/:_id",
    }).then((res) => {
      console.log(res, "Deleted Docs");
      getfavoriteMovieAdd()
    });
  };

  useEffect(() => {
    getfavoriteMovieAdd();
  }, []);

  const thirdExample = {
    size: 30,
    count: 5,
    isHalf: false,
    value: 0,
    color: "black",
    activeColor: "red",
    onChange: (newValue) => {
      console.log(`Example 3: new value is ${newValue}`);
    },
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>🎬</th>
          <th>Movie Name 🎥</th>
          <th>Theater Rating 📽️</th>
          <th>Theater Score 🎞️</th>
          <th>My Rating ⭐</th>
          <th>Watched 📺</th>
          <th>📼</th>
        </tr>
      </thead>
      <tbody>
        {favMovies.map((doc) => (
          <tr>
            <td>🎬</td>
            <td>{doc.title}</td>
            <td>{doc.vote_average}</td>
            <td>{doc.popularity}</td>
            <td>
              <ReactStars {...thirdExample} />
            </td>
            <td>
              <InputGroup className="mb-3">
                <DropdownButton
                  as={InputGroup.Prepend}
                  variant="outline-secondary"
                  title="Already Watched?"
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="#">Yes</Dropdown.Item>
                  <Dropdown.Item href="#">No</Dropdown.Item>
                </DropdownButton>
              </InputGroup>
            </td>
            <td>
              <Button onClick={deletefavoriteMovie} variant="danger">
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
export default MyWatchList;
