import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';
import type { Handle } from '@sveltejs/kit';
import * as api from '$lib/api';

export const handle: Handle = async ({ request, resolve }) => {
	const cookies = cookie.parse(request.headers.cookie || '');
	request.locals.userid = cookies.userid || uuid();
	// Current active user
	request.locals.entry = cookies.entry || undefined;
	//console.log('[Hooks.ts] Entry:', request.locals.entry);

	// FPL Metadata - mandatory for every page!
	request.locals.season = await api.get('api/bootstrap-static/', null, true);

	// TODO https://github.com/sveltejs/kit/issues/1046
	if (request.query.has('_method')) {
		request.method = request.query.get('_method').toUpperCase();
	}

	const response = await resolve(request);

	if (!cookies.userid) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		response.headers['set-cookie'] = `userid=${request.locals.userid}; Path=/; HttpOnly`;
	}

	return response;
};
// This is stuff that gets sended to the client.
// Should we try to shrink season? - it's a bit bloated
export function getSession(request) {
	return { 
		season: request.locals.season, 
		entry: request.locals.entry
	};
}
