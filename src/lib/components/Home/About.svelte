<script lang="ts">
	const about_description =
		"Hello! I'm Iuliia, a passionate self-taught videographer. I'm fascinated by the process of transforming ideas into cinematographic meaningful stories that inspire people and leave a lasting impact. I create short films, product videos, and Reels. My films convey a wide range of emotions, from love and hope to dreams and deep thoughts, all woven into the story. My permanent residence is in Berlin, Germany, but also I love to travel and shoot in other cities and countries.";
	const style_description =
		"My favourite style is “elegant-classy” or “romantic-nostalgic.” If I were to describe it in words - it's something about the set up in beautiful location, golden light, dreamy or dramatic mood, red lipstick, little black dress.";
	const style_description_2 = '...but I am always up for experiments!';

    import frame from '$lib/assets/images/frame.png';
</script>

<div class="flex flex-col md:flex-row">
	<div class="md:w-1/2 p-4 text-justify">
		<h1 class="text-5xl font-semibold my-8">Jules-Art</h1>
		<h2 class="text-2xl my-8">Videography & Photography</h2>
		<h3 class="text-xl my-4">About me</h3>
		<p class="text-base">{about_description}</p>
		<h3 class="text-xl my-8">Films, Style & Aesthetics</h3>
		<p class="text-base my-4">{style_description}</p>
		<p class="text-base my-4">{style_description_2}</p>
	</div>
	<div class="flex justify-center items-center rounded-full md:w-1/2 mx-10 z-1">
		<img class="p-8" src={frame} alt="author" />
	</div>
</div>
