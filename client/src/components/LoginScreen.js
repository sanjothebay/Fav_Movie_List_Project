import React, { useState } from "react";
import "./LoginStyles.css";
import Axios from "axios";
import { Route, Redirect, useLocation } from "react-router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function LoginScreen() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);
  const { state } = useLocation();
  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);

  const register = (event) => {
    event.preventDefault();
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "/register",
    }).then((res) => {
      console.log(res);
      window.location.reload();
    });
    
  };

  const login = (event) => {
    event.preventDefault();
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "/login",
    }).then((res) => {
      console.log(res);
      if (res.data.message === "Successfully authenticated") {
        console.log(res.data, "success");
        localStorage.setItem("authenticatedUser", res.data.user);
        setRedirectToReferrer(true);
        console.log(redirectToReferrer);
      }
    });
  };


  return (

    <Container>

      <Row className="register">
      
      <Form>
      <h1>Register</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control placeholder="Enter user name" onChange={(e) => setRegisterUsername(e.target.value)}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setRegisterPassword(e.target.value)}/>
        </Form.Group>
       
       
        <Button variant="primary" type="submit" onClick={register}>
          Register
        </Button>
      </Form>
          
        
      </Row>

      <Row className="showLogin">
        <Form>
        <h1>Login</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control placeholder="Enter user name" onChange={(e) => setLoginUsername(e.target.value)}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)}/>
          </Form.Group>
        
        
          <Button variant="primary" type="submit" onClick={login}>
            Login
          </Button>
        </Form>

      {redirectToReferrer ? <Redirect to="/home" /> : null}
      
      </Row>
    </Container>

    
  );
}

export default LoginScreen;
