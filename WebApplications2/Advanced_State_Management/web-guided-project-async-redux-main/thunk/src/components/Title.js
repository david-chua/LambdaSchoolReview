import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTitle, toggleEditing } from '../actions/titleAction';

const Title = (props) => {
  const [newTitleText, setNewTitleText] = useState('');
  const dispatch = useDispatch();
  const {editing, title} = useSelector((state) => state.titleReducer);

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!editing ? (
        <h1>
          {title}{" "}
          <i onClick={() => toggleEditing(dispatch)} className="far fa-edit"/>
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
          <button onClick={() => {updateTitle(newTitleText, dispatch)}
          }>
            Update title
          </button>
        </div>
      )}
    </div>
  )
}

// const mapStateToProps = (state) => {
//   console.log(state)
//   return {
//     title: state.titleReducer.title,
//     editing: state.titleReducer.editing
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateTitle:  (title) => dispatch(updateTitle(title)),
//     toggleEditing:  () => dispatch(toggleEditing()),
//     getJoke: () => dispatch(getJoke())
//   }
// }


export default Title;

// connect(mapStateToProps, mapDispatchToProps) returns decorator function
// We then invoke that decorator on title
// and magically, Title can now read from and write to the store.
