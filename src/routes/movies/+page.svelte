<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.movies as { name, src, poster }}
	<div class="flex flex-col items-center justify-center w-full h-auto">
		<!-- svelte-ignore a11y-media-has-caption -->
		<video class="w-4/5 rounded-lg" controls {src} {poster} />
		<h3 class="text-2xl font-medium mt-4 mb-8">{name}</h3>
	</div>
{/each}
