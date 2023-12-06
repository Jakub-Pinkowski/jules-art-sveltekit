<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

    // Modal
    let modalOpen = false;
    let modalImage = '';

    function openModal(event) {
        modalOpen = true;
        modalImage = event.target.src;
    }

    function closeModal() {
        modalOpen = false;
    }

    
</script>

<div class="mt-8">
	<!-- Gallery -->

	<div class="columns-3 gap-4 my-8 w-full h-auto">
		{#each data.photos as { name, src }}
			<div class="m-4">
				<div
					class="w-full overflow-hidden cursor-pointer transition-transform hover:opacity-90 ease-out duration-500"
				>
					<img class="object-cover w-full h-full shadow-2xl rounded-lg" {src} alt="artictic" />
				</div>
			</div>
		{/each}
	</div>

	<!-- Modal -->
	<div class="photo-modal" >
		<div class="modal-background" on:click="closeModal"></div>
		<div class="modal-content" on:click="closeModal">
			<img src="modalImage" alt="Full Size Image" />
		</div>
	</div>
</div>
