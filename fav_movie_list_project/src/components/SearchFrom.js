import React from "react";
import { Form, Button } from "react-bootstrap";
// import { SearchResultContainer } from "./MovieDataBaseContainer";


function SearchFrom(props) {
  return (
    <>
      <Form>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>search</Form.Label>
          <Form.Control
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search For a Movie"
            id="search"
          />
        </Form.Group>

        <Button
          onClick={props.handleFormSubmit}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

export default SearchFrom;
