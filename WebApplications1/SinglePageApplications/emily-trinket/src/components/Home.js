import React from "react";
import { useHistory } from 'react-router-dom';

function Home(props) {
  console.log('Home', props);
  const history = useHistory();
  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://source.unsplash.com/F6-U5fGAOik"
        alt=""
      />
      <button className="md-button shop-button" onClick={()=> history.push("/shop")}>Shop now!</button>
    </div>
  );
}

export default Home;
