import type { PageLoad } from './$types';

import storyboard from '$lib/assets/resources/storyboard.pdf';
import storyboard_poster from '$lib/assets/resources/storyboard.jpg';

interface resourceObject {
	name: string;
	description: string;
	src: string;
	poster: string;
}

export const load = (async () => {
	return {
		resources: [
			{
				name: 'Storyboard',
				description:
					'A storyboard is a graphic organizer that consists of illustrations or images displayed in sequence for the purpose of pre-visualizing a motion picture, animation, motion graphic or interactive media sequence.',
				src: storyboard,
				poster: storyboard_poster
			},
			{
				name: 'Test',
				description: 'Description for a test resource',
				src: storyboard,
				poster: storyboard_poster
			}
		] as resourceObject[]
	};
}) satisfies PageLoad;
