<script>
	import { Input, Dropdown, DropdownToggle, DropdownMenu, Row, Col } from 'sveltestrap';
	import Link from 'svelte-link';
	import logo from '../assets/images/logo.svg';
	import logodark from '../assets/images/logo-dark.png';
	import logolightsvg from '../assets/images/logo-light.svg';
	import logolightpng from '../assets/images/logo-light.png';
	import megamenuimg from '../assets/images/megamenu-img.png';
	import LanguageDropdown from '../common/LanguageDropdown.svelte';
	import WebAppsDropdown from '../common/WebAppsDropdown.svelte';
	import FullScreenDropdown from '../common/FullScreenDropdown.svelte';
	import NotificationDropdown from '../common/NotificationDropdown.svelte';
	import ProfileDropdown from '../common/ProfileDropdown.svelte';
	export let toggleRightBar;
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
