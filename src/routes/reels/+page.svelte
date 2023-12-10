<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { reels } = data;

	// Mobile
	let activeIndex: number = 0;

	// Carousel finctionality
</script>

<div class="p-4">
	<h2 class=" my-8 pl-4 text-3xl font-medium md:my-4">Reels</h2>
	<div>
		<div id="carousel">
			<div id="indicator">
				<button type="button"></button>
			</div>
			<div id="carousel-inner">
				<div id="single-item">
					<video src=""></video>
					<div id="carousel-caption">
						<span></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
