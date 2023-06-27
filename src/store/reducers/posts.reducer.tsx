import { PostActionTypes, ADD_POST, REMOVE_POST, EDIT_POST, PostsState } from '../postsTypes';

const initialState: PostsState = {
  posts: [],
};

const postReducer = (state = initialState, action: PostActionTypes): PostsState => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((post: any) => post.id !== action.payload),
      };
    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map((post: any) => (post.id === action.payload.uid ? action.payload : post)),
      };
    default:
      return state;
  }
};

export default postReducer;
