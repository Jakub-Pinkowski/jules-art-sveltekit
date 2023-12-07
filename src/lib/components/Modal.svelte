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
<dialog bind:this={dialog} on:close={() => onClose()} on:click|self={() => closeModal()}>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click={() => closeModal()}>
		<slot />
		<!-- svelte-ignore a11y-autofocus -->
		<button autofocus on:click={() => closeModal()}>close modal</button>
	</div>
</dialog>
