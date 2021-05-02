import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const Joke = () => {
  return (
    <h1>Dad says: </h1>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps)(Joke);
