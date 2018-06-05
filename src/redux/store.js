import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/root.reducer';
import api from './middlewares/api.middleware';

const storeEnhancers = compose(
  applyMiddleware(api)
);

const store = createStore(rootReducer, {}, storeEnhancers);

export default store;
