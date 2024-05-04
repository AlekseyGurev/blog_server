import { sessions } from '../sessions';
import { addPost, updatePost } from '../api';
import { ROLE } from '../constants';

export const editPost = async (userSession, id, data) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(userSession, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	const post = id === '' ? await addPost(data) : await updatePost(id, data);

	return {
		error: null,
		res: post,
	};
};
