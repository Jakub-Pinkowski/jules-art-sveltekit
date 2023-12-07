<script lang="ts">
	import promo from '$lib/assets/movies/Promo.mov';
</script>

<div>
	<div>
		<!-- svelte-ignore a11y-media-has-caption -->
		<video class="absolute inset-0 w-full h-full object-cover" autoplay muted src={promo}></video>
		<span class="absolute inset-0 bottom-0 left-0 text-white">SCROLL DOWN</span>
		<button></button>
	</div>

	<div class="h-screen"></div>
	<div>
		<p>Some paragraph</p>
	</div>
</div>
