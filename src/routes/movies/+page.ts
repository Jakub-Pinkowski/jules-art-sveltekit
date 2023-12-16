import type { PageLoad } from './$types';

// import berlin_romance_1 from '$lib/assets/movies/Berlin_Romance_1.mov';
// import berlin_romance_2 from '$lib/assets/movies/Berlin_Romance_2.mov';

// import berlin_romance_1_poster from '$lib/assets/movies/Berlin_Romance_1.jpg';
// import berlin_romance_2_poster from '$lib/assets/movies/Berlin_Romance_2.jpg';

interface movieObject {
	id: number;
	name: string;
	src: string;
}

export const load = (async () => {
	return {
		movies: [
			{
				id: 4,
				name: "Wizard's Tales",
				src: 'https://www.youtube.com/embed/-0A5m52cY2Q?si=BJnGgwiXj-VNe3zq'
			},
			{
				id: 5,
				name: 'Despair',
				src: 'https://www.youtube.com/embed/nye-nww0tpU?si=PZn3XbKM11vIAJJx'
			},
			{
				id: 3,
				name: 'Jane',
                src: 'https://www.youtube.com/embed/5aVlBcXR-l8?si=hxB2kRrPNNnl0a-2'
			},
			{
				id: 1,
				name: 'Berlin Romance 1',
				// src: berlin_romance_1,
				// poster: berlin_romance_1_poster
			},
			{
				id: 2,
				name: 'Berlin Romance 2',
				// src: berlin_romance_2,
				// poster: berlin_romance_2_poster
			}
		] as movieObject[]
	};
}) satisfies PageLoad;
