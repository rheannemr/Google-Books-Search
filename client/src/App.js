import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SavedBooks from "./pages/SavedBooks";
import SearchBooks from "./pages/SearchBooks";

function App() {

  useEffect(() => {
    fetch("/api/book").then(res => res.json()).then(res => console.log("Books are: ", res));
  })

  return (
    <Router>
      <div>
        <Link to="./"> Home </Link>
        <Link to="./searchbook"> Search for a book </Link>
        <Link to="./savedbooks"> Saved Books </Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/searchbook" component={SearchBooks} />
          <Route exact path="/savedbooks" component={SavedBooks} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
