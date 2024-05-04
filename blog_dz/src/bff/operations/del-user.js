import { sessions } from '../sessions';
import { deleteUser } from '../api';
import { ROLE } from '../constants';

export const delUser = async (userSession, userId) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(userSession, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	deleteUser(userId);

	return {
		error: null,
		res: true,
	};
};
