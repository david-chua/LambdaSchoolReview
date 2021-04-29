import { TOGGLE_EDITING, UPDATE_TITLE } from "../actions/titleActions";

const titleReducer = (state, action) => {
  switch(action.type){
    case TOGGLE_EDITING:
      return { ...state, editing: !state.editing };
    case UPDATE_TITLE:
      return {...state, title: action.payload, editing: false};
    default:
      return state;
  }
}

// always start with {... state} to make sure that you're not editing the
//previous state to prevent side reactions.

export default titleReducer;
