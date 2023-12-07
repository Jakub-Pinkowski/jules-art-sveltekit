<script lang="ts">
	import promo from '$lib/assets/movies/Promo.mov';
</script>

<div>
	<div>
		<!-- svelte-ignore a11y-media-has-caption -->
		<video class="absolute inset-0 w-full h-full object-cover" autoplay muted src={promo}></video>
		<span></span>
		<button></button>
	</div>
	<div>
		<p>Some paragraph</p>
	</div>
</div>
