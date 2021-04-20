import React from "react";

// setting up this function so we can display a nested route and use our useRouteMatch hook.
function Movies(props) {
  console.log(props);
  return (
    <div>
      <p className="item-description">{props.movielist.movies}</p>
    </div>
  );
}

export default Movies;
