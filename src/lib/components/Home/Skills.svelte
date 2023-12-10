<script lang="ts">
	import skills_1 from '$lib/assets/images/services_1.jpg';
	import skills_2 from '$lib/assets/images/services_2.jpg';

	interface Skill {
		title: string;
		description: string;
	}

	const skills = [
		{
			title: 'Short Film Production',
			description: 'From concept to post-production.'
		},
		{
			title: 'Promotional Videos',
			description:
				'Creation of videos for products like: cosmetics, clothes, books, and all you can think about!'
		},
		{
			title: 'Video Editing',
			description: 'Da Vinci Resolve'
		},
		{
			title: 'Scenario Writing',
			description: 'Scenarios for short movies 2-3 min.'
		}
	] as Skill[];
</script>

<div class="my-8 flex flex-col p-4 md:flex-row">
	<div class="md:w-1/2">
		<h2 class="my-8 text-3xl">Skills</h2>
		{#each skills as { title, description }}
			<div class="flex flex-col items-center md:flex-row">
				<div class="w-full">
					<h3 class="mb-2 mt-8 flex items-center text-2xl font-light">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="16"
							width="18"
							viewBox="0 0 576 512"
							fill="#c8b6ff"
							class="mr-2"
							><path
								d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
							/></svg
						>
						{title}
					</h3>
					<span class="my-4 text-lg font-light">
						{description}
					</span>
				</div>
			</div>
		{/each}
	</div>
	<div class="mt-8 flex flex-row md:w-1/2">
		<img class="w-1/2 rounded-3xl object-cover p-4" src={skills_1} alt="girl with a camera" />
		<img class="w-1/2 rounded-3xl object-cover p-4" src={skills_2} alt="guy throwing a camera" />
	</div>
</div>
