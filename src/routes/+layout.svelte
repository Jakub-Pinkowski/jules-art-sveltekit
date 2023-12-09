<script lang="ts">
	import { Hamburger } from 'svelte-hamburgers';
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import DesktopNavbar from '$lib/components/DesktopNavbar.svelte';
	import MobileNavbar from '$lib/components/MobileNavbar.svelte';
	import MobileNavbar2 from '$lib/components/MobileNavbar2.svelte';

	const primary = '#c8b6ff';
    const dark = '#3c096c';
	let open: boolean;

</script>

<div class="flex flex-col min-h-screen">
	<header>
		<DesktopNavbar />
		<MobileNavbar />
		<Hamburger bind:open --color={primary} />
		<MobileNavbar2 bind:open/>
	</header>
	<main class="flex-1 mx-6 text-gray-900">
		<slot />
	</main>
	<Footer></Footer>
</div>
