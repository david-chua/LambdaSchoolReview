import data from "./../../data";
import axios from 'axios';

const fetchSelectedPoke = (id) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      return(data);
  });
};

const fetchAllPoke = () => {
  return data;
};

export default {
  fetchSelectedPoke,
  fetchAllPoke
};
