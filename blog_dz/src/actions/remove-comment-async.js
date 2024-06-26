import { request } from '../bff/utilities';
import { removeComment } from './remove-comment';

export const removeCommentAsync = (id, postId) => (dispatch) =>
  request(`/api/posts/${postId}/comments/${id}`, 'DELETE').then(() => {
    dispatch(removeComment(id));
  });
