import React, {useState} from 'react';
import { connect } from 'react-redux';
import { updateTitle, toggleEditing } from '../actions/titleAction';
import { getJoke } from '../actions/jokeAction';

const Title = (props) => {
  console.log(props)
  const [newTitleText, setNewTitleText] = useState('');

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!props.editing ? (
        <h1>
          {props.title}{" "}
          <i onClick={() => props.toggleEditing()} className="far fa-edit"/>
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
          <button onClick={() => {
            props.updateTitle(newTitleText)}
          }>
            Update title
          </button>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    title: state.titleReducer.title,
    editing: state.titleReducer.editing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTitle:  (title) => dispatch(updateTitle(title)),
    toggleEditing:  () => dispatch(toggleEditing()),
    getJoke: () => dispatch(getJoke())
  }
}//something


export default connect(mapStateToProps, mapDispatchToProps)(Title);

// connect(mapStateToProps, mapDispatchToProps) returns decorator function
// We then invoke that decorator on title
// and magically, Title can now read from and write to the store.
