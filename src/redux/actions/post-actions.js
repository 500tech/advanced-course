import * as AT from '../action-types';

export const addPost = (post) => ({
  type: AT.ADD_POST,
  payload: post
});

export const addComment = (postId, comment) => ({
  type: AT.ADD_COMMENT,
  payload: {
    comment,
    postId
  }
});
