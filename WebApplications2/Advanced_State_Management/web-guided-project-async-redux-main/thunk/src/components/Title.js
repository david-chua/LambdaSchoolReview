import React, {useState} from 'react';
import { connect } from 'react-redux';
import { updateTitle, toggleEditing } from '../actions/titleAction';

const Title = (props) => {
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
  return {
    title: state.title,
    editing: state.editing
  }
}


export default connect(mapStateToProps, {updateTitle, toggleEditing})(Title);
