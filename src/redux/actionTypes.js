const apiAction = (type) => ({
  BASE: type,
  SUCCESS: `${type}_SUCCESS`,
  PENDING: `${type}_PENDING`,
  ERROR: `${type}_ERROR`,
});

export const API_REQUEST = 'API_REQUEST';

// FEED ACTIONS
export const ADD_POST = 'ADD_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
export const FETCH_POSTS = apiAction('FETCH_POSTS');
