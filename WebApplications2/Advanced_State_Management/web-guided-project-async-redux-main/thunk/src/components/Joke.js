import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJoke } from '../actions/jokeAction';

const Joke = (props) => {
  useEffect(() => {
    // run api call sync action when the component mounts.
    props.getJoke();
  }, [props.getJoke]);

  return (
    <div>
      <h1>Dad says: </h1>
      {props.loading ? <h2>Loading...</h2> : (
      <div>
        <h2> {props.joke}</h2>
        <button onClick={() => props.getJoke()}>Get new joke</button>
      </div>
    )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    joke: state.jokeReducer.joke,
    loading: state.jokeReducer.loading,
    error: state.jokeReducer.error
  };
};

const mapDispatchToProps = {getJoke}

export default connect(mapStateToProps, mapDispatchToProps)(Joke);
