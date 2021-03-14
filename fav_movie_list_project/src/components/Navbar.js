import React from "react";

function NavTab(props) {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="img/png"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTizfGf5mOS2Mfs5gHIJbRRUc5u4FCk3RP7zg&usqp=CAU"
        />
        <link rel="stylesheet" type="text/css" href="./CSSReset.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora&family=PT+Sans+Narrow&family=Prosto+One&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
          crossorigin="anonymous"
        />
      </head>

      <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <a
          class="navbar-brand"
          href="#index"
          onClick={() => props.handlePageChange("Index")}
          className={
            props.currentPage === "Index" ? "nav-link active" : "nav-link"
          }
        >
          Movie Watch List
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a
                class="nav-link"
                href="#index"
                onClick={() => props.handlePageChange("Index")}
                className={
                  props.currentPage === "Index" ? "nav-link active" : "nav-link"
                }
              >
                {" "}
                Home{" "}
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#myWatchList"
                onClick={() => props.handlePageChange("myWatchList")}
                className={
                  props.currentPage === "myWatchList"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                {" "}
                My Watch List{" "}
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#friendWatchList"
                onClick={() => props.handlePageChange("friendWatchList")}
                className={
                  props.currentPage === "friendWatchList"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                {" "}
                My Friends Watch List{" "}
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#stats"
                onClick={() => props.handlePageChange("Stats")}
                className={
                  props.currentPage === "Stats" ? "nav-link active" : "nav-link"
                }
              >
                {" "}
                Stats{" "}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavTab;
