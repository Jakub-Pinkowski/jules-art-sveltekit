<script lang="ts">
	import { fly, scale } from 'svelte/transition';
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

<!-- TODO: Make it more coincice -->
{#if open}
	<div class="text-center text-semibold text-2xl p-4 pt-0 mt-12 tracking-wider">
		<a
			href={links[0].path}
			class="block cursor-pointer mx-auto my-4 hover:underline"
			on:click={closeMenu}
			in:fly={{ y: -15, delay: 50 }}
		>
			{links[0].label}
		</a>

		<a
			href={links[1].path}
			class="block cursor-pointer mx-auto my-4 hover:underline"
			on:click={closeMenu}
			in:fly={{ y: -15, delay: 100 }}
		>
			{links[1].label}
		</a>

		<a
			href={links[2].path}
			class="block cursor-pointer mx-auto my-4 hover:underline"
			on:click={closeMenu}
			in:fly={{ y: -15, delay: 150 }}
		>
			{links[2].label}
		</a>

		<a
			href={links[3].path}
			class="block cursor-pointer mx-auto my-4 hover:underline"
			on:click={closeMenu}
			in:fly={{ y: -15, delay: 200 }}
		>
			{links[3].label}
		</a>

		<a
			href={links[4].path}
			class="block cursor-pointer mx-auto my-4 hover:underline"
			on:click={closeMenu}
			in:fly={{ y: -15, delay: 250 }}
		>
			{links[4].label}
		</a>
	</div>

	<div
		class="border-solid border-primary border-t-2 h-0 mb-8"
		in:scale={{ duration: 750, easing: quadOut, opacity: 1 }}
	/>
{/if}
