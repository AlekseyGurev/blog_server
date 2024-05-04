import { generateDate } from '../utilities';

export const createComment = (postId, content, userLogin) =>
	fetch(`http://localhost:3005/comments`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
		body: JSON.stringify({
			post_id: postId,
			author: userLogin,
			content: content,
			create_at: generateDate(),
		}),
	}).then((createdComment) => createdComment.json());
