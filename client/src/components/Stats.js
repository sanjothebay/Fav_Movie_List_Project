import React from "react";
import Plot from "react-plotly.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Container";
import NavTab from "./Navbar";
import Footer from "./Footer";

function Stats() {
  return (
    <Container>
      <NavTab />
      <div className="contactcard">
        <h1>Stats will be here</h1>
        <Plot
          data={[
            {
              type: "bar",
              x: ["movie1", "movie2", "movie3"],
              y: [29, 150, 85],
            },
          ]}
          layout={{
            width: 1000,
            heigh: 500,
            title: "Most frequently added movies to the favorites list",
          }}
        />
        <Plot
          data={[
            {
              type: "pie",
              labels: ["genreA", "genreB", "GenreC"],
              values: [20, 70, 10],
            },
          ]}
          layout={{ width: 1000, heigh: 500, title: "Genre %" }}
        />
      </div>
      <Footer />
    </Container>
  );
}
export default Stats;
