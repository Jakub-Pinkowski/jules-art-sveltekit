<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<!-- TODO: Fix different margin/padding between this and photos -->
<div class=" p-4">
	<h2 class="my-8 pl-4 text-3xl font-medium md:my-4">Movies</h2>

	<div class="flex w-full flex-col items-center">
		{#each data.movies as { name, src }}
			<iframe
				class="mb-4 rounded-lg"
				width="1245"
				height="700"
				{src}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			></iframe>
			<h3 class="mb-12 text-2xl font-medium">{name}</h3>
		{/each}
	</div>
</div>
