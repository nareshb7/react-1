import { ADDUSER, LOGIN, LOGOUT } from './ActionType';

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
    default:
      return state;
  }
};
