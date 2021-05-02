import { UPDATE_TITLE, TOGGLE_EDITING } from '../actions/titleAction';


const initialState = {
  editing: false,
  title: "Jokes"
};

const titleReducer = (state = initialState, action) => {
  switch(action.type){
    case UPDATE_TITLE:
      return {... state, title: action.payload, editing: false }
    case TOGGLE_EDITING:
      return {... state, editing: !state.editing }
    default:
      return state;
  }
}

export default titleReducer;
