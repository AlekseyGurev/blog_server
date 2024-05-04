import { sessions } from '../sessions';
import { deleteComment, getPost, getComments } from '../api';
import { ROLE } from '../constants';

export const delComment = async (userSession, commentId, postId) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(userSession, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	deleteComment(commentId);

	const post = await getPost(postId);

	const comments = await getComments(postId);

	return {
		error: null,
		res: { ...post, comments },
	};
};
