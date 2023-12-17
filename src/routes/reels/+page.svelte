<script lang="ts">
	import DesktopSwiper from '$lib/components/DesktopSwiper.svelte';
	import MobileSwiper from '$lib/components/MobileSwiper.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log('data from reels +page.svelte', data);

    // extract just title, src ans poster from data
</script>

<div class="p-4">
	<h2 class="my-8 pl-4 text-3xl font-medium md:my-4">Reels</h2>
	<MobileSwiper {data} />
	<DesktopSwiper {data} />
</div>
