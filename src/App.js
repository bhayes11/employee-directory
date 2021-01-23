// import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home/Home";

function App() {
  return (
    <Router basename="/">
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
    </Router>
  );
}

export default App;
