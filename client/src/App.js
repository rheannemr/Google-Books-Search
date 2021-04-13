import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {

  useEffect(() => {
    fetch("/api/book").then(res => res.json()).then(res => console.log("Books are: ", res));
  })

  return (
    <Router>
      <div>
        <Link to="./"> All Books </Link>
        <Link to="./new-book"> Add a book </Link>
        <Switch>
          <Route exact path="/">Here are your books!</Route>
          <Route path="/newBook">Add a new book!</Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
