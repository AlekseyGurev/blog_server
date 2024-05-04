import { request } from '../bff/utilities';
import { setPostData } from './set-post-data';

export const loadPostAsync = (id) => (dispatch) =>
  request(`/posts/${id}`).then((postData) => {
    if (postData.data) {
      dispatch(setPostData(postData.data));
    }
    return postData;
  });
