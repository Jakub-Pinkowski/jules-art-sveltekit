import type { PageLoad } from './$types';

import berlin_romance_1 from '$lib/assets/movies/Berlin_Romance_1.mov';
import berlin_romance_2 from '$lib/assets/movies/Berlin_Romance_2.mov';
import jane from '$lib/assets/movies/Jane.mov';
import wizards_tales from '$lib/assets/movies/Wizards_Tales.mov';
import despair from '$lib/assets/movies/Despair.mov';

import berlin_romance_1_poster from '$lib/assets/movies/Berlin_Romance_1.jpg';
import berlin_romance_2_poster from '$lib/assets/movies/Berlin_Romance_2.jpg';
import jane_poster from '$lib/assets/movies/Jane.jpg';
import wizards_tales_poster from '$lib/assets/movies/Wizards_Tales.jpg';
import despair_poster from '$lib/assets/movies/Despair.jpg';

interface movieObject {
	id: number;
	name: string;
	src: string;
	poster: string;
}

export const load = (async () => {
	return {
		movies: [
			{
				id: 4,
				name: "Wizard's Tales",
				src: wizards_tales,
				poster: wizards_tales_poster
			},
			{
				id: 5,
				name: 'Despair',
				src: despair,
				poster: despair_poster
			},
			{
				id: 3,
				name: 'Jane',
				src: jane,
				poster: jane_poster
			},
			{
				id: 1,
				name: 'Berlin Romance 1',
				src: berlin_romance_1,
				poster: berlin_romance_1_poster
			},
			{
				id: 2,
				name: 'Berlin Romance 2',
				src: berlin_romance_2,
				poster: berlin_romance_2_poster
			}
		] as movieObject[]
	};
}) satisfies PageLoad;
