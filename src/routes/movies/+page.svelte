<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<!-- TODO: Fix different margin/padding between this and photos -->
<div class="p-4">
	<h2 class=" my-8 pl-4 text-3xl font-medium md:my-4">Movies</h2>
	{#each data.movies as { name, src, poster }}
		<div class="flex h-auto w-full flex-col items-center justify-center p-4">
			<!-- svelte-ignore a11y-media-has-caption -->
			<video class=" rounded-lg" controls {src} {poster} />
			<h3 class="mb-8 mt-4 text-2xl font-medium">{name}</h3>
		</div>
	{/each}
</div>
