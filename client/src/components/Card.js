import React from "react";

function Card(props) {
  return (
    <div className="card text-center">
      <div className="card-header" id="resultHeader">
        <h2>{props.title}</h2>
      </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default Card;
