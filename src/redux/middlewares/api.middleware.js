import * as AT from '../actionTypes';

const api = ({ dispatch }) => next => action => {
  if (action.type !== AT.API_REQUEST) {
    return next(action);
  }

  const { base, url, method } = action.payload;

  fetch(url, { method })
    .then(response => response.json())
    .then(payload => dispatch({ type: base.SUCCESS, payload }))
    .catch(error => console.log(`Network error:`, error));
};

export default api;
