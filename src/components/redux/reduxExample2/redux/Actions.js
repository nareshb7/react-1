import { ADDUSER, LOGIN, LOGOUT } from './ActionType';

export const AddUser = (userData) => {
  return {
    type: ADDUSER,
    payload: userData,
  };
};
export const LoginUser = (creds) => {
  return {
    type: LOGIN,
    payload: creds,
  };
};
export const LogoutUser = () => {
  return {
    type: LOGOUT,
  };
};
