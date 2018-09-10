import { call, fork, put, take, select } from 'redux-saga/effects';
import { firebaseAuth } from '../firebase';
import { getAuthenticatedState } from 'app/selectors';
import { signInFulfilled, signInFailed, registerFailed, signOutFulfilled, signOutFailed } from '../actions';
import { SIGN_IN_WITH_EMAIL, SIGN_IN_WITH_PROVIDER, SIGN_OUT, REGISTER_USER } from '../constants';
import signIn from '../modules/auth/signIn';

function* signInWithProvider(authProvider) {
  try {
    
  } catch (e) {
    
  }
}

function* signInWithEmail(email, password) {
  try {
    const authData = yield call([firebaseAuth, firebaseAuth.signInWithEmailAndPassword], email, password);

    console.log(authData)
    yield put(signInFulfilled(authData.user));
  } catch(e) {
    console.log(e)
    console.log("sign in failed")
    yield put(signInFailed("Error signing in with email and password."))
  }
}

function* register(displayName, email, password) {
  try {
    const authData = yield call([firebaseAuth, firebaseAuth.createUserWithEmailAndPassword], email, password);
    yield call([authData.user, authData.user.updateProfile], { displayName });

    // Once the user is sucecssfully registered, sign the user in
    yield put(signInFulfilled(authData.user));
  } catch(e) {
    yield put(registerFailed("Error signing in with email and password."))
    alert("Register failed")
  }
}

function* signOut() {
  try { 
    yield call([firebaseAuth, firebaseAuth.signOut]);
    yield put(signOutFulfilled());
  } catch(e) {
    yield put(signOutFailed(e))
  }
}

export function* watchRegister() {
  while(true) {
    let { payload } = yield take([REGISTER_USER]);
    yield fork(register, payload.displayName, payload.email, payload.password);
  }
}

export function* watchSignIn() {
  while(true) {
    let { payload } = yield take([SIGN_IN_WITH_EMAIL, SIGN_IN_WITH_PROVIDER]);

    if (payload.authProvider) {
      yield fork(signInWithProvider, payload.authProvider);
    } else {
      const { email, password } = payload; 
      yield fork(signInWithEmail, email, password);
    }
  }
}

export function* watchSignOut() {
  while(true) {
    yield take(SIGN_OUT);
    yield fork(signOut);
  }
}

export const authSagas = [
  fork(watchSignIn),
  fork(watchRegister),
  fork(watchSignOut)
]