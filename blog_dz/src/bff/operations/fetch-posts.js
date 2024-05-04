import { getPosts, getCommentsAll } from '../api';

export const fetchPosts = async (page, limit, searchPhrase) => {
	const posts = await getPosts(page, limit, searchPhrase);
	const comments = await getCommentsAll();

	const editPosts = posts.data.map((post) => {
		const commentsId = comments.filter((comment) => {
			return comment.postId === post.id;
		});
		const commentsQuantity = commentsId.length;

		return { ...post, commentsQuantity };
	});

	return {
		error: null,
		res: { data: editPosts, lastPagination: posts.last },
	};
};
