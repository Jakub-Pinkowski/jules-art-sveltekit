<script lang="ts">
	import axios from 'axios';
	import { fade } from 'svelte/transition';

	let name: string;
	let email: string;
	let message: string;
	let toastSuccess: boolean = false;
	let toastError: boolean = false;
	let toastMessage: string;

	const handleSubmit = async (event: Event) => {
		event.preventDefault();
		const url = 'https://formspree.io/f/xgejepyk';

		const data = {
			name,
			email,
			message
		};

		if (!name || !email || !message || !isValidEmail(email)) {
			toastMessage = 'Please fill out all fields correctly.';
			toastError = true;

			setTimeout(() => {
				toastSuccess = false;
				toastError = false;
			}, 2000);

			return;
		}

		try {
			const response = await axios.post(url, data);

			if (response.status === 200) {
				toastMessage = 'Message sent successfully!';
				toastSuccess = true;
				resetForm();
			} else {
				toastMessage = 'Something went wrong. Please try again later.';
				toastError = true;
				console.error('Unexpected response status:', response.status);
			}
		} catch (error) {
			toastMessage = 'Something went wrong. Please try again later.';
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

	const isValidEmail = (value: string): boolean => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(value);
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
			<span>{toastMessage}</span>
		</div>
	</div>
{/if}

{#if toastError}
	<div class="toast toast-center toast-top" transition:fade>
		<div class="alert alert-error">
			<span>{toastMessage}</span>
		</div>
	</div>
{/if}
