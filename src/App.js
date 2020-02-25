import React from 'react';
import './App.css';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';
import NavBar from './components/nav';

function App() {
  return (
    <div>
      <NavBar />
        <Button color="primary">My Bulma button</Button>
    </div>
  );
}

export default App;
