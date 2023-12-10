<script lang="ts">
	import type { PageData } from './$types';
	import { fade } from 'svelte/transition';

	export let data: PageData;

	let toastVisible = false;

	const downloadFile = () => {
		toastVisible = true;
		setTimeout(() => {
			toastVisible = false;
		}, 2000);
	};
</script>

<div class="mt-8 flex flex-col md:flex-row">
	{#each data.resources as { name, description, src, poster }}
		<div class="card card-compact m-8 w-full max-w-lg bg-base-100 shadow-xl">
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
						<button class="btn btn-primary" on:click={downloadFile}>Download</button>
					</a>
				</div>
			</div>
		</div>
	{/each}

	<!-- Toast -->
	{#if toastVisible}
		<div class="toast toast-center toast-top top-20" transition:fade>
			<div class="alert alert-success">
				<span>File downloaded successfully</span>
			</div>
		</div>
	{/if}
</div>
