import firebase from 'firebase/app';
import { SIGN_IN_WITH_EMAIL, SIGN_IN_WITH_PROVIDER, SIGN_IN_FULFILLED, SIGN_IN_FAILED } from '../constants';

export const signInWithProvider = authProvider => {
  return {
    type : SIGN_IN_WITH_PROVIDER,
    payload : {
      authProvider
    }
  }
};

export const signInWithGoogle = () => {
  return signInWithProvider(new firebase.auth.GoogleAuthProvider())
};

export const signInWithFacebook = () => {
  return signInWithProvider(new firebase.auth.FacebookAuthProvider())
};

export const signInWithEmail= (email, password) => {
  return {
    type : SIGN_IN_WITH_EMAIL,
    payload :{
      email,
      password
    }
  }
}

export const signInFulfilled = authUser => {
  return {
    type : SIGN_IN_FULFILLED,
    payload: {
      authUser
    }
  }
};

export const signInFailed = error => {
  return {
    type : SIGN_IN_FAILED,
    payload: {
      error
    }
  }
};