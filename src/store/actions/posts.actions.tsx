// import { ThunkAction } from 'redux-thunk';
// import RootState from '../reducers';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import firestore from '@react-native-firebase/firestore';
// import { PostActionTypes, ADD_POST, REMOVE_POST, EDIT_POST, Post } from '../postsTypes';

// export const addPost = (post: Post): ThunkAction<void, typeof RootState, { getFirebase: any }, PostActionTypes> => {
//   return (dispatch, getState, { getFirebase }) => {
//     const firestore = getFirebase().firestore();
//     firestore
//       .collection('posts')
//       .add(post)
//       .then((docRef: any) => {
//         dispatch({ type: ADD_POST, payload: { ...post, id: docRef.id } });
//       })
//       .catch((error: Error) => {
//         console.log(error)
//       });
//   };
// };

// export const removePost = (postId: string): ThunkAction<void, typeof RootState, { getFirebase: any }, PostActionTypes> => {
//   return (dispatch, getState, { getFirebase }) => {
//     const firestore = getFirebase().firestore();
//     firestore
//       .collection('posts')
//       .doc(postId)
//       .delete()
//       .then(() => {
//         dispatch({ type: REMOVE_POST, payload: Number(postId) })
//       })
//       .catch((error: Error) => {
//         console.log(error)
//       });
//   };
// };

// export const editPost = (post: Post): ThunkAction<void, typeof RootState, { getFirebase: any }, PostActionTypes> => {
//   return (dispatch, getState, { getFirebase }) => {
//     const firestore = getFirebase().firestore();
//     firestore
//       .collection('posts')
//       .doc(post.id)
//       .set(post)
//       .then(() => {
//         dispatch({ type: EDIT_POST, payload: post });
//       })
//       .catch((error : Error) => {
//         console.log(error)
//       });
//   };
// };


import { ThunkAction } from 'redux-thunk';
import RootState from '../reducers';
import firestore from '@react-native-firebase/firestore';
import { PostActionTypes, ADD_POST, REMOVE_POST, EDIT_POST, Post } from '../postsTypes';

export const addPost = (post: Post): ThunkAction<void, typeof RootState, {}, PostActionTypes> => {
  return async (dispatch) => {
    try {
      const docRef = await firestore().collection('posts').add(post);
    //   const postWithId = { ...post, id: docRef.id };
      dispatch({ type: ADD_POST, payload: { ...post, id: Number(docRef.id) } });
    } catch (error) {
      // Handle error
    }
  };
};

export const removePost = (postId: string): ThunkAction<void, typeof RootState, {}, PostActionTypes> => {
  return async (dispatch) => {
    try {
      await firestore().collection('posts').doc(postId).delete();
      dispatch({ type: REMOVE_POST, payload: Number(postId) });
    } catch (error) {
      // Handle error
    }
  };
};

export const editPost = (post: Post): ThunkAction<void, typeof RootState, {}, PostActionTypes> => {
  return async (dispatch) => {
    try {
    await firestore().collection('posts').doc(post.id.toString()).set(post);
      dispatch({ type: EDIT_POST, payload: post });
    } catch (error) {
      // Handle error
    }
  };
};

