import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Search from "./components/Search/Search"; 
import Heading from "./components/Heading/Heading"; 

function App() {
  return (
    <Router basename="/">
      <Heading />
      <Search />
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
    </Router>
  );
}

export default App;