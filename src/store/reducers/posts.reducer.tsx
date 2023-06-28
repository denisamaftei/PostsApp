import { Reducer } from 'redux';
import { PostActionTypes, ADD_POST, REMOVE_POST, EDIT_POST, GET_POSTS, Post } from '../postsTypes';

export interface PostsState {
    posts: Post[];
  }
  
  const initialState: PostsState = {
    posts: [],
  };
  
const postReducer: Reducer<PostsState, PostActionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
              ...state,
              posts: action.payload,
            };
      case ADD_POST:
        return {
          ...state,
          posts: [...state.posts, action.payload],
        };
      case REMOVE_POST:
        return {
          ...state,
          posts: state.posts.filter((post: Post) => post.uid !== action.payload),
        };
      case EDIT_POST:
        {
            const { uid, title, body } = action.payload;
            const updatedPosts = state.posts.map((post) => {
              if (post.uid === uid) {
                return {
                  ...post,
                  title,
                  body,
                };
              }
              return post;
            });
            return {
              ...state,
              posts: updatedPosts,
            };
          }
      default:
        return state;
    }
  };

export default postReducer;
