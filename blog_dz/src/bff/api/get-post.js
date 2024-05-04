import { transformPost } from '../transformers';

export const getPost = async (id) =>
	fetch(`http://localhost:3005/posts/${id}`)
		.then((res) => {
			if (res.ok) {
				return res;
			}

			if (res.status === 404) {
				return Promise.reject('статья не найдена');
			}

			return Promise.reject('ошибка');
		})
		.then((loadedPost) => loadedPost.json())
		.then((loadedPost) => loadedPost && transformPost(loadedPost));
