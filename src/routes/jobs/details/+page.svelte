<script>
	import { Button, Card, CardBody, Col, ModalBody, Row, Table } from 'sveltestrap';
	import Breadcrumb from '../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import Link from 'svelte-link/src/Link.svelte';
	import Modal from '../../../common/Modal.svelte';

	
    import Overview from './Overview.svelte';
    import DetailsSection from './DetailsSection.svelte';

</script>

<HeadTitle title="Job Details" />

<Breadcrumb title="Jobs" pagetitle="Job Details" />

<Row>
	<Overview />
	<DetailsSection />
</Row>

