<script lang="ts">
	import passion_photo from '$lib/assets/images/contact.jpg';
</script>

<div class="p-4 text-justify">
	<h2 class="text-3xl md:">Contact me</h2>
	<p class="text-lg font-light my-4">
		Ready to collaborate? I'd love to hear about your project and how we can bring it to life
	</p>
	<span class="text-md font-light my-4"
		>P.S. It goes straight to email box, and I read it every day!</span
	>
	<form action="" class="flex flex-col">
		<input class="input input-primary w-full max-w-sm my-4" type="text" placeholder="Name" />
		<input class="input input-primary w-full max-w-sm my-4" type="text" placeholder="E-mail" />
		<textarea class="textarea textarea-primary w-full max-w-sm my-4" placeholder="Message"
		></textarea>
		<button class="btn btn-primary w-48" type="submit"> Submit </button>
	</form>
</div>

<img class="w-full p-4 object-cover rounded-3xl" src={passion_photo} alt="passion let us here" />
