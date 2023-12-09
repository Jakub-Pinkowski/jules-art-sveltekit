import type { PageLoad } from './$types';

import portfolio_photos from '$lib/assets/images/portfolio_photos.jpg';
import portfolio_movies from '$lib/assets/images/portfolio_movies.jpg';
import portfolio_reels from '$lib/assets/images/portfolio_reels.jpg';
import portfolio_resources from '$lib/assets/images/portfolio_resources.jpg';

interface portfolioObject {
	title: string;
	description: string;
	photo: string;
    src: string;
}

export const load = (async () => {
	return {
		portfolio: [
			{
				title: 'Photos',
				description: 'Explore a collection of my photos',
                photo: portfolio_photos,
                src: '/photos'
			},
			{
				title: 'Movies',
				description: 'Explore a collection of my movies',
                photo: portfolio_movies,
                src: '/movies'
			},
            {
                title: 'Reels',
                description: 'Explore a collection of my reels',
                photo: portfolio_reels,
                src: '/reels'
            },
            // {
            //     title: 'Resources',
            //     description: 'Explore a collection of downloadable resources',
            //     photo: portfolio_resources,
            //     src: '/resources'
            // }
		] as portfolioObject[]
	};
}) satisfies PageLoad;
