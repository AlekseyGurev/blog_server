import { request } from '../bff/utilities';

export const removePostAsync = (id) => (dispatch) =>
  request(`/api/posts/${id}`, 'DELETE');
