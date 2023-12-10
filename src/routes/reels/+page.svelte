<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { reels } = data;
</script>

<div class="p-4">
	<h2 class="my-8 pl-4 text-3xl font-medium md:my-4">Reels</h2>
	<div class="carousel carousel-center w-full rounded-box">
		{#each reels as { name, src, poster }, i (name)}
			<div id={name} class="carousel-item relative w-full">
				<!-- svelte-ignore a11y-media-has-caption -->
				<video class="" {src} {poster}></video>
				<span
					class="absolute bottom-4 left-0 right-0 z-10 text-center text-2xl font-medium text-gray-50"
				>
					{name}
				</span>
			</div>
		{/each}
	</div>
	<div role="tablist" class="tabs tabs-bordered">
		{#each reels as { name }, i (name)}
			<a
				role="tab"
				href={`#${name}`}
                class="tab"
                >{i + 1}</a
			>
		{/each}
	</div>
</div>
