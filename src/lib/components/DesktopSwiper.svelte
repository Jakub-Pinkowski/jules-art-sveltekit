<script lang="ts">
	export let data;

	const { reels } = data;
</script>

<!-- TODO: Create infinite carousel -->
<div class="hidden h-screen md:block">
	<div class="carousel carousel-center h-4/5 space-x-4 rounded-box bg-neutral p-4">
		{#each reels as { name, src, poster }, i (name)}
			<div id={src} class="carousel-item relative px-8 pt-4">
				<!-- svelte-ignore a11y-media-has-caption -->
				<video class="h-full w-full rounded-box object-cover" {src} {poster} controls></video>
				<span
					class="absolute bottom-24 left-0 right-0 z-10 p-2 text-center text-2xl font-medium text-white"
				>
					{name}
				</span>
				{#if i === 2}
					<div class="absolute right-5 top-1/2 -translate-y-1/2 transform">
						<a
							href={`#${i <= reels.length - 4 ? reels[i + 3].src : reels[i - 1].src}`}
							class:btn-disabled={i >= reels.length - 3}
							class="btn btn-circle">❯</a
						>
					</div>
				{/if}
				{#if i === 3}
					<div class="absolute left-5 top-1/2 -translate-y-1/2 transform">
						<a
							href={`#${i >= 3 ? reels[i - 3].src : reels[i + 1].src}`}
							class:btn-disabled={i < 1}
							class="btn btn-circle">❮</a
						>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
