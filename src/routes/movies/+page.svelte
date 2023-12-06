<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Movies</h1>

{#each data.movies as { name, year, rating }}
	<div>
		<p>Name: {name}</p>
		<p>Year: {year}</p>
		<p>Rating: {rating}</p>
		<hr />
	</div>
{/each}
