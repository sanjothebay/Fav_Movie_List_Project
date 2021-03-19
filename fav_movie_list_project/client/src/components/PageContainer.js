import React, { Component } from "react";
import NavTab from "./Navbar";
import Index from "./Index";
import MyWatchList from "./MyWatchList";
import FriendWatchList from "./FriendWatchList";
import Stats from "./Stats";
import Footer from "./Footer";

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
        <Footer />
      </div>
    );
  }
}

export default Container;
