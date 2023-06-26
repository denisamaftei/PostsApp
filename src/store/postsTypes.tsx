// Define the types for the post data
export interface Post {
    id: number;
    title: string;
    body: string;
  }
  
  // Define the types for the store state
  export interface PostsState {
    posts: Post[];
  }
  
  // Define the types for the actions
  export const ADD_POST = 'ADD_POST';
  export const REMOVE_POST = 'REMOVE_POST';
  export const EDIT_POST = 'EDIT_POST';
  
  interface AddPostAction {
    type: typeof ADD_POST;
    payload: Post;
  }
  
  interface RemovePostAction {
    type: typeof REMOVE_POST;
    payload: number; // ID of the post to be removed
  }
  
  interface EditPostAction {
    type: typeof EDIT_POST;
    payload: Post;
  }
  
  export type PostActionTypes = AddPostAction | RemovePostAction | EditPostAction;
  