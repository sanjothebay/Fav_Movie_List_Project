import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./components/Index";
import NavTab from "./components/Navbar";
import LoginScreen from "./components/LoginScreen";
import MyWatchList from "./components/MyWatchList";
import FriendWatchList from "./components/FriendWatchList";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <NavTab />
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route exact path="/home" component={Index} />
          <Route exact path="/self" component={MyWatchList} />
          <Route exact path="/others" component={FriendWatchList} />
          <Route exact path="/stats" component={Stats} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
