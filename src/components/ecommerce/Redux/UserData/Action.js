import { GET_DATA, CURRENTUSER, LOGOUT, UPDATE } from './ActionType'

export const Action =(value)=> {
  return {
    type: GET_DATA,
    payload: value
  }
}

export const CurrentUser = (value)=> {
  return {
    type: CURRENTUSER,
    payload: value
  }
}
export const LogOut = ()=> {
  return {
    type: LOGOUT
  }
}
export const Update=(obj)=> {
  return {
    type: UPDATE,
    obj
  }
}
