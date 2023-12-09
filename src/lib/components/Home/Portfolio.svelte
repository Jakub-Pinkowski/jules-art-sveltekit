<script lang="ts">
	export let data: any;
</script>

<div class="p-4">
	<h2 class="text-3xl my-8">Portfolio Highlights</h2>
	<div class="flex flex-col text-center items-center md:flex-row">
		{#each data.portfolio as { title, description, photo, src }}
			<div class="w-full md:w-1/3 md:mx-4">
				<h3 class="text-2xl font-light mt-8 mb-2">
					{title}
				</h3>
				<span class="text-md font-light my-4">
					{description}
				</span>
				<a href={src}>
					<img
						class="object-cover w-full h-full my-4 shadow-2xl rounded-lg md:hover:opacity-90 md:hover:scale-105 transition-transform duration-300 ease-in-out"
						src={photo}
						alt=""
					/></a
				>

			</div>
		{/each}
	</div>
</div>
