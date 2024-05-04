import { transformSession } from '../transformers';

export const getSession = (hash) =>
	fetch(`http://localhost:3005/sessions?hash=${hash}`)
		.then((loadSession) => loadSession.json())
		.then(([loadSession]) => loadSession && transformSession(loadSession));
