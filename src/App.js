import React from 'react';
import './App.css';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import NavBar from './components/nav';
import SEO from './components/SEO';
import HomePage from './components/HomePage';

function App() {
  return (
    <div>
      <div>
      <SEO title="Cards Maker" />
        <NavBar />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
