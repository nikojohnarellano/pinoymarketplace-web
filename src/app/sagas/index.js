import { all } from 'redux-saga/effects';
import {authSagas} from './authSaga';

export default function* sagas() {
  return yield all([
    ...authSagas
  ])
};