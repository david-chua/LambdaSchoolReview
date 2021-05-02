export const UPDATE_TITLE = "UPDATE_TITLE";
export const TOGGLE_EDITING = "TOGGLE_EDITING";


export const updateTitle = (newTitle, dispatch) => {
  dispatch({type: UPDATE_TITLE, payload: newTitle })
}

export const toggleEditing = (dispatch) => {
  dispatch({type: TOGGLE_EDITING })
}
