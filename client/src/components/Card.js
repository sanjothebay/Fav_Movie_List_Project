import React from "react";
import Container from "./Container";

function Card(props) {
  return (
    <Container>
    <div className="card text-center">
      <h2>{props.title}</h2>
      <div className="card-body">{props.children}</div>
    </div>
    </Container>
  );
}

export default Card;
