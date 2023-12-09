<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import MainVideo from '$lib/components/Home/MainVideo.svelte';
	import About from '$lib/components/Home/About.svelte';
	import Portfolio from '$lib/components/Home/Portfolio.svelte';
	import Skills from '$lib/components/Home/Skills.svelte';
</script>

<div>
	<MainVideo />
	<About />
	<Portfolio {data} />
    <Skills />
</div>
