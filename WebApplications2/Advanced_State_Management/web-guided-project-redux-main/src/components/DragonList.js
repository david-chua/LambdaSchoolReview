import React from 'react';
import { connect } from 'react-redux';
import { addMember } from '../actions/dragonListAction';

class DragonList extends React.Component {
  state = {
    newMember: ''
  };

  handleChanges = e => {
    this.setState({ newMember: e.target.value });
  };

  render() {
    return (
      <div>
      <h2> {this.props.header}</h2>
      <div className="friends-list">
          {this.props.members.map((member, index) => (
            <h4 key={index}>
              {member.name}
              {member.dragonStatus && <i className="fas fa-dragon" />}
            </h4>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newMember}
          onChange={this.handleChanges}
          placeholder="Add new member"
        />
        <button onClick={() => {
          console.log('hitting');
          this.props.addMember(this.state.newMember)
          }
        }>Add member</button>
      </div>
    );
  }
}

// STEP 2: use connect to allow your component to read dat from the Redux store.
// call connect twice and pass the component in the second invocation.
// the first invocation takes in two arguments: a function and an object.

// the function passed into connect:
// when redux calls this function, it will pass in the entire state object from the store.
// return an object. Every property on the  returned object will be added to the props of the connected component.
const mapStateToProps = (state) => {
  return {
    members: state.members,
    header: state.header
  }
}

// export default connect((state) => {
//   return {
//     members: state.members,
//     header: state.header
//   }
// }, {})(DragonList);

export default connect(mapStateToProps, { addMember })(DragonList); // function currying
