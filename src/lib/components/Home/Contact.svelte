<script lang="ts">
	import passion_photo from '$lib/assets/images/contact.jpg';
	import insta_icon from '$lib/assets/icons/insta_icon.svg';
	import tiktok_icon from '$lib/assets/icons/tiktok_icon.svg';

	const insta_link = 'https://www.instagram.com/jules_matias/?hl=en';
	const tiktok_link = 'https://www.tiktok.com/@jules_matias?_t=8g9XXu8AGnI&_r=1';
</script>

<div class="flex flex-col md:flex-row">
	<div class="p-4 md:w-1/2 text-justify">
		<h2 class="text-3xl md:">Contact me</h2>
		<p class="text-lg font-light my-4">
			Ready to collaborate? I'd love to hear about your project and how we can bring it to life
		</p>
		<span class="text-md font-light my-4"
			>P.S. It goes straight to email box, and I read it every day!</span
		>
		<form action="" class="flex flex-col mb-8">
			<input class="input input-primary w-full max-w-md my-4" type="text" placeholder="Name" />
			<input class="input input-primary w-full max-w-md my-4" type="text" placeholder="E-mail" />
			<textarea class="textarea textarea-primary w-full max-w-md my-4" placeholder="Message"
			></textarea>
			<button class="btn btn-primary w-48 my-4" type="submit"> Submit </button>
		</form>
		<span class="text-lg font-light my-4">Let's connect on Social Media</span>
		<div class="flex">
			<a href={insta_link}>
				<img
					class="w-16 h-16 mr-4 my-4 transition-transform
                            duration-300 ease-in-out transform hover:scale-110"
					src={insta_icon}
					alt="instagram icon"
				/>
			</a>
			<a href={tiktok_link}>
				<img
					class="w-16 h-16 mr-4 my-4
                            transition-transform duration-300 ease-in-out transform hover:scale-110"
					src={tiktok_icon}
					alt="tiktok icon"
				/>
			</a>
		</div>
	</div>

	<img
		class="w-full p-4 object-cover rounded-3xl md:w-1/2"
		src={passion_photo}
		alt="passion let us here"
	/>
</div>
