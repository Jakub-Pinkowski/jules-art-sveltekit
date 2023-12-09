<script lang="ts">
	import { fly, scale, fade } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';

	export let open: boolean;

	const links = [
		{ label: 'Home', path: '/' },
		{ label: 'Photos', path: '/photos' },
		{ label: 'Movies', path: '/movies' },
		{ label: 'Reels', path: '/reels' },
		{ label: 'Resources', path: '/resources' }
	];

	const closeMenu = () => {
		open = false;
	};
</script>

{#if open}
	<div class="text-center text-semibold text-2xl p-4 pt-0 tracking-wider">
		{#each links as { label, path }, i}
			<a
				href={path}
				class="block cursor-pointer mx-auto my-4 hover:underline"
				on:click={closeMenu}
				transition:fade
			>
				{label}
			</a>
		{/each}
	</div>

	<div
		class=" border-solid border-primary border-t-2 h-0 mb-8"
		in:scale={{ duration: 400, easing: quadOut, opacity: 1 }}
	/>
{/if}
