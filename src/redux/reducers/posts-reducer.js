import * as AT from '../action-types';
import { set, get } from 'lodash/fp';

const initialState = {
  0: {
    id: 0,
    author: 'john smith',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    comments: [
      {
        id: 0,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ]
  }
};

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
    default:
      return state;
  }
};

export default postsReducer;
