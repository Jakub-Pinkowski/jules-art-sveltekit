<script lang="ts">
	import passion_photo from '$lib/assets/images/contact.jpg';
	import insta_icon from '$lib/assets/icons/insta_icon.svg';
	import tiktok_icon from '$lib/assets/icons/tiktok_icon.svg';

	const insta_link = 'https://www.instagram.com/jules_matias/?hl=en';
	const tiktok_link = 'https://www.tiktok.com/@jules_matias?_t=8g9XXu8AGnI&_r=1';
</script>

<div class="flex flex-col md:flex-row">
	<div class="p-4 text-justify md:order-2 md:w-2/5">
		<h2 class="md: text-3xl">Contact me</h2>
		<p class="my-4 text-lg font-light">
			Ready to collaborate? I'd love to hear about your project and how we can bring it to life
		</p>
		<span class="text-md my-4 font-light"
			>P.S. It goes straight to email box, and I read it every day!</span
		>
		<form action="" class="mb-8 flex flex-col">
			<input class="input input-bordered my-4 w-full max-w-md" type="text" placeholder="Name" />
			<input class="input input-bordered my-4 w-full max-w-md" type="text" placeholder="E-mail" />
			<textarea class="textarea textarea-bordered my-4 w-full max-w-md" placeholder="Message"
			></textarea>
			<button class="btn btn-outline my-4 w-48" type="submit"> Submit </button>
		</form>
		<span class="my-4 text-lg font-light">Let's connect on Social Media</span>
		<div class="flex">
			<!-- TODO: Make it obvious you can ckilck those on mobile on dark theme-->
			<a href={insta_link}>
				<img
					class="my-4 mr-4 h-16 w-16 transform
                            transition-transform duration-300 ease-in-out hover:scale-110"
					src={insta_icon}
					alt="instagram icon"
				/>
			</a>
			<a href={tiktok_link}>
				<img
					class="my-4 mr-4 h-16 w-16
                            transform transition-transform duration-300 ease-in-out hover:scale-110"
					src={tiktok_icon}
					alt="tiktok icon"
				/>
			</a>
		</div>
	</div>

	<img
		class="w-full rounded-3xl object-cover p-4 md:order-1 md:w-3/5"
		src={passion_photo}
		alt="passion let us here"
	/>
</div>
