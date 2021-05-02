import React, { use } from 'react';

import Joke from './components/Joke';
import Title from './components/Title';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Title/>
      <Joke/>
    </div>
  );
}

export default App;
