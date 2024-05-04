import { request } from '../bff/utilities';
import { ACTION_TYPE } from './action-type';

export const logOut = () => {
  request('/logout', 'POST');
  return {
    type: ACTION_TYPE.LOGOUT,
  };
};
