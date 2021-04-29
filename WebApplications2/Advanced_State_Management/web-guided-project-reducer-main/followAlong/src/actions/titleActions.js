export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const UPDATE_TITLE = "UPDATE_TITLE";

// action creator: a function that formats an action object
// () => { type: string, payload: any }

export default {
  toggleEditing: () => {
    console.log("toggle editing action creator -- translating your request into reducer speak");
    return {type: TOGGLE_EDITING }
  },
  updateTitle: (title) => {
    console.log("update title action creator -- translating your request into reducer speak");
    return {type: UPDATE_TITLE, payload: title}
  }
}
