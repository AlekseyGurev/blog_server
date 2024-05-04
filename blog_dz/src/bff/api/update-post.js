import { transformPost } from '../transformers';

export const updatePost = (id, data) =>
	fetch(`http://localhost:3005/posts/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
		body: JSON.stringify({
			image_url: data.imageUrl,
			title: data.title,
			content: data.content,
		}),
	})
		.then((loadedPost) => loadedPost.json())
		.then((loadedPost) => loadedPost && transformPost(loadedPost));
