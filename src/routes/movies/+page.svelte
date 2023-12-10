<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.movies as { name, src, poster }}
	<div class="flex h-auto w-full flex-col items-center justify-center">
		<!-- svelte-ignore a11y-media-has-caption -->
		<video class="w-4/5 rounded-lg" controls {src} {poster} />
		<h3 class="mb-8 mt-4 text-2xl font-medium">{name}</h3>
	</div>
{/each}
