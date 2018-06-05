import { createSelector } from 'reselect';
import { values } from 'lodash/fp';

// not memoized because not changing data
export const feedsSelector = state => values(state.posts);

const getFeeds = state => state.posts;

// memoized
export const postSelectorFactory = createSelector(
  [getFeeds, (state, id) => id],
  (feeds, id) => feeds[id]);
