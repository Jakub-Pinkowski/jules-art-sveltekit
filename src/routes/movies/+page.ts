import type { PageLoad } from './$types';

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
			}
		] as movieObject[]
	};
}) satisfies PageLoad;
