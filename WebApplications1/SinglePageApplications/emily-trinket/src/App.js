import React, { useState } from "react";
import "./styles.css";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Item from "./components/Item";
import { Link, Route, Switch } from 'react-router-dom';
import data from './data';

export default function App() {

  const [products, setProducts] = useState(data);

  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Emily's Trinkets</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
        </div>
      </nav>
      {/* Switch is like a JS switch statement. The first "true" match with path and URL will render that route component and will breakout of Routes. Only first match will render. */}
      {/*Rendered by Route components */}
      <Switch>
        <Route path="/shop/:id">
          <Item items={products}/>
        </Route>
        <Route path="/shop" render={(props)=> <Shop items={products} />} />
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}
