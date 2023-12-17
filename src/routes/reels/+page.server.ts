import type { PageServerLoad } from './$types';
import { Readable } from 'stream';
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
	title: string;
	src: string;
	poster: string;
}

let reels = [
	{
		name: 'reel_1',
		title: 'One evening in Paris',
		src: '',
		poster: ''
	},
	{
		name: 'reel_2',
		title: 'Sunlight',
		src: '',
		poster: ''
	},
	{
		name: 'reel_3',
		title: 'Your scent',
		src: '',
		poster: ''
	},
	{
		name: 'reel_4',
		title: 'Mon Paris',
		src: '',
		poster: ''
	},
	{
		name: 'reel_5',
		title: 'Time for the sun',
		src: '',
		poster: ''
	},
	{
		name: 'reel_6',
		title: 'Sunny days',
		src: '',
		poster: ''
	}
] as reelObject[];

export const load = (async () => {
	const listObjectsCommand = new ListObjectsV2Command(params);

	const { Contents: objects } = await s3Client.send(listObjectsCommand);
	console.log('objects', objects);

    

	return {
		reels
	};
}) satisfies PageServerLoad;
