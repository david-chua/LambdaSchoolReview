import React, {useState} from "react";
import "./styles.css";
import Home from "./components/Home";
import { Link, Route } from 'react-router-dom';

export default function App() {
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
    </div>
  );
}
