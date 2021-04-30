// 1. action types
// 2. action creators
// 3. action objects

export const ADD_NEW_MEMBER = "ADD_NEW_MEMBER";

export const addMember = (newMemberName) => {
  return { type: ADD_NEW_MEMBER, payload: newMemberName }
};
