import type { PageLoad } from './$types';

interface movieObject {
    id: number;
	name: string;
	year: number;
	rating: number;
}

export const load = (async () => {
	return {
		movies: [
			{
                id: 1,
				name: 'The Shawshank Redemption',
				year: 1994,
				rating: 9.3
			},
			{
                id: 2,
				name: 'The Godfather',
				year: 1972,
				rating: 9.2
			}
		] as movieObject[]
	};
}) satisfies PageLoad;
