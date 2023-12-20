<script>
	import {
		Button,
		Card,
		CardBody,
		Col,
		Dropdown,
		DropdownItem,
		DropdownMenu,
		DropdownToggle,
		Input,
		Row,
		Table
	} from 'sveltestrap';
	import Breadcrumb from '../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import Link from 'svelte-link';
	import JobFilter from './JobFilter.svelte';
	import JobData from './JobData.svelte';
</script>

<HeadTitle title="Jobs Grid" />

<Breadcrumb title="Jobs" pagetitle="Jobs Grid" />

<JobFilter />
<JobData />
