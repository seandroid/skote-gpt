<script>
	import Link from 'svelte-link';

	import {
		Card,
		CardBody,
		CardTitle,
		Col,
		Container,
		Form,
		Input,
		Label,
		Nav,
		NavItem,
		NavLink,
		Row
	} from 'sveltestrap';

	import RangeSlider from 'svelte-range-slider-pips';
	import Breadcrumb from './../../../common/Breadcrumb.svelte';
	import data from '../../../common/data/ecommerce';
	import HeadTitle from '../../../common/HeadTitle.svelte';

	const FilterClothes = [
		{ id: 1, name: 'T-shirts', link: '#' },
		{ id: 2, name: 'Shirts', link: '#' },
		{ id: 3, name: 'Jeans', link: '#' },
		{ id: 4, name: 'Jackets', link: '#' }
	];
	let activeTab = 1;
</script>

<svelte:head>
	<style>
		:root{
			--range-range-inactive: #556ee6 !important;
			--range-handle-inactive: #556ee6 !important;
			--range-range: #556ee6 !important;
			--range-handle-focus: #556ee6 !important;
		}
	</style>
</svelte:head>

<HeadTitle title="Products" />

<Breadcrumb title="Ecommerce" pagetitle="Products" />
<Row>
	<Col lg="3">
		<Card>
			<CardBody>
				<CardTitle class="mb-4">Filter</CardTitle>
				<div>
					<h5 class="font-size-14 mb-3">Clothes</h5>

					<ul class="list-unstyled product-list">
						{#each FilterClothes as cloth}
							<li>
								<Link href={cloth.link}>
									<i class="mdi mdi-chevron-right me-1" />
									{cloth.name}
								</Link>
							</li>
						{/each}
					</ul>
				</div>
				<div class="mt-4 pt-3">
					<h5 class="font-size-14 mb-4">Price</h5>

					<RangeSlider
						min={0}
						max={1000}
						pipstep={100}
						pips
						range
						values={[200, 800]}
						first="label"
						last="label"
						prefix="$"
						float={true}
					/>
				</div>

				<div class="mt-4 pt-3">
					<h5 class="font-size-14 mb-3">Discount</h5>
					{#each data.discountData as discount}
						<div class="form-check mt-2">
							<input type="checkbox" value={discount.value} class="form-check-input" />
							<Label class="form-check-label">
								{discount.label}
							</Label>
						</div>
					{/each}
				</div>

				<div class="mt-4 pt-3">
					<h5 class="font-size-14 mb-3">Customer Rating</h5>
					<div>
						<div class="form-check mt-2">
							<input type="checkbox" class="form-check-input" id="productratingCheck1" />
							<Label class="form-check-label" htmlFor="productratingCheck1">
								4 <i class="bx bxs-star text-warning" /> & Above
							</Label>
						</div>
						<div class="form-check mt-2">
							<input type="checkbox" class="form-check-input" id="productratingCheck2" />
							<Label class="form-check-label" htmlFor="productratingCheck2">
								3 <i class="bx bxs-star text-warning" /> & Above
							</Label>
						</div>
						<div class="form-check mt-2">
							<input type="checkbox" class="form-check-input" id="productratingCheck3" />
							<Label class="form-check-label" htmlFor="productratingCheck3">
								2 <i class="bx bxs-star text-warning" /> & Above
							</Label>
						</div>
						<div class="form-check mt-2">
							<input type="checkbox" class="form-check-input" id="productratingCheck4" />
							<Label class="form-check-label" htmlFor="productratingCheck4">
								1 <i class="bx bxs-star text-warning" /> & Above
							</Label>
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	</Col>

	<Col lg="9">
		<Row class="mb-3">
			<Col xl="4" sm="6">
				<div class="mt-2">
					<h5>Clothes</h5>
				</div>
			</Col>
			<Col lg="8" sm="6">
				<Form class="mt-4 mt-sm-0 float-sm-end d-flex align-items-center">
					<div class="search-box me-2">
						<div class="position-relative">
							<Input type="text" class="form-control border-0" placeholder="Search..." />
							<i class="bx bx-search-alt search-icon" />
						</div>
					</div>
					<Nav class="product-view-nav" pills>
						<NavItem>
							<NavLink on:click={() => (activeTab = 1)} active={activeTab == 1}>
								<i class="bx bx-grid-alt align-middle" />
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink on:click={() => (activeTab = 2)} active={activeTab == 2}>
								<i class="bx bx-list-ul align-middle" />
							</NavLink>
						</NavItem>
					</Nav>
				</Form>
			</Col>
		</Row>
		<Row>
			{#each data.productsData as product}
				<Col xl="4" sm="6">
					<Card>
						<CardBody>
							<Link href="#">
								<div class="product-img position-relative">
									{#if product.isOffer}
										<div class="avatar-sm product-ribbon">
											<span class="avatar-title rounded-circle bg-primary">
												{`${product.offer}%`}
											</span>
										</div>
									{/if}
									<img src={product.image} alt="" class="img-fluid mx-auto d-block" />
								</div>
							</Link>
                            <div class="mt-4 d-flex align-items-center">
                                <div class="flex-grow-1">
                                    <h5 class="mb-1 text-truncate">
                                        <Link href="#" class="text-dark">{product.name}</Link>
                                    </h5>
                                    <div class="badge bg-success font-size-11">
                                        <i class="bx bxs-star me-1" />{product.rating}
                                    </div>
                                </div>
                                <div class="flex-shrink-0"><h5 class="my-0"><b>${product.newPrice}</b></h5></div>
                            </div>
						</CardBody>
					</Card>
				</Col>
			{/each}
		</Row>

        <Row>
            <Col lg="12">
                <div class="text-center mt-2 mb-5">
                    <Link href="#" class="text-success"><i class="bx bx-loader bx-spin font-size-18 align-middle me-2"></i> Load more </Link>
                </div>
            </Col>
        </Row>
	</Col>
</Row>
