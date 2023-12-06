import type { PageLoad } from './$types';

import photo1 from '$lib/assets/photos/1.jpg';
import photo2 from '$lib/assets/photos/2.jpg';
import photo3 from '$lib/assets/photos/3.jpg';
import photo4 from '$lib/assets/photos/4.jpg';
import photo5 from '$lib/assets/photos/5.jpg';
import photo6 from '$lib/assets/photos/6.jpg';
import photo7 from '$lib/assets/photos/7.jpg';

interface photoObject {
	name: string;
	src: string;
}

export const load = (async () => {
	return {
		photos: [
			{
				name: 'photo1',
				src: photo1
			},
			{
				name: 'photo2',
				src: photo2
			},
			{
				name: 'photo3',
				src: photo3
			},
			{
				name: 'photo4',
				src: photo4
			},
			{
				name: 'photo5',
				src: photo5
			},
			{
				name: 'photo6',
				src: photo6
			},
			{
				name: 'photo7',
				src: photo7
			}
		] as photoObject[]
	};
}) satisfies PageLoad;
