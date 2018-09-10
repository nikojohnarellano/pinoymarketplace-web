import firebase from 'firebase/app';
import { SIGN_IN_WITH_EMAIL, SIGN_IN_WITH_PROVIDER, SIGN_IN_FULFILLED, SIGN_IN_FAILED, REGISTER_FAILED, REGISTER_USER, SIGN_OUT_FULFILLED, SIGN_OUT_FAILED, SIGN_OUT } from '../constants';

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

export const registerUser = (displayName, email, password) => {
  return {
    type : REGISTER_USER,
    payload : {
      displayName,
      email,
      password
    }
  }
}

export const registerFailed = error => {
  return {
    type : REGISTER_FAILED,
    payload : {
      error
    }
  }
};

export const signOut = () => {
  return {
    type : SIGN_OUT
  }
}

export const signOutFulfilled = () => {
  return {
    type : SIGN_OUT_FULFILLED
  }
}

export const signOutFailed = (error) => {
  return {
    type : SIGN_OUT_FAILED ,
    payload : {
      error
    }
  }
}