import { firebaseAuth } from './firebase';
import { signInFulfilled } from '../actions';

export function initAuth(dispatch) {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebaseAuth.onAuthStateChanged(authUser => {
            console.log("isAuthenticated") 
          
            if (authUser) {
                dispatch(signInFulfilled(authUser));
            }
    
            resolve();
            unsubscribe();
        }, error => reject(error));
    });
}