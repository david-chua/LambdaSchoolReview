import { FETCHING_QUOTE_SUCCESS, FETCHING_QUOTE_ERROR , FETCHING_QUOTE_START } from '../actions/jokeAction';

const initialState = {
  loading: false,
  joke: '',
  error: ''
}


const jokeReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCHING_QUOTE_START:
      return {...state, loading: true }
    case FETCHING_QUOTE_SUCCESS:
      return{...state, loading: false, joke: action.payload }
    case FETCHING_QUOTE_ERROR:
      return {...state, loading: false, error: action.payload}
    default:
      return state;
  }
}

export default jokeReducer;
