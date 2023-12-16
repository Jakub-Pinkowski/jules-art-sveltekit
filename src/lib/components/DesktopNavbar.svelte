<script lang="ts">
	import ThemeToggler from './ThemeToggler.svelte';
</script>

<nav class="navbar bg-base-100 max-md:hidden">
	<div class="flex-1">
		<a class="btn btn-ghost text-2xl ml-8" href="/">Jules-Art</a>
	</div>
	<ThemeToggler />
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1 text-xl">
			<li><a href="/">Home</a></li>
			<li><a href="/photos">Photos</a></li>
			<li><a href="/movies">Movies</a></li>
			<li><a href="/reels">Reels</a></li>
			<li><a href="/resources">Resources</a></li>
		</ul>
	</div>
</nav>
