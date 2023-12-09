<script lang="ts">

    export let data: any;
    console.log(data);
</script>

<div class="p-4">
	<h2 class="text-3xl my-8">Portfolio Highlights</h2>
	<div class="flex flex-col md:flex-row">
		<div class="w-full md:w-1/3 p-4">
			<h3 class="text-xl my-4">Photos</h3>
			<p>
				{data}
			</p>
		</div>
	</div>
</div>
