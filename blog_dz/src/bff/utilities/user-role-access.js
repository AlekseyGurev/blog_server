import { ROLE } from '../constants';

export const userRoleAccess = (userRole) => {
  return userRole === ROLE.GUEST || userRole === ROLE.USER ? false : true;
};
