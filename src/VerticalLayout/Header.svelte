<script>
	import { browser } from '$app/environment';
	import { Input, Dropdown } from 'sveltestrap';
	import logo from '../assets/images/logo.svg';
	import logodark from '../assets/images/logo-dark.png';
	import logolightsvg from '../assets/images/logo-light.svg';
	import logolightpng from '../assets/images/logo-light.png';
	import LanguageDropdown from '../common/LanguageDropdown.svelte';
	import WebAppsDropdown from '../common/WebAppsDropdown.svelte';
	import FullScreenDropdown from '../common/FullScreenDropdown.svelte';
	import NotificationDropdown from '../common/NotificationDropdown.svelte';
	import ProfileDropdown from '../common/ProfileDropdown.svelte';
	import { OverlayScrollbars } from 'overlayscrollbars';

	export let toggleRightBar;
	const toggleSideBar = () => {
		if (browser) {
			document.body.classList.toggle('sidebar-enable');
			document.body.classList.toggle('vertical-collpsed');

			if (document.body.classList.contains('vertical-collpsed')) {
				const Instance = OverlayScrollbars(document.querySelector('#vertical-menu'));
				if (Instance) {
					Instance.destroy();
				}
			} else {
				const options = {
					scrollbars: {
						visibility: 'auto', // You can adjust the visibility ('auto', 'hidden', 'visible')
						autoHide: 'move', // You can adjust the auto-hide behavior ('move', 'scroll', false)
						autoHideDelay: 100,
						dragScroll: true,
						clickScroll: false,
						theme: 'os-theme-light',
						pointers: ['mouse', 'touch', 'pen']
					}
				};
				const menuElement = document.querySelector('#vertical-menu');
				OverlayScrollbars(menuElement, options);
			}
		}
	};
</script>

<header id="page-topbar">
	<div class="navbar-header">
		<div class="d-flex">
			<!-- LOGO -->
			<div class="navbar-brand-box">
				<a href="/dashboard" class="logo logo-dark">
					<span class="logo-sm">
						<img src={logo} alt="" height="22" />
					</span>
					<span class="logo-lg">
						<img src={logodark} alt="" height="17" />
					</span>
				</a>

				<a href="/dashboard" class="logo logo-light">
					<span class="logo-sm">
						<img src={logolightsvg} alt="" height="22" />
					</span>
					<span class="logo-lg">
						<img src={logolightpng} alt="" height="19" />
					</span>
				</a>
			</div>

			<button
				type="button"
				class="btn btn-sm px-3 font-size-16 header-item waves-effect"
				id="vertical-menu-btn"
				on:click={toggleSideBar}
			>
				<i class="fa fa-fw fa-bars" />
			</button>

			<!-- App Search-->
			<form class="app-search d-none d-lg-block">
				<div class="position-relative">
					<Input type="text" class="form-control" placeholder="Search..." />
					<span class="bx bx-search-alt" />
				</div>
			</form>
		</div>
		<div class="d-flex">
			<LanguageDropdown />
			<WebAppsDropdown />
			<FullScreenDropdown />
			<NotificationDropdown />
			<ProfileDropdown />

			<Dropdown class="d-inline-block">
				<button
					type="button"
					class="btn header-item noti-icon right-bar-toggle waves-effect"
					on:click={toggleRightBar}
				>
					<i class="bx bx-cog bx-spin" />
				</button>
			</Dropdown>
		</div>
	</div>
</header>
