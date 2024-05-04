export const transformSession = (dbSessions) => ({
	id: dbSessions.id,
	user: dbSessions.user,
	hash: dbSessions.hash,
});
