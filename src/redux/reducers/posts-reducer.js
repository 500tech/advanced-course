import * as AT from '../action-types';
import { set } from 'lodash/fp';

const initialState = {};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.ADD_POST:
      const { id } = action.payload;

      return {
        ...state,
        [id]: action.payload
      };
    case AT.ADD_COMMENT:
      const { postId, comment } = action.payload;
      const comments = state[postId].comments;

      return set(`${postId}.comments`, [...comments, comment], state);
    case AT.FETCH_POSTS.SUCCESS:
      return action.payload.posts;
    default:
      return state;
  }
};

export default postsReducer;
