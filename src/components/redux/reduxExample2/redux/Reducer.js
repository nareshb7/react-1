import { ADDUSER, LOGIN, LOGOUT, UPDATE } from './ActionType';

const initialState = {
  users: [],
  currentUser: {},
};
export const R2_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDUSER: {
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    }
    case LOGIN: {
      const userObj = state.users.filter(
        (user) => user.mobile == action.payload.mobile
      );
      console.log(userObj, 'reducer', state.users, action.payload);
      return {
        ...state,
        currentUser: userObj[0],
      };
    }
    case LOGOUT: {
      return {
        ...state,
        currentUser: {},
      };
    }
    case UPDATE: {
      let newObj = JSON.parse(JSON.stringify(state.users));
      let updated = newObj.map((user) => {
        if (user.mobile == action.payload.mobile) {
          return action.payload;
        }
        return user;
      });
      return {
        ...state,
        users: updated,
        currentUser: action.payload,
      };
    }
    default:
      return state;
  }
};
