<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex flex-col min-h-screen">
<h2>Layout</h2>
<main class="flex-1 mx-6">
    <slot />
</main>
<Footer></Footer>
</div>

<style></style>
