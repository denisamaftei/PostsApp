// Define the types for the post data
export interface Post {
    uid: string;
    title: string;
    body: string;
  }
  
  // Define the types for the actions
  export const ADD_POST = 'ADD_POST';
  export const REMOVE_POST = 'REMOVE_POST';
  export const EDIT_POST = 'EDIT_POST';
  export const GET_POSTS = 'GET_POSTS';

  interface GetPostsAction {
    type: typeof GET_POSTS;
    payload: Post[];
  }

  interface AddPostAction {
    type: typeof ADD_POST;
    payload: Post;
  }
  
  interface RemovePostAction {
    type: typeof REMOVE_POST;
    payload: string; // ID of the post to be removed
  }
  
  interface EditPostAction {
    type: typeof EDIT_POST;
    payload: Post;
  }
  
  export type PostActionTypes = GetPostsAction | AddPostAction | RemovePostAction | EditPostAction;
  