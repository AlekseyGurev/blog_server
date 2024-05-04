export const deleteSession = async (id) => {
	fetch(`http://localhost:3005/sessions/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
	});
};
