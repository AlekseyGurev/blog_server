import { request } from '../bff/utilities';

export const removePostAsync = (id) => (dispatch) =>
  request(`/posts/${id}`, 'DELETE');
