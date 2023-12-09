<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import DesktopNavbar from '$lib/components/DesktopNavbar.svelte';
	import MobileNavbar from '$lib/components/MobileNavbar.svelte';
	import MobileNavbar2 from '$lib/components/MobileNavbar2.svelte';

	import { Hamburger } from 'svelte-hamburgers';

	let open: any;
</script>

<div class="flex flex-col min-h-screen">
	<header>
		<DesktopNavbar />
		<MobileNavbar />
		<Hamburger bind:open --color="red" />
        <MobileNavbar2 bind:open />
	</header>
	<main class="flex-1 mx-6 text-gray-900">
		<slot />
	</main>
	<Footer></Footer>
</div>

<style></style>
