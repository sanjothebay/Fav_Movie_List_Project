import React, { useState } from "react";
import "./LoginStyles.css";
import Axios from "axios";
import { Route, Redirect, useLocation } from "react-router";

function LoginScreen() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);
  const { state } = useLocation();
  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);

  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "/register",
    }).then((res) => console.log(res));
    window.location.reload(false)
  };

  const login = () => {
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

  // function MovieDetail({ children, ...rest }) {
  //   return (
  //     <Route
  //       {...rest}
  //       render={(location) => {
  //         return login.isAuthenticated === true ? (
  //           children
  //         ) : (
  //           <Redirect
  //             to={{
  //               pathname: "/home",
  //               state: { from: location },
  //             }}
  //           />
  //         );
  //       }}
  //     />
  //   );
  // }

  // const getUser = () => {
  //   Axios({
  //     method: "GET",
  //     withCredentials: true,
  //     url: "/user",
  //   }).then((res) => {
  //     setData(res.data);
  //     console.log(res.data);
  //   });
  // };
  
  return (
    <div className="App">
      <div>
        <h1>Register</h1>
        <input
          placeholder="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={register}>Submit</button>
      </div>

      <div>
        <h1>Login</h1>
        <input
          placeholder="username"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={login}>Submit</button>
        {redirectToReferrer ? <Redirect to="/home" /> : null}
      </div>

      <div className="test">
        {/* <h1>Get User</h1>
        <button onClick={getUser}>Submit</button>
        {data ? <h1>Welcome Back {data.username}</h1> : null} */}
      </div>
    </div>
  );
}

export default LoginScreen;
