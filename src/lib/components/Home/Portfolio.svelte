<script lang="ts">
	export let data: any;
	console.log(data);
</script>

<div class="p-4">
	<h2 class="text-3xl my-8">Portfolio Highlights</h2>
	<div class="flex flex-col text-center items-center md:flex-row">
		<div class="w-full md:w-1/3 p-4">
			<h3 class="text-2xl my-4">Photos</h3>
			{#each data.portfolio as { title, description, photo, src }}
				<h4 class="text-xl font-light mt-8 mb-4">
					{title}
				</h4>
				<span class="text-md font-light my-4">
					{description}
				</span>
				<img class="object-cover w-full h-full my-4 shadow-2xl rounded-lg" src={photo} alt="" />
				<a class="btn btn-primary btn-outline w-48" href={src}>View</a>
			{/each}
		</div>
	</div>
</div>
