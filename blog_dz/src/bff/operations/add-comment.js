import { createComment, getPost, getComments } from '../api';

export const addComment = async (postId, content, userLogin) => {
	await createComment(postId, content, userLogin);

	const post = await getPost(postId);

	const comments = await getComments(postId);

	return {
		error: null,
		res: { ...post, comments },
	};
};
