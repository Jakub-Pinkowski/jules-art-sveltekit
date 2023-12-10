<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { reels } = data;

	// Mobile
	let activeIndex: number = 0;

	// Carousel finctionality
	const nextSlide = () => {
		activeIndex = (activeIndex + 1) % reels.length;
	};

	const prevSlide = () => {
		activeIndex = (activeIndex - 1 + reels.length) % reels.length;
	};

	// Swiping functionality
	let xDown: number | null = null;
	let yDown: number | null = null;

	const getTouches = (evt: TouchEvent) => {
		return evt.touches;
	};

	const handleTouchStart = (evt: TouchEvent) => {
		const firstTouch = getTouches(evt)[0];
		xDown = firstTouch.clientX;
		yDown = firstTouch.clientY;
	};

	const handleTouchMove = (evt: TouchEvent) => {
		if (!xDown || !yDown) {
			return;
		}

		let xUp = evt.touches[0].clientX;
		let yUp = evt.touches[0].clientY;

		let xDiff = xDown - xUp;
		let yDiff = yDown - yUp;

		if (Math.abs(xDiff) > Math.abs(yDiff)) {
			if (xDiff > 0) {
				nextSlide();
			} else {
				prevSlide();
			}
		}

		xDown = null;
		yDown = null;
	};

	const handleTouchEnd = (evt: TouchEvent) => {
		if (!xDown || !yDown) {
			return;
		}
		handleTouchMove(evt);
	};
</script>

<div class="p-4">
	<h2 class=" my-8 pl-4 text-3xl font-medium md:my-4">Reels</h2>
	<div class="min-h-screen">
		<div
			id="carousel"
			on:touchstart={handleTouchStart}
			on:touchmove={handleTouchMove}
			on:touchend={handleTouchEnd}
		>
			<!-- Indicator -->
			<div id="indicator" class="flex items-center justify-center gap-4">
				{#each reels as { name }, i (name)}
					<button
						type="button"
						class={`m-0 h-4 w-12 cursor-pointer bg-gray-300 p-0 ${
							i === activeIndex ? 'active' : ''
						}`}
						on:click={() => (activeIndex = i)}
						aria-label={`Reel ${i + 1}`}
					></button>
				{/each}
			</div>

			<!-- Inner  -->
			<div id="carousel-inner">
				{#each reels as { name, src, poster }, i (name)}
					<!-- Single iteam -->
					<div
						id="single-item"
						class={`flex h-5/6 items-center justify-center ${i === activeIndex ? 'active' : ''}`}
					>
						<!-- svelte-ignore a11y-media-has-caption -->
						<video
							class="h-auto max-h-full w-auto max-w-full"
							controls
							loop
							playsinline
							{src}
							{poster}
						></video>
						<div id="carousel-caption" class="bottom-24">
							<span class="text-2xl text-gray-400">
								{name}
							</span>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
