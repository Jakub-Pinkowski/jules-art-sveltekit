import type { PageServerLoad } from './$types';
import { S3Client, ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const AWS_ACCESS_KEY = import.meta.env.VITE_AWS_ACCESS_KEY;
const AWS_SECRET_ACCESS_KEY = import.meta.env.VITE_AWS_SECRET_ACCESS_KEY;

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
	s3SrcKey: string;
	s3PosterKey: string;
	src: string;
	poster: string;
}

const reelTitles = [
	'One evening in Paris',
	'Sunlight',
	'Your scent',
	'Mon Paris',
	'Time for the sun',
	'Sunny days'
];

export const load = (async () => {
	const listObjectsCommand = new ListObjectsV2Command(params);
	const data = await s3Client.send(listObjectsCommand);
	const objects = data.Contents;

	if (!objects) {
		throw new Error('Failed to list objects from S3 bucket');
	}

	const videoObjects = objects.filter((object) => object.Key?.endsWith('.mov'));

	const reels: Pick<reelObject, 'title' | 'src' | 'poster'>[] = await Promise.all(
		videoObjects.map(
			async (object, index): Promise<Pick<reelObject, 'title' | 'src' | 'poster'>> => {
				const srcKey = object.Key;
				const posterKey = srcKey?.replace('.mov', '.jpg');

				if (!srcKey || !posterKey) {
					throw new Error('Object does not have a key');
				}

				const commandSrc = new GetObjectCommand({ Bucket: params.Bucket, Key: srcKey });
				const commandPoster = new GetObjectCommand({ Bucket: params.Bucket, Key: posterKey });

				const src = await getSignedUrl(s3Client, commandSrc, { expiresIn: 3600 }); // 1 hour expiration
				const poster = await getSignedUrl(s3Client, commandPoster, { expiresIn: 3600 }); // 1 hour expiration

				return {
					title: reelTitles[index],
					src,
					poster
				};
			}
		)
	);

	return {
		reels
	};
}) satisfies PageServerLoad;
