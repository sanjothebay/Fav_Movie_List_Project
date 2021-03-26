import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link, useLocation} from "react-router-dom";

function NavTab(props) {
  const location = useLocation();
  return (
      <Navbar bg="dark" variant="dark" className="allNav"> 

      <Link to="/home"> 
        <Navbar.Brand 
        className={
          location.pathname === "/home" ? "nav-link active" : "nav-link"
        } id="appLogo">Movie Watch List</Navbar.Brand>
      </Link>


        <Nav className="mr-auto">

          <Link to="/home">
            <Navbar.Brand 
            className={
              location.pathname === "/home" ? "nav-link active" : "nav-link"
            } id="navBttn">Home</Navbar.Brand >
          </Link>

          <Link to="/self">
            <Navbar.Brand 
          className={
            location.pathname === "/self" ? "nav-link active" : "nav-link"
          } id="navBttn">My Watch List</Navbar.Brand >
          </Link>

          <Link to="/others">
          <Navbar.Brand 
          className={
            location.pathname === "/others" ? "nav-link active" : "nav-link"
          } id="navBttn">My Friends' Watch List</Navbar.Brand >
          </Link>

          <Link to="/stats">
          <Navbar.Brand 
          className={
            location.pathname === "Stats" ? "nav-link active" : "nav-link"
          } id="navBttn">Stats</Navbar.Brand >
          </Link>

        </Nav>
      </Navbar>
  );
}
export default NavTab;





