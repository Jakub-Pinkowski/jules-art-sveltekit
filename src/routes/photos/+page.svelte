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

<!-- Gallery -->
<div class="p-4">
	<h2 class=" my-8 pl-4 text-3xl font-medium md:my-4">Photos</h2>
	<div class=" flex h-auto w-full columns-3 flex-col md:block">
		{#each data.photos as { name, src }}
			<div class="p-4">
				<div
					class="w-full cursor-pointer overflow-hidden transition-transform duration-500
                    ease-out hover:scale-105 hover:opacity-90
                    "
				>
					<!-- svelte-ignore missing-declaration -->
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
					<img
						class="h-full w-full rounded-lg object-cover shadow-2xl"
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
			class="mx-auto flex max-w-5xl items-center justify-center rounded-lg outline-none"
			bind:this={dialog}
			on:close={() => closeModal()}
			on:click|self={() => closeModal()}
		>
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div on:click={() => closeModal()}>
				<div class="w-auto max-w-4xl overflow-hidden">
					<img class="max-h-[50rem] object-contain" src={selectedPhotoSrc} alt="Selected" />
				</div>
			</div>
		</dialog>
	{/if}
</div>
