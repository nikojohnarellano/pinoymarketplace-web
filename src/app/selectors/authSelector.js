import { createSelector } from 'reselect';

export const getAuthenticatedState = state => state.auth.get('authenticated');

export const getAuth = createSelector(
  state => state.auth,
  auth => auth.toJS()
)