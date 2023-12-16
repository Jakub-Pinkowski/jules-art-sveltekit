<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="mt-16 flex h-screen flex-col items-center text-base-content">
	<h1 class="my-8 text-4xl font-bold">The page you are looking for does not exist :(</h1>
	<p class=" my-4 text-lg font-medium">Error {$page.status}: {$page.error?.message}</p>
	<a class="btn btn-primary my-8 text-lg font-medium" href="/">Return Home</a>
</div>
