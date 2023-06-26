import { ADD_USER, LOGIN_USER, LOGOUT_USER, UserActionTypes, UsersState } from '../userTypes';

const initialState: UsersState = {
  users: [],
  loggedIn: false,
};

export function usersReducer(
  state = initialState,
  action: UserActionTypes
): UsersState {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case LOGIN_USER:
      return {
        ...state,
        loggedIn: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        loggedIn: false,
      };
    default:
      return state;
  }
}
