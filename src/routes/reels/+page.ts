import type { PageLoad } from './$types';

import reel_1 from '$lib/assets/reels/reel_1.mov';
import reel_2 from '$lib/assets/reels/reel_2.mov';
import reel_3 from '$lib/assets/reels/reel_3.mov';
import reel_4 from '$lib/assets/reels/reel_4.mov';
import reel_5 from '$lib/assets/reels/reel_5.mov';
import reel_6 from '$lib/assets/reels/reel_6.mov';

import reel_1_poster from '$lib/assets/reels/reel_1_poster.jpg';
import reel_2_poster from '$lib/assets/reels/reel_2_poster.jpg';
import reel_3_poster from '$lib/assets/reels/reel_3_poster.jpg';
import reel_4_poster from '$lib/assets/reels/reel_4_poster.jpg';
import reel_5_poster from '$lib/assets/reels/reel_5_poster.jpg';
import reel_6_poster from '$lib/assets/reels/reel_6_poster.jpg';

interface reelObject {
	name: string;
	src: string;
	poster: string;
}

export const load = (async () => {
	return {
		reels: [
			{
				name: 'One evening in Paris',
				src: reel_1,
				poster: reel_1_poster
			},
			{
				name: 'Mon Paris',
				src: reel_4,
				poster: reel_4_poster
			},
			{
				name: 'Time for the sun',
				src: reel_5,
				poster: reel_5_poster
			},
			{
				name: 'Sunlight',
				src: reel_2,
				poster: reel_2_poster
			},
			{
				name: 'Your scent',
				src: reel_3,
				poster: reel_3_poster
			},
			{
				name: 'Sunny days',
				src: reel_6,
				poster: reel_6_poster
			}
		] as reelObject[]
	};
}) satisfies PageLoad;
