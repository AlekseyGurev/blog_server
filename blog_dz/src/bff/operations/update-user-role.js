import { sessions } from '../sessions';
import { setUserRole } from '../api';
import { ROLE } from '../constants';

export const updateUserRole = async (userSession, userId, newUserRole) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(userSession, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	setUserRole(userId, newUserRole);

	return {
		error: null,
		res: true,
	};
};
