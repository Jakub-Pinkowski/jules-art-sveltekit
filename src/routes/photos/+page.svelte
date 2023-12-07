<script lang="ts">
	import type { PageData } from './$types';
	import Modal from '$lib/components/Modal.svelte';

	export let data: PageData;

	// Modal
	let showModal = false;

	let selectedPhotoSrc: string = '';

	const openModal = (src: string) => {
		selectedPhotoSrc = src;
		showModal = true;
	};

	const closeModal = () => {
		selectedPhotoSrc = '';
		showModal = false;
	};
</script>

<div class="mt-8">
	<!-- Gallery -->

	<div class="columns-3 gap-4 my-8 w-full h-auto">
		{#each data.photos as { name, src }}
			<div class="m-4">
				<div
					class="w-full overflow-hidden cursor-pointer transition-transform hover:opacity-90 ease-out duration-500"
				>
					<!-- svelte-ignore missing-declaration -->
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
					<img
						class="object-cover w-full h-full shadow-2xl rounded-lg"
						{src}
						alt="artictic"
						on:click={() => openModal(src)}
					/>
				</div>
			</div>
		{/each}
	</div>

	<!-- Modal -->
	<button on:click={() => (showModal = true)}> show modal </button>

	<!-- Modal -->
	{#if showModal}
		<Modal bind:showModal onClose={closeModal}>
			{#if selectedPhotoSrc}
				<img class="object-contain" src={selectedPhotoSrc} alt="Selected" />
			{/if}
		</Modal>
	{/if}
</div>
