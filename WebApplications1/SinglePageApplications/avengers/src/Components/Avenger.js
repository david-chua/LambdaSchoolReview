import React from "react";
import { useParams, useRouteMatch, Route, NavLink } from "react-router-dom";
import Movies from "./Movies";
function Avenger({ hero }) {
  // console.log("Props", props);
  const params = useParams();

  // we can use this hook to grab information about the way React Router matched this route.
  // useRouteMatch returns several values when you console.log(match)
  // const match = useRouteMatch()
  // console.log("match", match)
  // path: "/avengers/:hero"
  // url: "/avengers/1"
  // isExact: true
  // params: Object
  // We can destructure out our path and url because these are the values we will be using to create a more flexible/dynamic route
  const { path, url } = useRouteMatch();
  // path: "/avengers/:hero"
  // url: "/avengers/1"
  const heros = hero.find(item => item.id === Number(params.hero));
  return (
    <div className="characters-list-wrapper">
      <div className="character-card">
        <h2>{heros.name}</h2>
        <p>{heros.nickname}</p>
        <p>{heros.description}</p>
        <img src={heros.img} alt="random avengers img" />
        <nav className="nav-buttons">
          <NavLink to={`${url}/movies`}>Movie List</NavLink>
        </nav>
        <Route path={`${path}/movies`}>
          <Movies movielist={heros} />
        </Route>
      </div>
    </div>
  );
}
export default Avenger;
