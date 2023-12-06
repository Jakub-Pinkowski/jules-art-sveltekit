<script lang="ts">
	import '../app.css'
	import Footer from '$lib/components/Footer.svelte'
	import DesktopNavbar from '$lib/components/DesktopNavbar.svelte'
</script>

<div class="flex flex-col min-h-screen">
	<header>
		<DesktopNavbar />
	</header>
	<main class="flex-1 mx-6">
		<slot />
	</main>
	<Footer></Footer>
</div>

<style></style>
