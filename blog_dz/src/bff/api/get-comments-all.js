import { transformComments } from '../transformers';

export const getCommentsAll = async () =>
	fetch(`http://localhost:3005/comments`)
		.then((loadedComments) => loadedComments.json())
		.then(
			(loadedComments) => loadedComments && loadedComments.map(transformComments),
		);
