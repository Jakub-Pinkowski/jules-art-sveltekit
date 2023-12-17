import type { PageServerLoad } from './$types';
import AWS from 'aws-sdk';

const AWS_ACCESS_KEY = import.meta.env.VITE_AWS_ACCESS_KEY
const AWS_SECRET_ACCESS_KEY = import.meta.env.VITE_AWS_SECRET_ACCESS_KEY

console.log('AWS_ACCESS_KEY', AWS_ACCESS_KEY);
console.log('AWS_SECRET_ACCESS_KEY', AWS_SECRET_ACCESS_KEY);

const region = 'eu-central-1';
const bucketName = 'reels';
const s3 = new AWS.S3();

interface reelObject {
	name: string;
	src: string;
	poster: string;
}

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;
