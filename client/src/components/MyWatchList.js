import React from "react";
//import "../styles/style.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function MyWatchList() {
  return (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Movie Name</th>
        <th>Genre</th>
        <th>API Rating</th>
        <th>My Rating</th>
        <th>Watched</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Movie Name 1</td>
        <td>Genre 1</td>
        <td>API Rating 1</td>
        <td>My Rating 1</td>
        <td>
          <InputGroup className="mb-3">
            <DropdownButton
            as={InputGroup.Prepend}
            variant="outline-secondary"
            title="Already Watched?"
            id="input-group-dropdown-1">
              <Dropdown.Item href="#">Yes</Dropdown.Item>
              <Dropdown.Item href="#">No</Dropdown.Item>
              </DropdownButton>
          </InputGroup>
        </td>
      </tr>
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
            id="input-group-dropdown-2">
              <Dropdown.Item href="#">Yes</Dropdown.Item>
              <Dropdown.Item href="#">No</Dropdown.Item>
              </DropdownButton>
          </InputGroup>
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
            id="input-group-dropdown-3">
              <Dropdown.Item href="#">Yes</Dropdown.Item>
              <Dropdown.Item href="#">No</Dropdown.Item>
              </DropdownButton>
          </InputGroup>
        </td>
      </tr>
    </tbody>
  </Table>
  );
}
export default MyWatchList;
