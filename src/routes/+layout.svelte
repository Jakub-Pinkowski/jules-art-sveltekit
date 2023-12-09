<script lang="ts">
	import { Hamburger } from 'svelte-hamburgers';
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import DesktopNavbar from '$lib/components/DesktopNavbar.svelte';
	import MobileNavbar from '$lib/components/MobileNavbar.svelte';

	const primary = '#c8b6ff';
	let open: boolean;

</script>

<div class="flex flex-col min-h-screen">
	<header>
		<DesktopNavbar />
		<Hamburger bind:open --color={primary} />
		<MobileNavbar bind:open/>
	</header>
	<main class="flex-1 mx-6 text-gray-900">
		<slot />
	</main>
	<Footer></Footer>
</div>
