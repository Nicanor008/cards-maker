import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";

import "react-bulma-components/dist/react-bulma-components.min.css";
import NavBar from "./components/nav";
import { store } from './store';
import HomePage from "./components/HomePage";
import Footer from "./components/nav/footer";
import CreateCards from "./containers/Cards/createCards";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/create" component={CreateCards} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
