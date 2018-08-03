import { call, fork, put, take } from 'redux-saga/effects';
import { firebaseAuth } from '../firebase';
import { signInFulfilled, signInFailed } from '../actions';
import { SIGN_IN_WITH_EMAIL, SIGN_IN_WITH_PROVIDER, SIGN_OUT } from '../constants';

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
    yield put(signInFailed("Error signing in with email and password."))
  }
}

function* signOut() {

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
  fork(loginFlow)
]