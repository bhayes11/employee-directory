import React from "react";
import { HashRouter as Router} from "react-router-dom";
// import { HashRouter as Router, Route} from "react-router-dom";
import Home from "./containers/Home/Home";
import Heading from "./components/Heading/Heading"; 

function App() {
  return (
    <Router basename="/">
      <Heading />
      <Home />
    </Router>
  );
}

export default App;