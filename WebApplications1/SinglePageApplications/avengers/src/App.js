import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {avengers} from './avengersData.js';
import AvengersList from './Components/AvengersList';
import Home from './Components/Home';
import './App.css';

function App() {

  const [avengersObject, setAvengersObject] = useState(avengers);

  return (
    <Router>
      <nav className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/avengers">Avengers</Link>
        </li>
      </nav>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/avengers" component={AvengersList}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
