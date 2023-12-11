<script lang="ts">
	export let data;

	const { reels } = data;
</script>

<div class="hidden h-screen md:block">
	<div class="carousel carousel-center h-4/5 space-x-4 rounded-box bg-neutral p-4">
		{#each reels as { name, src, poster }, i (name)}
			<div id={name} class="carousel-item relative px-8">
				<!-- svelte-ignore a11y-media-has-caption -->
				<video class="h-full w-full rounded-box object-cover" {src} {poster} controls></video>
				<span
					class="absolute bottom-24 left-0 right-0 z-10 p-2 text-center text-2xl font-medium text-white"
				>
					{name}
				</span>
			</div>
		{/each}
	</div>
</div>
