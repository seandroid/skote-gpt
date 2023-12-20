<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import VerticalLayout from '../VerticalLayout/Index.svelte';
	import HorizontalLayout from '../HorizontalLayout/Index.svelte';
	import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';
	import en from '../lang/en.json';

	addMessages('en', en);

	init({
		fallbackLocale: 'en',
		initialLocale: getLocaleFromNavigator()
	});

	let layoutType = 'vertical';

	onMount(() => {
		if (!isAuthenticate()) {
			goto('/auth/login');
		}
	});

	function isAuthenticate() {
		let user = browser && localStorage.authUser;
		if (!user) {
			return false;
		} else {
			return true;
		}
	}

	let component = layoutType == 'vertical' ? VerticalLayout : HorizontalLayout;

	const publicRoutes = [
		'/auth/login',
		'/auth/login-2',
		'/auth/register',
		'/auth/register-2',
		'/auth/recoverpw',
		'/auth/recoverpw-2',
		'/auth/lock-screen',
		'/auth/lock-screen-2',
		'/auth/confirm-mail',
		'/auth/confirm-mail-2',
		'/auth/email-verification',
		'/auth/email-verification-2',
		'/auth/two-step-verification',
		'/auth/two-step-verification-2',
		'/pages/maintenance',
		'/pages/comingsoon',
		'/pages/404',
		'/pages/500'
	];

	$: isPublic = publicRoutes.includes($page.url.pathname);
</script>

<svelte:head>
	<script src="//cdn.jsdelivr.net/npm/apexcharts"></script>
	<!-- jsvectormap -->
	<!-- jsvectormap -->
	<script src="https://cdn.jsdelivr.net/npm/jsvectormap"></script>
	<script src="https://cdn.jsdelivr.net/npm/jsvectormap/dist/maps/world.js"></script>
</svelte:head>

{#if isPublic}
	<slot />
{:else}
	<svelte:component this={component}>
		<slot />
	</svelte:component>
{/if}

<style lang="scss">
	@import './../assets/scss/bootstrap.scss';
	@import './../assets/scss/app.scss';
	@import './../assets/scss/icons.scss';
</style>
