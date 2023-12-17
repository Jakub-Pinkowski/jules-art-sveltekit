import type { PageServerLoad } from './$types';

const AWS_ACCESS_KEY = import.meta.env.VITE_AWS_ACCESS_KEY;
const AWS_SECRET_ACCESS_KEY = import.meta.env.VITE_AWS_SECRET_ACCESS_KEY;
const region = 'eu-central-1';

const bucketName = 'reels';

const params = {
	Bucket: bucketName,
	Prefix: 'reels/'
};


interface reelObject {
	name: string;
	src: string;
	poster: string;
}

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;
