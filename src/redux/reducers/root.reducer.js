import { combineReducers } from 'redux';

// reducers
import user from './user.reducer';
import posts from './posts.reducer';

const rootReducer = combineReducers({
  user,
  posts
});

export default rootReducer;
