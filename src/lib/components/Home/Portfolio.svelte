<script lang="ts">
	export let data: any;
</script>

<div class="p-4">
	<h2 class="my-8 text-3xl">Portfolio Highlights</h2>
	<div class="flex flex-col items-center text-center md:flex-row">
		{#each data.portfolio as { title, description, photo, src }}
			<div class="w-full md:mx-4 md:w-1/3">
				<!-- TODO: Add animation when scrolling -->
				<a href={src}>
					<h3 class="mb-2 mt-8 text-2xl font-light">
						{title}
					</h3>
				</a>
				<span class="text-md my-4 font-light">
					{description}
				</span>
				<a href={src}>
					<img
						class="my-4 h-full w-full rounded-lg object-cover shadow-2xl transition-transform duration-300 ease-in-out md:hover:scale-105 md:hover:opacity-90"
						src={photo}
						alt=""
					/>
				</a>
			</div>
		{/each}
	</div>
</div>
