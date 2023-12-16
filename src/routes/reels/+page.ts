import type { PageLoad } from './$types';
import axios from 'axios';

const API_KEY_ID = '00556b02a70d6a70000000001';
const API_KEY = 'K005kMidECFkhYixeAAoeLigvFeJi2s';
const BUCKET_NAME = 'jules-art';
const FILE_NAME = 'reel_6.mov';

console.log('API_KEY_ID', API_KEY_ID);

async function getReelFromBackblaze() {
	try {
		// First, authenticate with the Backblaze B2 API to get an authorization token
		console.log('this part works');

		const authResponse = await axios.get(
			'https://api.backblazeb2.com/b2api/v2/b2_authorize_account',
			{
				headers: {
					Authorization: `Basic ${btoa(`${API_KEY_ID}:${API_KEY}`)}`
				}
			}
		);

		console.log('this part does not work');

		console.log('authResponse', authResponse);

		const authToken = authResponse.data.authorizationToken;
		const apiUrl = authResponse.data.apiUrl;

		// Then, use the authorization token to download the file
		const fileResponse = await axios.get(
			`${apiUrl}/b2api/v2/b2_download_file_by_name?bucketName=${BUCKET_NAME}&fileName=${FILE_NAME}`,
			{
				headers: {
					Authorization: authToken
				},
				responseType: 'blob' // Important for video files
			}
		);

		const blob = new Blob([fileResponse.data], { type: 'video/mov' });
		const url = URL.createObjectURL(blob);

		return url;
	} catch (error) {
		console.error('Error downloading file from Backblaze B2:', error);
		return null;
	}
}

// import reel_1 from '$lib/assets/reels/reel_1.mov';
// import reel_2 from '$lib/assets/reels/reel_2.mov';
// import reel_3 from '$lib/assets/reels/reel_3.mov';
// import reel_4 from '$lib/assets/reels/reel_4.mov';
// import reel_5 from '$lib/assets/reels/reel_5.mov';

// import reel_1_poster from '$lib/assets/reels/reel_1_poster.jpg';
// import reel_2_poster from '$lib/assets/reels/reel_2_poster.jpg';
// import reel_3_poster from '$lib/assets/reels/reel_3_poster.jpg';
// import reel_4_poster from '$lib/assets/reels/reel_4_poster.jpg';
// import reel_5_poster from '$lib/assets/reels/reel_5_poster.jpg';
import reel_6_poster from '$lib/assets/reels/reel_6_poster.jpg';

interface reelObject {
	name: string;
	src: string;
	poster: string;
}

export const load = (async () => {
	const reel_6 = await getReelFromBackblaze();

	return {
		reels: [
			// {
			// 	name: 'One evening in Paris',
			// 	src: reel_1,
			// 	poster: reel_1_poster
			// },
			// {
			// 	name: 'Sunlight',
			// 	src: reel_2,
			// 	poster: reel_2_poster
			// },
			// {
			// 	name: 'Your scent',
			// 	src: reel_3,
			// 	poster: reel_3_poster
			// },
			// {
			// 	name: 'Mon Paris',
			// 	src: reel_4,
			// 	poster: reel_4_poster
			// },
			// {
			// 	name: 'Time for the sun',
			// 	src: reel_5,
			// 	poster: reel_5_poster
			// },
			{
				name: 'Sunny days',
				src: reel_6,
				poster: reel_6_poster
			}
		] as reelObject[]
	};
}) satisfies PageLoad;
