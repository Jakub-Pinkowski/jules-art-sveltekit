<script lang="ts">
	export let data;

	const { reels } = data;
</script>

<!-- TODO: Create infinite carousel -->
<div class="hidden h-screen md:block">
	<div class="carousel carousel-center h-4/5 space-x-4 rounded-box bg-neutral p-4">
		{#each reels as { title, src, poster }, i (title)}
			<div id={src} class="carousel-item relative px-8 pt-4">
				<!-- svelte-ignore a11y-media-has-caption -->
				<video class="h-full w-full rounded-box object-cover" {src} {poster} controls></video>
				<span
					class="absolute bottom-24 left-0 right-0 z-10 p-2 text-center text-2xl font-medium text-white"
				>
					{title}
				</span>
			</div>
		{/each}
	</div>
	<div class="mt-4 flex w-full justify-center gap-4 p-4">
		{#each reels as { title, src }, i (title)}
			<!-- svelte-ignore a11y-missing-content -->
			<a href={`#${src}`} class="btn btn-primary px-8">{i + 1}</a>
		{/each}
	</div>
</div>
