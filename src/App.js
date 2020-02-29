import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";

import "react-bulma-components/dist/react-bulma-components.min.css";
import NavBar from "./components/nav";
import "./App.css";
import HomePage from "./components/HomePage";
import Footer from "./components/nav/footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
