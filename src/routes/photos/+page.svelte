<script lang="ts">
	import type { PageData } from './$types';
	import Modal from '$lib/components/Modal.svelte';

	export let data: PageData;

	let showModal = false;
</script>

<div class="mt-8">
	<!-- Gallery -->

	<div class="columns-3 gap-4 my-8 w-full h-auto">
		{#each data.photos as { name, src }}
			<div class="m-4">
				<div
					class="w-full overflow-hidden cursor-pointer transition-transform hover:opacity-90 ease-out duration-500"
				>
					<img class="object-cover w-full h-full shadow-2xl rounded-lg" {src} alt="artictic" />
				</div>
			</div>
		{/each}
	</div>

	<!-- Modal -->
	<button on:click={() => (showModal = true)}> show modal </button>

	<Modal bind:showModal>
		<h2 slot="header">
			modal
			<small><em>adjective</em> mod·al \ˈmō-dəl\</small>
		</h2>

		<p>Main slot here</p>
	</Modal>
</div>
