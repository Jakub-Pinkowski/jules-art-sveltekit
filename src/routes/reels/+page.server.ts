import type { PageServerLoad } from './$types';

interface reelObject {
	name: string;
	src: string;
	poster: string;
}

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;
