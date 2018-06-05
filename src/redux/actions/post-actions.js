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

export const fetchPosts = () => ({
  type: AT.API_REQUEST,
  payload: {
    base: AT.FETCH_POSTS,
    url: 'https://private-fe525e-crazypixel.apiary-mock.com/posts',
    method: 'GET'
  }
});
