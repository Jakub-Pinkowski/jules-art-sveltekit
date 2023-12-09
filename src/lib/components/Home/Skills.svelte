<script lang="ts">
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

<div class="p-4">
	<h2 class="text-3xl my-8">Skills</h2>
</div>
