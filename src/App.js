import React from 'react';
import './App.css';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';
import NavBar from './components/nav';
import SEO from './components/SEO';

function App() {
  return (
    <div>
      <div>
      <SEO title="Cards Maker" />
        <NavBar />
          <Button color="primary">My Bulma button</Button>
      </div>
    </div>
  );
}

export default App;
