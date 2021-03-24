import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link, useLocation} from "react-router-dom";

function NavTab(props) {
  const location = useLocation();
  return (
      <Navbar bg="dark" variant="dark"> 

      <Link to="/home"> 
        <Navbar.Brand 
        className={
          location.pathname === "/home" ? "nav-link active" : "nav-link"
        }>Movie Watch List</Navbar.Brand>
      </Link>


        <Nav className="mr-auto">

          <Link to="/home">
            <Navbar.Brand 
            className={
              location.pathname === "/home" ? "nav-link active" : "nav-link"
            }>Home</Navbar.Brand >
          </Link>

          <Link to="/self">
            <Navbar.Brand 
          className={
            location.pathname === "/self" ? "nav-link active" : "nav-link"
          }>My Watch List</Navbar.Brand >
          </Link>

          <Link to="/others">
          <Navbar.Brand 
          className={
            location.pathname === "/others" ? "nav-link active" : "nav-link"
          }>My Friends' Watch List</Navbar.Brand >
          </Link>

          <Link to="/stats">
          <Navbar.Brand 
          className={
            location.pathname === "Stats" ? "nav-link active" : "nav-link"
          }>Stats</Navbar.Brand >
          </Link>

        </Nav>
      </Navbar>
  );
}
export default NavTab;


      <Nav className="mr-auto">
        <Link to="/home">
          <Navbar.Brand
            className={
              location.pathname === "/home" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </Navbar.Brand>
        </Link>

        <Link to="/self">
          <Navbar.Brand
            className={
              location.pathname === "/self" ? "nav-link active" : "nav-link"
            }
          >
            My Watch List
          </Navbar.Brand>
        </Link>

        <Link to="/others">
          <Navbar.Brand
            className={
              location.pathname === "/others" ? "nav-link active" : "nav-link"
            }
          >
            My Friends' Watch List
          </Navbar.Brand>
        </Link>

        <Link to="/stats">
          <Navbar.Brand
            className={
              location.pathname === "Stats" ? "nav-link active" : "nav-link"
            }
          >
            Stats
          </Navbar.Brand>
        </Link>
      </Nav>
    </Navbar>
  );
}
export default NavTab;
