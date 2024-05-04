import { transformComments } from '../transformers';

export const getComments = async (id) =>
	fetch(`http://localhost:3005/comments?post_id=${id}`)
		.then((loadedComments) => loadedComments.json())
		.then(
			(loadedComments) => loadedComments && loadedComments.map(transformComments),
		);
