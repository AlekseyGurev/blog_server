import { date } from 'yup';
import { request } from '../bff/utilities';
import { setPostData } from './set-post-data';

export const savePostAsync = (id, data) => (dispatch) => {
  const saveRequest = id
    ? request(`/api/posts/${id}`, 'PATCH', { data })
    : request('/api/posts', 'POST', { data });
  return saveRequest.then((updatePost) => {
    dispatch(setPostData(updatePost));
    return updatePost;
  });
};
