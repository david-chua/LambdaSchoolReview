import React from "react";
import { Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import ItemDescription from './ItemDescription';
import ItemShipping from './ItemShipping';

// we will be importing and adding a lot of items into this component
function Item(props) {
  const params = useParams();
  console.log(params);
  const routeMatch = useRouteMatch();
  console.log(routeMatch);

  const shopItem = props.items.find(item => item.id === Number(params.id))

  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={shopItem.imageUrl} alt={shopItem.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{shopItem.name}</h2>
          <h4>${shopItem.price}</h4>
        </div>
      </div>
      <nav className="item-sub-nav">
        <Link to={routeMatch.url}>Description</Link>
        <Link to={`${routeMatch.url}/shipping`}>Shipping</Link>
      </nav>
      {/* Nested Routing Routes go here -> Remember! These turn into the component if path matches */}
      <Route exact path={routeMatch.path}>
        <ItemDescription item={shopItem} />
      </Route>
      <Route path={`${routeMatch.path}/shipping`}>
        <ItemShipping item={shopItem} />
      </Route>
    </div>
  );
}
export default Item;
