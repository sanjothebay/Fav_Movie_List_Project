import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group" id="searchCard">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Movie"
          id="search"
        />
        <br />
        <button
          onClick={props.handleFormSubmit}
          className="btn btn-outline-danger
        "
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
