import React from "react";
// import LoginScreen from "./LoginScreen";

function Container(props) {
  return (
    <div>
      {/* <LoginScreen/> */}
      {props.children}
    </div>
  );
}

export default Container;
