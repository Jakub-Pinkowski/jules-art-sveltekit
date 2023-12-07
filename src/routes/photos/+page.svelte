<script lang="ts">
	import type { PageData } from './$types';
	import { fade } from 'svelte/transition';

	export let data: PageData;

	// Modal
	let showModal: boolean = false;
	let dialog: HTMLDialogElement | null = null;
	let selectedPhotoSrc: string = '';

	$: if (dialog && showModal) dialog.showModal();

	const openModal = (src: string) => {
		selectedPhotoSrc = src;
		showModal = true;
	};

	const closeModal = () => {
		selectedPhotoSrc = '';
		showModal = false;
		dialog = null;
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
	{#if showModal}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<dialog
			transition:fade
			class="max-w-5xl mx-auto flex items-center justify-center"
			bind:this={dialog}
			on:close={() => closeModal()}
			on:click|self={() => closeModal()}
		>
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div on:click={() => closeModal()}>
				<div class="w-auto max-w-4xl overflow-hidden">
					<img class="object-contain max-h-[50rem]" src={selectedPhotoSrc} alt="Selected" />
				</div>
			</div>
		</dialog>
	{/if}
</div>
