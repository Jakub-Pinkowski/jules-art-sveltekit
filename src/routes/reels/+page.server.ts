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
const authToken = authResult?.authToken;
const apiUrl = authResult?.apiUrl;

async function downloadReel() {
	const reel = 'reel_5.mov';

	try {
		const downloadResponse = await axios.get(`${apiUrl}/file/jules-art/${reel}`, {
			headers: {
				Authorization: authToken
			},
            responseType: 'arraybuffer'
		});

		// Convert ArrayBuffer to base64 string
        const base64String = btoa(
            new Uint8Array(downloadResponse.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ''
            )
        );

        return `data:video/mp4;base64,${base64String}`;
	} catch (error) {
		console.error('Error downloading reels:', error);
	}
}

interface reelObject {
	name: string;
	src: string;
}

export const load = (async () => {
	const reel = await downloadReel();

	return {
		reels: [
			{
				name: 'reel_5.mov',
				src: reel
			}
		] as reelObject[]
	};
}) satisfies PageServerLoad;
