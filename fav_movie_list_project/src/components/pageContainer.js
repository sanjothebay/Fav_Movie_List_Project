import React, { Component } from "react";
import NavTab from "./Navbar";
import Index from "./index";
import MyWatchList from "./MyWatchList";
import FriendWatchList from "./friendWatchList";
import Stats from "./stats";

class Container extends Component {
  state = {
    currentPage: "Index",
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Index") {
      return <Index />;
    } else if (this.state.currentPage === "myWatchList") {
      return <MyWatchList favList={this.state.newMovieTilte}/>;
    } else if (this.state.currentPage === "friendWatchList") {
      return <FriendWatchList />;
    } else {
      return <Stats />;
    }
  };

  render() {
    return (
      <div>
        <NavTab
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Container;
