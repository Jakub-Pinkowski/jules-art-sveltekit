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
		localStorage.setItem('cookieBannerDisplayed', 'true');
		showBanner = false;
	};

	const customizeCookies = () => {
		localStorage.setItem('cookieBannerDisplayed', 'true');
		showBanner = false;
	};
</script>

	<div class="card w-[25rem] bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 class="card-title">Cookies!</h2>
			<p>
				We use cookies to anylyze our traffic. By clicking "Accept All" you consent to our use of
				cookies
			</p>
			<a 
                class="text-blue-500"
            href="/cookies"> Cookie Policy </a>
			<div class="card-actions">
				<button class="btn btn-ghost" on:click={customizeCookies}>Customize</button>
				<button class="btn btn-ghost" on:click={rejectAll}>Reject All</button>
				<button class="btn btn-primary" on:click={acceptAll}>Accept All</button>
			</div>
		</div>
	</div>

