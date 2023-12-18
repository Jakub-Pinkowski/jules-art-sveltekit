<script lang="ts">
	import { onMount } from 'svelte';
	import promo from '$lib/assets/movies/Promo.mov';
	import { Hamburger } from 'svelte-hamburgers';
	import MobileNavbar from '$lib/components/MobileNavbar.svelte';

	let videoElement: HTMLVideoElement | null = null;
	let isBouncing = true;
	let open: boolean = false;

	const toggleMute = () => {
		if (videoElement) {
			videoElement.muted = !videoElement.muted;
		}
	};

	onMount(() => {
		setTimeout(() => {
			isBouncing = false;
		}, 3500);
	});
</script>

<div class="max-md:hidden">
	<nav class="absolute right-8 top-8 z-10 text-white">
		<div class="tp-0 absolute right-0">
			<Hamburger bind:open --color="white" />
		</div>
		<MobileNavbar bind:open />
	</nav>
	<div>
		<!-- svelte-ignore a11y-media-has-caption -->
		<video
			class="absolute inset-0 h-full w-full object-cover"
			autoplay
			loop
			muted
			src={promo}
			bind:this={videoElement}
		></video>
		<span class="text-s absolute bottom-0 left-0 m-2 font-semibold text-white">SCROLL DOWN</span>
		<label
			class={`swap absolute bottom-0 right-0 m-2 text-white ${isBouncing ? 'animate-bounce' : ''}`}
		>
			<!-- this hidden checkbox controls the state -->
			<input name="mute" type="checkbox" on:change={toggleMute} />

			<!-- volume on icon -->
			<svg
				class="swap-on fill-current"
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="48"
				viewBox="0 0 24 24"
				><path
					d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"
				/></svg
			>

			<!-- volume off icon -->
			<svg
				class="swap-off fill-current"
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="48"
				viewBox="0 0 24 24"
				><path
					d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z"
				/></svg
			>
		</label>
	</div>
	<div class="h-screen"></div>
</div>
