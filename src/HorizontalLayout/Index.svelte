<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import Footer from '../VerticalLayout/Footer.svelte';
	import RightSidebar from '../common/RightSidebar.svelte';
	import Header from './Header.svelte';
	import Sidebar from './Sidebar.svelte';

	const toggleRightBar = () => {
		if (browser) {
			if (document.body.classList.contains('right-bar-enabled')) {
				document.body.classList.remove('right-bar-enabled');
			} else {
				document.body.classList.add('right-bar-enabled');
			}
		}
	};

	let closebar = () => {
		toggleRightBar();
	};

	onMount(() => {
		if (browser) {
			document.body.setAttribute('data-layout', 'horizontal');
			document.body.setAttribute('data-sidebar', 'light');
		}
	});
</script>

<div id="layout-wrapper">
	<Header {toggleRightBar} />
	<Sidebar />

	<div class="main-content">
		<div class="page-content">
			<div class="container-fluid">
				<slot />
			</div>
		</div>
		<Footer />
	</div>
	<RightSidebar {closebar} />
</div>
