let addAction = (value) => {
  return { type: "ADD", payload: value };
};

let subtractAction = (value) => {
  return {type: "SUBTRACT", payload: value};
}

let clearAction = () => {
  return { type: "CLEAR"}
};

let saveToMemoryAction = () => {
  return { type: "ADD_TO_MEMORY" }
}

export default {
  addAction: addAction,
  subtractAction: subtractAction,
  clearAction: clearAction,
  saveToMemoryAction: saveToMemoryAction
};
