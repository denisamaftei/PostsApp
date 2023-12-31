import { ThunkAction } from 'redux-thunk';
import RootState from '../reducers';
import firestore from '@react-native-firebase/firestore';
import { PostActionTypes, ADD_POST, REMOVE_POST, EDIT_POST, GET_POSTS, Post } from '../postsTypes';
import { postsCollection } from "../fierbase"

export const getPosts = (): ThunkAction<void, typeof RootState, {}, PostActionTypes> => {
    return async (dispatch) => {
      try {
        // Fetch posts collection from Firestore
        const querySnapshot = await postsCollection.get();
  
        // Map query snapshot data to post objects
        const posts: Post[] = querySnapshot.docs.map((doc) => {
          return { uid: doc.id, ...doc.data() } as Post;
        });
  
        // Dispatch the action with the retrieved posts
        dispatch({ type: GET_POSTS, payload: posts });
      } catch (error) {
        console.log(error);
        // Handle error
      }
    };
  };

export const addPost = (post: Post): ThunkAction<void, typeof RootState, {}, PostActionTypes> => {
  return  async dispatch => {
    try {
    const docRef = postsCollection.doc();
      await docRef.set({
        body: post.body,
        title: post.title,
        uid: docRef.id
      });
    //   const postWithId = { ...post, id: docRef.id };
      dispatch({ type: ADD_POST, payload: { ...post, uid: docRef.id } });
    } catch (error) {
        console.log(error)
    }
  };

};

export const removePost = (postId: string): ThunkAction<void, typeof RootState, {}, PostActionTypes> => {
  return async (dispatch) => {
    try {
      await postsCollection.doc(postId).delete();
      dispatch({ type: REMOVE_POST, payload: postId });
    } catch (error) {
      // Handle error
    }
  };
};

export const editPost = (post: Post): ThunkAction<void, typeof RootState, {}, PostActionTypes> => {
  return async (dispatch) => {
    try {
    await postsCollection.doc(post.uid).set(post);
      dispatch({ type: EDIT_POST, payload: post });
    } catch (error) {
      // Handle error
    }
  };
};

