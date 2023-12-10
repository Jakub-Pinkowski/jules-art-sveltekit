<script lang="ts">
	import { Hamburger } from 'svelte-hamburgers';
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import DesktopNavbar from '$lib/components/DesktopNavbar.svelte';
	import MobileNavbar from '$lib/components/MobileNavbar.svelte';

	const primary = '#c8b6ff';
	let open: boolean;
</script>

<div class="flex min-h-screen flex-col">
	<header>
		<DesktopNavbar />
		<nav class="absolute right-8 top-8 md:hidden">
			<Hamburger bind:open --color={primary} />
		</nav>
		<MobileNavbar bind:open />
	</header>
	<main class="md:mx-6 flex-1 overflow-hidden">
		<slot />
	</main>
	<Footer></Footer>
</div>
