export const transformComments = (dbComments) => ({
	id: dbComments.id,
	content: dbComments.content,
	publishedAt: dbComments.create_at,
	author: dbComments.author,
	postId: dbComments.post_id,
});
