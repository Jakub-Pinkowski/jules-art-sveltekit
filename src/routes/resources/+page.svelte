<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mt-8 w-3/5 fle flex-col">
	{#each data.resources as { name, description, src, poster }}
		<div class="card card-compact w-full bg-base-100 shadow-xl my-8">
			<figure>
				<img src={poster} alt={name} />
			</figure>
			<div class="card-body text-justify">
				<h2 class="card-title">{name}</h2>
				<p>
					{description}
				</p>
				<div class="card-actions justify-end">
					<a href={src} download>
						<button class="btn btn-primary">Download</button>
					</a>
				</div>
			</div>
		</div>
	{/each}

	<!-- Toast -->
</div>
