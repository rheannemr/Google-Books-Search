import React, { useEffect } from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import SavedBooks from "./pages/SavedBooks";
import SearchBooks from "./pages/SearchBooks";
import AppTabs from "./components/AppTabs/index"

function App() {

  useEffect(() => {
    fetch("/api/book").then(res => res.json()).then(res => console.log("Books are: ", res));
  })

  return (
    <HashRouter basename='/'>
      <div>
          <AppTabs />
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/searchbooks" component={SearchBooks} />
          <Route exact path="/savedbooks" component={SavedBooks} />
      </div>
    </HashRouter>
  );
}


export default App;
