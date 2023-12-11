<script lang="ts">
	export let data;

	const { reels } = data;
</script>

<div class="hidden h-screen md:block">
	<div class="carousel carousel-center h-4/5 space-x-4 rounded-box bg-neutral p-4">
		{#each reels as { name, src, poster }, i (name)}
			<div class="carousel-item">
				<!-- svelte-ignore a11y-media-has-caption -->
				<video class="h-full w-full rounded-box object-cover" {src} {poster} controls></video>
			</div>
		{/each}
	</div>
</div>
