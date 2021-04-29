import React, { useState, useReducer } from 'react';
import titleReducer from '../reducers/titleReducer';
import { TOGGLE_EDITING, UPDATE_TITLE } from "../actions/titleActions";
import actions from "../actions/titleActions";

const Title = () => {

  // Turn the two to a single useReducer call
  // const [title, setTitle] = useState('Hello earthlings!'); // application level state
  // const [editing, setEditing] = useState(false); // application level state

  // isntead of the standalone title and editing variables, for useReducer we want to put them
  // in a state object: { title: string, editing: boolean}

  // const [ state, dispatch] = useReducer(reducer, initialState);
  const initialState = { title: 'Hello reducer earthlings', editing: false}

  const [state, dispatch] = useReducer(titleReducer, initialState);

  const [newTitleText, setNewTitleText] = useState(''); //component level state (keystroke change)

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{' '}
          <i onClick={() => dispatch(actions.toggleEditing())} className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button onClick={() => dispatch(actions.updateTitle(newTitleText))}>
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;
