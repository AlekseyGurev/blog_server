export const deletePost = (id) =>
	fetch(`http://localhost:3005/posts/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
	});
