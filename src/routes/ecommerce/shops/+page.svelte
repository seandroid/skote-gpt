<script>
	import {
		Card,
		Col,
		Row,
	} from 'sveltestrap';
	import Breadcrumb from '../../../common/Breadcrumb.svelte';
	import data from '../../../common/data/ecommerce';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import Link from 'svelte-link';

</script>

<HeadTitle title="Shops" />

<Breadcrumb title="Ecommerce" pagetitle="Shops" />

<Row>
	{#each data.shops as shop}
		<Col xl="4" sm="6">
			<Card>
				<Row>
					<Col xl="5">
						<div class="text-center p-4 border-end">
							<div class="avatar-sm mx-auto mb-3 mt-1">
								<span
									class={'avatar-title rounded-circle bg-' +shop.color +'-subtle text-' +shop.color +' font-size-16'}>
									{shop.name.charAt(0)}
								</span>
							</div>
							<h5 class="text-truncate pb-1">{shop.name}</h5>
						</div>
					</Col>

					<Col xl="7">
						<div class="p-4 text-center text-xl-start">
							<Row>
								<Col xs="6">
									<div>
										<p class="text-muted mb-2 text-truncate">Products</p>
										<h5>{shop.product}</h5>
									</div>
								</Col>
								<Col xs="6">
									<div>
										<p class="text-muted mb-2 text-truncate">Wallet Balance</p>
										<h5>${shop.balance}</h5>
									</div>
								</Col>
							</Row>
							<div class="mt-4">
								<Link href="#" class="text-decoration-underline text-reset"
									>See Profile <i class="mdi mdi-arrow-right" /></Link
								>
							</div>
						</div>
					</Col>
				</Row>
			</Card>
		</Col>
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
