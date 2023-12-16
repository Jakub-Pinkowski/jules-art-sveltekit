<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
    
</script>

<!-- TODO: Fix different margin/padding between this and photos -->
<div class=" p-4">
	<h2 class="my-8 pl-4 text-3xl font-medium md:my-4">Movies</h2>

	<div class="flex w-full flex-col items-center">
		{#each data.movies as { name, src }}
			<div class="relative mb-4 h-auto w-full rounded-lg pb-[56.25%] md:hidden">
				<iframe
					class="absolute left-0 top-0 h-full w-full"
					{src}
					title={name}
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
			</div>
			<div class="relative mb-4 hidden w-4/5 rounded-lg pb-[45%] md:block">
				<iframe
					class="absolute left-0 top-0 h-full w-full"
					{src}
					title={name}
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
			</div>
			<h3 class="mb-12 text-2xl font-medium">{name}</h3>
		{/each}
	</div>
</div>
