import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AvengersList from "./Components/AvengersList";
import Avenger from "./Components/Avenger";
import Home from "./Components/Home";
import "./App.css";
import heros from "./data";
const App = () => {
  const [hero] = useState(heros);
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
          {/* we can use Route to render child components instead of having to use the component prop. This way we can easily pass down props to our components.  */}
          <Route path="/avengers/:hero">
            {/* Passing our data to avangers list */}
            <Avenger key={hero.id} hero={hero} />
          </Route>
          <Route path="/avengers/">
            <AvengersList hero={hero} />
            {/* Passing our data to avangers list */}
          </Route>

          {/* You can also render a component with the component prop if you do not need to pass any additional props to your component */}
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
