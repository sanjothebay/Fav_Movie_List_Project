import React, { useEffect, useState, useRef } from "react";
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
  const [starRate, setstarRate] = useState(0);
  const starsRef= useRef()

  const getfavoriteMovieAdd = () => {
    Axios({
      method: "GET",
      url: "/api/get-data",
    }).then((res) => {
      console.log(res, "these are the docs from the backend");
      setFavMovies(res.data.docs);
    });
  };

  const deletefavoriteMovie = () => {
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


  const onRating = (newValue) => {
    console.log(starsRef)
  }
  const thirdExample = {
   
    onChange: (newValue) => {
      console.log(`New value is ${newValue}`);
      // Axios({
      //   method: "PUT",
      //   url: "/api/updateStars/:_id",
      //   data: {
      //     star: newValue,
      //   }
      // }).then((res) => {
      //   console.log(res, `these are the Rating Stars ${newValue}`);
      //   setstarRate(newValue);
      //   console.log(starRate);
      // });
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
          <tr key={doc._id} >
            <td>🎬</td>
            <td>{doc.title}</td>
            <td>{doc.vote_average}</td>
            <td>{doc.popularity}</td>
            <td>
              <ReactStars 
              id={doc._id}
              ref={starsRef}
               size= {30}
               count= {5}
               isHalf= {false}
               value= {starRate}
               color= "black"
               activeColor= "red"
               onChange={onRating}
              />
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
