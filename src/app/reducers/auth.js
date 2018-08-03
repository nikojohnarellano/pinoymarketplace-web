import { Record } from 'immutable';
import { SIGN_IN_FULFILLED, SIGN_OUT_FULFILLED } from '../constants';

export const AuthState = new Record({
  authenticated : false,
  uid : null,
  user : null
});

export const authReducer = (state = new AuthState(), action) => {
  switch(action.type) {
    case SIGN_IN_FULFILLED : {
      console.log(action)

      const { payload } = action;

      return state.merge({
        authenticated : true,
        uid : payload.authUser.uid,
        user : payload.authUser
      });
    }
    case SIGN_OUT_FULFILLED : {
      return state.merge({
        authenticated : false,
        uid : null,
        user: null
      })
    }
    default: 
      return state;
  }
}