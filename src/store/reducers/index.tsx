import { combineReducers } from 'redux';
import postReducer from "./posts.reducer"
import { usersReducer } from './user.reducer';

const rootReducer = combineReducers({
  posts: postReducer,
  users: usersReducer,
});

export default rootReducer;
