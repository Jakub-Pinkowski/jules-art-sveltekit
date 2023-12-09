<script lang="ts">
	import { fly, scale } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';

	export let open: boolean;

	const closeMenu = () => {
		open = false;
	};
</script>

{#if open}
	<div class="text-center text-semibold text-2xl p-4 pt-0 tracking-wider">
		{#each ['Home', 'Photos', 'Movies', 'Reels', 'Resources'] as link, i}
			<a
				href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
				class=" block cursor-pointer mx-auto my-4 hover:underline"
				on:click={closeMenu}
				transition:fly={{ y: -15, delay: 50 * i }}
			>
				{link}
			</a>
		{/each}
	</div>

	<div
		class=" border-solid border-primary border-t-2 h-0 mb-8"
		transition:scale={{ duration: 400, easing: quadOut, opacity: 1 }}
	/>
{/if}
