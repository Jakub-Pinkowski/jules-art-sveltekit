<script lang="ts">
	import axios from 'axios';

	let name: string;
	let email: string;
	let message: string;

	const handleSubmit = (e: Event) => {
		e.preventDefault();
		const url = 'https://formspree.io/f/xgejepyk';

		const data = {
			name,
			email,
			message
		};

		console.log(data);

		axios
			.post(url, data)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});

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
