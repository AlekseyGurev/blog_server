import { getPost, getComments } from '../api';

export const fetchPost = async (id) => {
	let post;
	let error;

	try {
		post = await getPost(id);
	} catch (postError) {
		error = postError;
	}

	if (error) {
		return {
			error,
			res: null,
		};
	}

	const comments = await getComments(id);

	return {
		error: null,
		res: { ...post, comments },
	};
};
