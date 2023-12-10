<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

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

<div class="p-4">
	<h2 class="my-8 pl-4 text-3xl font-medium md:my-4">Reels</h2>
	<div
		on:touchstart={handleTouchStart}
		on:touchmove={handleTouchMove}
		on:touchend={handleTouchEnd}
		class="carousel w-full rounded-box"
	>
		{#each reels as { name, src, poster }, i (name)}
			<div id={name} class="carousel-item relative w-full">
				<!-- svelte-ignore a11y-media-has-caption -->
				<video {src} {poster} controls></video>
				<span
					class="absolute bottom-44 left-0 right-0 z-10 text-center text-2xl font-medium text-gray-50"
				>
					{name}
				</span>
			</div>
		{/each}
	</div>
	<div role="tablist" class="tabs tabs-bordered relative bottom-36 w-full items-center">
		{#each reels as { name }, i (name)}
			<!-- svelte-ignore a11y-missing-content -->
			<a
				id={name}
				on:click={() => setActiveIndex(i)}
				role="tab"
				href={`#${name}`}
				class={`tab m-1 h-1 bg-gray-50 ${i === activeIndex ? 'bg-gray-900' : ''}`}
			></a>
		{/each}
	</div>
</div>
