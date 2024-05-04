import { sessions } from '../sessions';
import { deletePost, getComments, deleteComment } from '../api';
import { ROLE } from '../constants';

export const delPost = async (userSession, id) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(userSession, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	await deletePost(id);

	const comments = await getComments(id);

	comments.forEach((comment) => {
		console.log(comment);
		deleteComment(comment.id);
	});

	return {
		error: null,
		res: true,
	};
};
