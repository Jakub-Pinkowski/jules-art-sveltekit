<script lang="ts">
	export let showModal: boolean;
	export let onClose: () => void;

	let dialog: HTMLDialogElement;

	$: if (dialog && showModal) dialog.showModal();

	const closeModal = () => {
		onClose();
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	class="max-w-5xl mx-auto flex items-center justify-center"
	bind:this={dialog}
	on:close={() => onClose()}
	on:click|self={() => closeModal()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click={() => closeModal()}>
        <div class="w-auto max-w-4xl overflow-hidden">
			<slot />
		</div>
	</div>
</dialog>
