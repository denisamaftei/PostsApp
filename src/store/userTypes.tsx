export interface User {
    id: number;
    name: string;
    accessToken: string
  }
  
  export interface UsersState {
    users: User[];
    loggedIn: boolean; // Representing the logged-in status
  }
  
  export const ADD_USER = 'ADD_USER';
  export const LOGIN_USER = 'LOGIN_USER';
  export const LOGOUT_USER = 'LOGOUT_USER';
  
  interface AddUserAction {
    type: typeof ADD_USER;
    payload: User;
  }
  
  interface LoginUserAction {
    type: typeof LOGIN_USER;
  }
  
  interface LogoutUserAction {
    type: typeof LOGOUT_USER;
  }
  
  export type UserActionTypes = AddUserAction | LoginUserAction | LogoutUserAction;
  