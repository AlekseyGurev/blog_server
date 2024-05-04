import { request } from '../bff/utilities';
import { setPostsData } from './set-posts-data';

export const loadPostsAsync = (page, limit, searchPhrase) => (dispatch) =>
  request(`/posts?search=${searchPhrase}&page=${page}&limit=${limit}`).then(
    (postsData) => {
      dispatch(setPostsData(postsData));
    }
  );
