import type { PageServerLoad } from './$types';
import axios from 'axios';

const API_KEY_ID = import.meta.env.VITE_BACKBLAZE_API_KEY_ID;
const API_KEY = import.meta.env.VITE_BACKBLAZE_API_KEY;

async function authorizeBackblazeAccount() {
    try {
		const authResponse = await axios.get(
			'https://api.backblazeb2.com/b2api/v3/b2_authorize_account',
			{
				headers: {
					Authorization: `Basic ${btoa(`${API_KEY_ID}:${API_KEY}`)}`
				}
			}
		);

		console.log('authResponse', authResponse.data);

		const authToken: string = authResponse.data.authorizationToken;
		const apiUrl: string = authResponse.data.apiInfo.storageApi.apiUrl;

		return { authToken, apiUrl };
	} catch (error) {
		console.error('Error authorizing Backblaze B2 account:', error);
		return null;
	}
}

const authResult = await authorizeBackblazeAccount();
console.log('authResult', authResult);

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;