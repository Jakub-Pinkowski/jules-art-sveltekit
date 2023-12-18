import type { LayoutLoad } from './$types';

export const ssr = false;
export const prerender = false;

export const load = (async () => {
    return {};
}) satisfies LayoutLoad;