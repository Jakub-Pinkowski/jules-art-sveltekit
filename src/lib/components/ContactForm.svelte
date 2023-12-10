<script lang="ts">
	import axios from 'axios';
	import { fade } from 'svelte/transition';

	let name: string;
	let email: string;
	let message: string;
	let toastSuccess: boolean = false;
	let toastError: boolean = false;

	const handleSubmit = async (event: Event) => {
		event.preventDefault();
		const url = 'https://formspree.io/f/xgejepyk';

		const data = {
			name,
			email,
			message
		};

		try {
			const response = await axios.post(url, data);

			if (response.status === 200) {
				toastSuccess = true;
				toastError = false;
				resetForm();
			} else {
				toastSuccess = false;
				toastError = true;
				console.error('Unexpected response status:', response.status);
			}
		} catch (error) {
			toastSuccess = false;
			toastError = true;
			console.error('Unexpected error:', error);
		}

		setTimeout(() => {
			toastSuccess = false;
			toastError = false;
		}, 2000);

		resetForm();
	};

	const resetForm = () => {
		name = '';
		email = '';
		message = '';
	};
</script>

<form on:submit={handleSubmit} class="mb-8 flex flex-col">
	<input
		bind:value={name}
		class="input input-bordered my-4 w-full max-w-md"
		type="text"
		name="name"
		id="name"
		placeholder="Name"
		required
	/>
	<input
		bind:value={email}
		class="input input-bordered my-4 w-full max-w-md"
		type="text"
		name="email"
		id="email"
		placeholder="E-mail"
		required
	/>
	<textarea
		bind:value={message}
		class="textarea textarea-bordered my-4 w-full max-w-md"
		cols="30"
		rows="5"
		name="message"
		id="message"
		placeholder="Message"
		required
	></textarea>
	<button class="btn btn-outline my-4 w-48" type="submit"> Submit </button>
</form>

{#if toastSuccess}
	<div class="toast toast-center toast-top" transition:fade>
		<div class="alert alert-success">
			<span>Message sent successfully.</span>
		</div>
	</div>
{/if}

{#if toastError}
	<div class="toast toast-center toast-top" transition:fade>
		<div class="alert alert-error">
			<span>Error sending message</span>
		</div>
	</div>
{/if}
