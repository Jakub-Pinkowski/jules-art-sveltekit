<script lang="ts">
	import { fly, scale } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';

	export let open: any;
</script>

{#if open}
	<div class="text-center text-semibold text-2xl p-4 pt-0">
		{#each ['Home', 'Example', 'About', 'Contact'] as link, i}
			<p
				class="cursor-pointer mx-auto my-4 hover:underline"
				transition:fly={{ y: -15, delay: 50 * i }}
			>
				{link}
			</p>
		{/each}
	</div>

	<div
		class=" border-solid border-[primary] border-t h-0"
		transition:scale={{ duration: 500, easing: quadOut, opacity: 1 }}
	/>
{/if}

<style>
	:global(html) {
		background: #1d1d2f;
	}
</style>
