import { GET_DATA, CURRENTUSER, LOGOUT, UPDATE } from './ActionType';

const inititalState = {
  users: [],
  currentUser: {},
};

const Users = JSON.parse(localStorage.getItem('Ecom-Users'));
const CurrentUser = JSON.parse(localStorage.getItem('Ecom-CurrentUser'));
if (Users) {
  inititalState.users = Users;
}
if (CurrentUser) {
  inititalState.currentUser = CurrentUser;
}

const DataReducer = (state = inititalState, action) => {
  let update = JSON.parse(JSON.stringify(state.users));
  switch (action.type) {
    case GET_DATA:
      localStorage.setItem(
        'Ecom-Users',
        JSON.stringify([...state.users, action.payload])
      );
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case CURRENTUSER:
      localStorage.setItem('Ecom-CurrentUser', JSON.stringify(action.payload));
      return {
        ...state,
        currentUser: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem('Ecom-CurrentUser');
      return {
        ...state,
        currentUser: {},
      };
    case UPDATE:
      let index;
      update.forEach((user, i) => {
        if (user.email === action.obj.email) {
          index = i;
          return;
        }
      });
      update[index] = action.obj;
      localStorage.setItem('Ecom-Users', JSON.stringify(update));
      return {
        ...state,
        users: update,
      };
    default:
      return state;
  }
};
export default DataReducer;
