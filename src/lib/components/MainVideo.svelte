<script lang="ts">
	import promo from '$lib/assets/movies/Promo.mov';

	const videoElement = <HTMLVideoElement | null>null;
	let isMuted = false;

	const toggleMute = () => {
		if (videoElement) {
			videoElement.muted = !videoElement.muted;
			isMuted = videoElement.muted;
		}
	};

	$: muteIconClass = isMuted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
</script>

<div>
	<div>
		<!-- svelte-ignore a11y-media-has-caption -->
		<video class="absolute inset-0 w-full h-full object-cover" autoplay muted src={promo}></video>
		<span class="absolute bottom-0 left-0 text-white">SCROLL DOWN</span>
		<button on:click={toggleMute}>
			<i class={muteIconClass}></i>
		</button>
	</div>

	<div class="h-screen"></div>
	<div>
		<p>Some paragraph</p>
	</div>
</div>
