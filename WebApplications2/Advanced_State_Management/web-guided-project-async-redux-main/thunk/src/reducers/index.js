import { combineReducers } from 'redux';
import titleReducer from './titleReducer';
import jokeReducer from './jokeReducer';

export default combineReducers({
  titleReducer,
  jokeReducer
})
