import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function NavTab(props) {
  return (
      <Navbar bg="dark" variant="dark">

        <Navbar.Brand href="#index" onClick={() => props.handlePageChange("Index")}
        class={
          props.currentPage === "Index" ? "nav-link active" : "nav-link"
        }>Movie Watch List</Navbar.Brand>

        <Nav className="mr-auto">

          <Nav.Link href="#index" onClick={() => props.handlePageChange("Index")}
          className={
            props.currentPage === "Index" ? "nav-link active" : "nav-link"
          }>Home</Nav.Link>


          <Nav.Link href="#myWatchList" onClick={() => props.handlePageChange("myWatchList")}
          className={
            props.currentPage === "myWatchList" ? "nav-link active" : "nav-link"
          }>My Watch List</Nav.Link>


          <Nav.Link href="#friendWatchList" onClick={() => props.handlePageChange("friendWatchList")}
          className={
            props.currentPage === "friendWatchList" ? "nav-link active" : "nav-link"
          }>My Friends' Watch List</Nav.Link>


          <Nav.Link href="#stats" onClick={() => props.handlePageChange("Stats")}
          className={
            props.currentPage === "Stats" ? "nav-link active" : "nav-link"
          }>Stats</Nav.Link>

        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
  );
}

export default NavTab;
