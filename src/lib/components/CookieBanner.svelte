<script>
	let showBanner = false;

	if (typeof window !== 'undefined') {
		showBanner = !localStorage.getItem('cookieBannerDisplayed');
		if (showBanner) {
			localStorage.setItem('cookieBannerDisplayed', 'true');
		}
	}

	const acceptAll = () => {
		localStorage.setItem('cookieBannerDisplayed', 'true');
		showBanner = false;
	};

	// TODO: Implement this
	const rejectAll = () => {
		document.cookie = 'theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
		console.log('document.cookie:', document.cookie);

		localStorage.setItem('cookieBannerDisplayed', 'true');

		showBanner = false;
	};

	// const customizeCookies = () => {
	// 	localStorage.setItem('cookieBannerDisplayed', 'true');
	// 	showBanner = false;
	// };
</script>

{#if showBanner}
	<div class="toast toast-center toast-top z-10 shadow-xl">
		<div class="card border-neutral-500 bg-base-100">
			<div class="card-body">
				<h2 class="card-title">Cookies!</h2>
				<p>
					We use cookies to analyze our traffic and play YouTube Videos. By clicking "Accept" you
					consent to our use of cookies.
				</p>
				<a class="text-blue-500" href="/cookies"> Cookie Policy </a>
				<div class="card-actions ml-auto">
					<!-- <button class="btn btn-ghost" on:click={customizeCookies}>Customize</button> -->
					<button class="btn btn-ghost w-36" on:click={rejectAll}>Reject</button>
					<button class="btn btn-primary w-36" on:click={acceptAll}>Accept</button>
				</div>
			</div>
		</div>
	</div>
{/if}
