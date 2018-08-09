import { call, fork, put, take } from 'redux-saga/effects';
import { firebaseAuth } from '../firebase';
import { signInFulfilled, signInFailed, registerFailed } from '../actions';
import { SIGN_IN_WITH_EMAIL, SIGN_IN_WITH_PROVIDER, SIGN_OUT, REGISTER_USER } from '../constants';

function* signInWithProvider(authProvider) {
  try {
    
  } catch (e) {
    
  }
}

function* signInWithEmail(email, password) {
  try {
    const authData = yield call([firebaseAuth, firebaseAuth.signInWithEmailAndPassword], email, password);
    alert("Sign in successful", authData.user.uid)
    yield put(signInFulfilled(authData.user));
  } catch(e) {
    yield put(signInFailed("Error signing in with email and password."))
    alert("Sign in failed")
  }
}

function* register(displayName, email, password) {
  try {
    const authData = yield call([firebaseAuth, firebaseAuth.createUserAndRetrieveDataWithEmailAndPassword], email, password);
    yield call([authData, authData.updateUserProfile], { displayName });
    alert("register successful", authData.user)
    // Once the user is sucecssfully registered, sign the user in
    yield put(signInFulfilled(authData.user));
  } catch(e) {
    yield put(registerFailed("Error signing in with email and password."))
    alert("Register failed")
  }
}

function* signOut() {

}

export function* registerFlow() {
  while(true) {
    let { payload } = yield take([REGISTER_USER]);

    yield fork(register, displayName, email, password);

    yield take(SIGN_OUT);
    yield fork(signOut);
  }
}

export function* loginFlow() {
  while(true) {
    let { payload } = yield take([SIGN_IN_WITH_EMAIL, SIGN_IN_WITH_PROVIDER]);

    if (payload.authProvider) {
      yield fork(signInWithProvider, payload.authProvider);
    } else {
      const { email, password } = payload; 
      yield fork(signInWithEmail, email, password);
    }

    yield take(SIGN_OUT);
    yield fork(signOut);
  }
}

export const authSagas = [
  fork(loginFlow),
  fork(registerFlow)
]