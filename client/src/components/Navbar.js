import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
import Darkmode from "darkmode-js";

const options = {
  bottom: "32px", // default: '32px'
  right: "32px", // default: '32px'
  left: "unset", // default: 'unset'
  time: "0.3s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: false, // default: true,
  label: "🌓", // default: ''
  autoMatchOsTheme: true, // default: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();

function NavTab() {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" className="allNav">
      {/* <Link to="/home"> 
        <Navbar.Brand 
        className={
          location.pathname === "/home" ? "nav-link active" : "nav-link"
        } id="appLogo">Movie Watch List</Navbar.Brand>
      </Link> */}

      <Nav className="mr-auto">
        <Link to="/">
          <Navbar.Brand
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
            id="navBttn"
          >
            Log In
          </Navbar.Brand>
        </Link>

        <Link to="/home">
          <Navbar.Brand
            className={
              location.pathname === "/home" ? "nav-link active" : "nav-link"
            }
            id="navBttn"
          >
            Home
          </Navbar.Brand>
        </Link>

        <Link to="/self">
          <Navbar.Brand
            className={
              location.pathname === "/self" ? "nav-link active" : "nav-link"
            }
            id="navBttn"
          >
            My Watch List
          </Navbar.Brand>
        </Link>

        <Link to="/others">
          <Navbar.Brand
            className={
              location.pathname === "/others" ? "nav-link active" : "nav-link"
            }
            id="navBttn"
          >
            My Friends' Watch List
          </Navbar.Brand>
        </Link>

        <Link to="/stats">
          <Navbar.Brand
            className={
              location.pathname === "Stats" ? "nav-link active" : "nav-link"
            }
            id="navBttn"
          >
            Stats
          </Navbar.Brand>
        </Link>
      </Nav>
    </Navbar>
  );
}
export default NavTab;
