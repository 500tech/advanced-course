import { combineReducers } from 'redux';

// reducers
import user from './user-reducer';

const rootReducer = combineReducers({
  user
});

export default rootReducer;
