<script lang="ts">
	import { onMount } from 'svelte';

	const about_description =
		"Hello! I'm Iuliia, a passionate self-taught videographer. I'm fascinated by the process of transforming ideas into cinematographic meaningful stories that inspire people and leave a lasting impact. I create short films, product videos, and Reels. My films convey a wide range of emotions, from love and hope to dreams and deep thoughts, all woven into the story. My permanent residence is in Berlin, Germany, but also I love to travel and shoot in other cities and countries.";
	const style_description =
		"My favourite style is “elegant-classy” or “romantic-nostalgic.” If I were to describe it in words - it's something about the set up in beautiful location, golden light, dreamy or dramatic mood, red lipstick, little black dress.";
	const style_description_2 = '...but I am always up for experiments!';

	import about from '$lib/assets/images/about.jpg';
	import AvatarSvg from '$lib/components/UI/AvatarSVG.svelte';

	let isMobile = false;

	onMount(() => {
		isMobile = window.innerWidth < 768;

		const handleResize = () => {
			isMobile = window.innerWidth < 768;
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<div class="flex flex-col md:flex-row">
	<div class="p-4 text-justify md:w-1/2">
		<h1 class="my-8 text-5xl font-semibold">Jules-Art</h1>
		<h2 class="my-8 text-3xl">Videography & Photography</h2>
		<h3 class="my-4 text-2xl">About me</h3>
		{#if isMobile}
			<div
				class="relative my-12 flex h-full items-center justify-center text-center md:my-24 md:w-1/2"
			>
				<img src={about} alt="author" class="h-2/3 w-2/3 rounded-full object-cover" />
				<AvatarSvg />
			</div>
		{/if}
		<p class="text-lg font-light">{about_description}</p>
		<h3 class="my-8 text-2xl">Films, Style & Aesthetics</h3>
		<p class="my-4 text-lg font-light">{style_description}</p>
		<p class="my-4 text-lg font-light">{style_description_2}</p>
	</div>
	{#if !isMobile}
		<div
			class="relative my-12 flex h-full items-center justify-center text-center md:my-24 md:w-1/2"
		>
			<img src={about} alt="author" class="h-2/3 w-2/3 rounded-full object-cover" />
			<AvatarSvg />
		</div>
	{/if}
</div>

<style lang="scss">
</style>
