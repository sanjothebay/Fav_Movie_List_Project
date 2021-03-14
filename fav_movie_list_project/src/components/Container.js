import React from "react";


function Container(props) {
  return (
    <div id="mTcontainer" className={`container${props.fluid ? "-fluid" : ""}`}>
      {props.children}
    </div>
  );
}

export default Container;
