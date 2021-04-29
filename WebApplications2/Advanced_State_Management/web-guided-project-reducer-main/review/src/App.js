import React, { useReducer } from "react";
import action from './actions/calcActions';
import reducer from './reducers/calcReducer';
import "./styles.css";


export default function App() {
  const initialState = {
    currentValue: 0,
    memory: 0
  }

  const [ state, dispatch ] = useReducer(reducer, initialState);

  const handleAdd = () => {
      dispatch(action.addAction(2));
  }

  const handleSubtract = () => {
    dispatch(action.subtractAction(5));
  };

  const handleClear = () => {
    dispatch(action.clearAction());
  }

  return (
    <div className="App">
      <textarea rows="1" value={state.currentValue} id="total" type="text" name="ans"></textarea>
      <br />
      <button type="button" onClick={handleAdd} className="btn">
        +2
      </button>
      <button type="button" onClick={handleSubtract} className="btn">
       -5
      </button>
      <button type="button" onClick={handleClear} className="btn">
        CE
      </button>
    </div>
  );
}
