import { ADD_NEW_MEMBER } from '../actions/dragonListAction';

const initialState = {
  members: [
    { name: 'Jojo Zhang', dragonStatus: true },
    { name: 'Brandon Harris', dragonStatus: false }
  ],
  header: 'Dragon Members'
}

export const dragonListReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NEW_MEMBER:
      return {
        ...state,
        members: [
          ...state.members,
          { name: action.payload, dragonStatus: false }
        ]
      }
    default:
      console.log('default');
      return state;
  }
}
