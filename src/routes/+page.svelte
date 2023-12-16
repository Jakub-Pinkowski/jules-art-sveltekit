<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	import MainVideo from '$lib/components/Home/MainVideo.svelte';
	import About from '$lib/components/Home/About.svelte';
	import Portfolio from '$lib/components/Home/Portfolio.svelte';
	import Skills from '$lib/components/Home/Skills.svelte';
	import Contact from '$lib/components/Home/Contact.svelte';

	let isMobile = false;

	onMount(() => {
		isMobile = window.innerWidth < 768;

		const handleResize = () => {
			isMobile = window.innerWidth < 768;
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<div>
	{#if !isMobile}
		<MainVideo />
	{/if}
	<About />
	<Portfolio {data} />
	<Skills />
	<Contact />
</div>
