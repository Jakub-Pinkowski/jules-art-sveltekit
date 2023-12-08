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
	<div class="w-1/2">
		<h1>Jules-Art</h1>
		<h2>Videography & Photography</h2>
		<h3>About me</h3>
		<p>
			{about_description}
		</p>
		<h3>Films, Style & Aesthetics</h3>
		<p>
			{style_description}
		</p>
		<p>
			{style_description_2}
		</p>
	</div>
	<div class="flex justify-center items-center w-1/2 h-full relative">
		<!-- AvatarSvg is moved after the img tag -->
		<AvatarSvg />

		<!-- Image is set to position relative, making z-index work -->
		<img
			class="rounded-full w-3/4 h-3/4 mx-10 object-cover relative z-1"
			src={about}
			alt="author"
		/>
	</div>
</div>
