<script>
	import { Col, Row } from 'sveltestrap';
	import Breadcrumb from '../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import data from '../../../common/data/invoices.js';
	import CardInvoice from './card-invoice.svelte';
	import Link from 'svelte-link';
</script>

<HeadTitle title="Invoice List" />

<Breadcrumb title="Invoices" pagetitle="Invoice List" />

<Row>
	{#each data.invoiceList as invoice}
		<CardInvoice data={invoice} />
	{/each}
</Row>
<Row>
	<Col xs="12">
		<div class="text-center my-3">
			<Link href="#" class="text-success">
				<i class="bx bx-loader bx-spin font-size-18 align-middle me-2" />
				Load more
			</Link>
		</div>
	</Col>
</Row>
