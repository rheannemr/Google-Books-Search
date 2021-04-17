import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/index";
import SavedBooks from "./pages/SavedBooks/index";
import SearchBooks from "./pages/SearchBooks/index";
import Nav from "../src/components/Nav/index"

function App() {

  useEffect(() => {
    fetch("/api/book").then(res => res.json()).then(res => console.log("Books are: ", res));
  })

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/searchbooks"]}>
            <SearchBooks />
          </Route>
          <Route>
            <SavedBooks />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
