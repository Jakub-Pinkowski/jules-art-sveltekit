import type { PageServerLoad } from './$types';
import { S3Client, ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3';

const AWS_ACCESS_KEY = import.meta.env.VITE_AWS_ACCESS_KEY;
const AWS_SECRET_ACCESS_KEY = import.meta.env.VITE_AWS_SECRET_ACCESS_KEY;

console.log('AWS_ACCESS_KEY', AWS_ACCESS_KEY);
console.log('AWS_SECRET_ACCESS_KEY', AWS_SECRET_ACCESS_KEY);

const region = 'eu-central-1';
const params = {
	Bucket: 'jules-art',
	Prefix: 'reels/'
};

const s3Client = new S3Client({
	region,
	credentials: {
		accessKeyId: AWS_ACCESS_KEY,
		secretAccessKey: AWS_SECRET_ACCESS_KEY
	}
});

interface reelObject {
	name: string;
	src: string;
	poster: string;
}

const reelNames: string[] = [
	'One evening in Paris',
	'Sunlight',
	'Your scent',
	'Mon Paris',
	'Time for the sun',
	'Sunny days'
];

export const load = (async () => {
	const listObjectsCommand = new ListObjectsV2Command(params);

	const { Contents: objects } = await s3Client.send(listObjectsCommand);
	console.log('objects', objects);

	const reels: reelObject[] = [];

	return {};
}) satisfies PageServerLoad;
