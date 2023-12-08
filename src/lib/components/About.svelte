<script lang="ts">
	const about_description =
		"Hello! I'm Iuliia, a passionate self-taught videographer. I'm fascinated by the process of transforming ideas into cinematographic meaningful stories that inspire people and leave a lasting impact. I create short films, product videos, and Reels. My films convey a wide range of emotions, from love and hope to dreams and deep thoughts, all woven into the story. My permanent residence is in Berlin, Germany, but also I love to travel and shoot in other cities and countries.";
	const style_description =
		"My favourite style is “elegant-classy” or “romantic-nostalgic.” If I were to describe it in words - it's something about the set up in beautiful location, golden light, dreamy or dramatic mood, red lipstick, little black dress.";
	const style_description_2 = '...but I am always up for experiments!';

	import about from '$lib/assets/images/about.jpg';
	import AvatarSvg from './UI/AvatarSVG.svelte';
</script>

<div class="flex">
	<div class="w-1/2 p-8 text-justify">
		<h1 class="text-3xl font-bold my-8">Jules-Art</h1>
		<h2 class="text-2xl font-semibold my-8">Videography & Photography</h2>
		<h3 class="text-lg font-semibold my-4">About me</h3>
		<p class="text-base">{about_description}</p>
		<h3 class="text-lg font-semibold my-8">Films, Style & Aesthetics</h3>
		<p class="text-base">{style_description}</p>
		<p class="text-base">{style_description_2}</p>
	</div>
	<div class="flex justify-center items-center rounded-full w-1/2 mx-10 z-1">
		<img class="rounded-full object-cover z-1 w-[30rem] h-auto" src={about} alt="author" />
			<AvatarSvg />
	</div>
</div>
