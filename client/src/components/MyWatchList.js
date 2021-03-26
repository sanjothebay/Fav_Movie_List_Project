import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

function MyWatchList() {
  const [favMovies, setFavMovies] = useState([]);

  const getfavoriteMovieAdd = () => {
    Axios({
      method: "GET",
      url: "/api/get-data",
    }).then((res) => {
      console.log(res, "these are the docs from teh backend");
      setFavMovies(res.data.docs);
    });
  };

  useEffect(() => {
    getfavoriteMovieAdd();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th># </th>
          <th>Movie Name</th>
          <th>Genre</th>
          <th>API Rating</th>
          <th>My Rating</th>
          <th>Watched</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {favMovies.map((doc) => (
          <tr>
            <td>#</td>
            <td>{doc.title}</td>
            <td>Genre 1</td>
            <td>API Rating 1</td>
            <td>My Rating 1</td>
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
              <Button variant="danger">Remove</Button>
            </td>
          </tr>
        ))}
        <tr>
          <td>2</td>
          <td>Movie Name 2</td>
          <td>Genre 2</td>
          <td>API Rating 2</td>
          <td>My Rating 2</td>
          <td>
            <InputGroup className="mb-3">
              <DropdownButton
                as={InputGroup.Prepend}
                variant="outline-secondary"
                title="Already Watched?"
                id="input-group-dropdown-2"
              >
                <Dropdown.Item href="#">Yes</Dropdown.Item>
                <Dropdown.Item href="#">No</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </td>
          <td>
            <Button variant="danger">Remove</Button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Movie Name 3</td>
          <td>Genre 3</td>
          <td>API Rating 3</td>
          <td>My Rating 3</td>
          <td>
            <InputGroup className="mb-3">
              <DropdownButton
                as={InputGroup.Prepend}
                variant="outline-secondary"
                title="Already Watched?"
                id="input-group-dropdown-3"
              >
                <Dropdown.Item href="#">Yes</Dropdown.Item>
                <Dropdown.Item href="#">No</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </td>
          <td>
            <Button variant="danger">Remove</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
export default MyWatchList;
