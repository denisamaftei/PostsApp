import { ADD_USER, LOGIN_USER, LOGOUT_USER, User, UserActionTypes } from '../userTypes';

export function addUser(user: User): UserActionTypes {
  return {
    type: ADD_USER,
    payload: user,
  };
}

export function loginUser(): UserActionTypes {
  return {
    type: LOGIN_USER,
  };
}

export function logoutUser(): UserActionTypes {
  return {
    type: LOGOUT_USER,
  };
}
