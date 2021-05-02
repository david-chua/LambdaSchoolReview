import axios from 'axios';

export const ERROR = "ERROR";
export const FETCHING_QUOTE_START = "FETCHING_QUOTE_START";
export const FETCHING_QUOTE_SUCCESS = "FETCHING_QUOTE_SUCCESS";
export const FETCHING_QUOTE_ERROR = "FETCHING_QUOTE_ERROR";


export const getJoke = () => dispatch => {
  // update state to loading
  dispatch({type: FETCHING_QUOTE_START})

  // begin API request
  const headers= {
    Accept: "application/json",
  }

  axios.get("https://icanhazdadjoke.com/", {headers})
    .then(res => {
      dispatch({type: FETCHING_QUOTE_SUCCESS, payload: res.data.joke})
    })
    .catch(err => {
      dispatch({type: FETCHING_QUOTE_ERROR, payload: err})
    })
  // respond to happy path and sad path , updating state with API response
}
