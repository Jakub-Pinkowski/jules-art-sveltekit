<script lang="ts">
	export let data;

	const { reels } = data;

	let activeIndex: number = 0;
	let xDown: number | null = null;
	let yDown: number | null = null;

	const setActiveIndex = (index: number) => {
		activeIndex = index;
	};

	// Swiping functionality
	// FIXME: All swiping functionality
	const nextSlide = () => {
		if (activeIndex < reels.length - 1) {
			setActiveIndex(activeIndex + 1);
		}
	};

	const prevSlide = () => {
		if (activeIndex > 0) {
			setActiveIndex(activeIndex - 1);
		}
	};

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

		const xUp = evt.touches[0].clientX;
		const yUp = evt.touches[0].clientY;

		const xDiff = xDown - xUp;
		const yDiff = yDown - yUp;

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

	const handleTouchEnd = (event: TouchEvent) => {
		if (!xDown || !yDown) {
			return;
		}
		handleTouchMove(event);
	};
</script>

<div
	on:touchstart={handleTouchStart}
	on:touchmove={handleTouchMove}
	on:touchend={handleTouchEnd}
	class="carousel carousel-center w-full space-x-4 rounded-box md:hidden"
>
	{#each reels as { title, src, poster }, i (title)}
		<div id={title} class="carousel-item relative w-10/12">
			<!-- svelte-ignore a11y-media-has-caption -->
			<video {src} {poster} controls></video>
			<span
				class="absolute bottom-44 left-0 right-0 z-10 text-center text-2xl font-medium text-gray-50"
			>
				{title}
			</span>
		</div>
	{/each}
</div>