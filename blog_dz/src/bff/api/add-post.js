import { transformPost } from '../transformers';
import { generateDate } from '../utilities';

export const addPost = (data) =>
	fetch(`http://localhost:3005/posts`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
		body: JSON.stringify({
			image_url: data.imageUrl,
			title: data.title,
			content: data.content,
			published_at: generateDate(),
		}),
	})
		.then((loadedPost) => loadedPost.json())
		.then((loadedPost) => loadedPost && transformPost(loadedPost));
