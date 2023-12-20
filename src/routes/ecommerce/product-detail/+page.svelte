<script>
	import { Button, Card, CardBody, Col, Image, Nav, NavItem, NavLink, Row, TabContent, TabPane, Table } from 'sveltestrap';
	import Breadcrumb from '../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import Link from 'svelte-link';
	import img4 from '../../../assets/images/product/img-4.png';
	import img6 from '../../../assets/images/product/img-6.png';
	import img7 from '../../../assets/images/product/img-7.png';
	import img8 from '../../../assets/images/product/img-8.png';
	import avatar2 from "../../../assets/images/users/avatar-2.jpg"
	import avatar4 from "../../../assets/images/users/avatar-4.jpg"
	import avatar5 from "../../../assets/images/users/avatar-5.jpg"
	let currTab=1;
</script>

<HeadTitle title="Product Detail" />

<Breadcrumb title="Ecommerce" pagetitle="Product Detail" />

<Row>
	<Col lg="12">
		<Card>
			<CardBody>
				<Row>
					<Col xl="6">
						<div class="product-detai-imgs">
							<Row>
								<Col md="2" sm="3" xs="4">
									<Nav>
										<NavItem>
											<NavLink href="#" active={currTab == 1} on:click={() => currTab = 1}>
												<Image src={img7} class="img-fluid mx-auto d-block rounded"/>
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink href="#" on:click={() => currTab = 2} active={currTab == 2}><Image src={img8}  class="img-fluid mx-auto d-block rounded"/></NavLink>
										</NavItem>
										<NavItem>
											<NavLink href="#" on:click={() => currTab = 3} active={currTab == 3}><Image src={img7} class="img-fluid mx-auto d-block rounded"/></NavLink>
										</NavItem>
										<NavItem>
											<NavLink href="#" on:click={() => currTab = 4} active={currTab == 4}><Image src={img8} class="img-fluid mx-auto d-block rounded"/></NavLink>
										</NavItem>
									</Nav>
								</Col>
								<Col md={{ size: 7, offset: 1 }} sm="9" xs="8">
									<TabContent>
										<TabPane class={currTab == 1 ? 'active' : ''}>	
											<Image src={img7} class="img-fluid mx-auto d-block rounded"/>
										</TabPane>
										<TabPane  class={currTab == 2 ? 'active' : ''}>	
											<Image src={img8} class="img-fluid mx-auto d-block rounded"/>
										</TabPane>
										<TabPane class={currTab == 3 ? 'active' : ''}>	
											<Image src={img7} class="img-fluid mx-auto d-block rounded"/>
										</TabPane>
										<TabPane class={currTab == 4 ? 'active' : ''}>	
											<Image src={img8} class="img-fluid mx-auto d-block rounded"/>
										</TabPane>
									</TabContent>
									<div class="text-center">
										<Button type="button" color="primary" class="waves-effect waves-light mt-2 me-1">
											<i class="bx bx-cart me-2"></i> Add to cart
										</Button>
										<Button type="button" color="success" class=" waves-effect mt-2 waves-light">
											<i class="bx bx-shopping-bag me-2"></i>Buy now
										</Button>
									</div>
								</Col>
							</Row>
						</div>
					</Col>
					<Col xl="6">
						<div class="mt-4 mt-xl-3">
							<Link href="#" class="text-primary">Headphone</Link>
							<h4 class="mt-1 mb-3">Wireless Headphone (Black)</h4>

							<p class="text-muted float-start me-3">
								<span class="bx bxs-star text-warning"></span>
								<span class="bx bxs-star text-warning"></span>
								<span class="bx bxs-star text-warning"></span>
								<span class="bx bxs-star text-warning"></span>
								<span class="bx bxs-star"></span>
							</p>
							<p class="text-muted mb-4">( 152 Customers Review )</p>

							<h6 class="text-success text-uppercase">20 % Off</h6>
							<h5 class="mb-4">Price : <span class="text-muted me-2"><del>$240 USD</del></span> <b>$225 USD</b></h5>
							<p class="text-muted mb-4">To achieve this, it would be necessary to have uniform grammar pronunciation and more common words If several languages coalesce</p>
							<div class="row mb-3">
								<div class="col-md-6">
									<div>
										<p class="text-muted"><i class="bx bx-unlink font-size-16 align-middle text-primary me-1"></i> Wireless</p>
										<p class="text-muted"><i class="bx bx-shape-triangle font-size-16 align-middle text-primary me-1"></i> Wireless Range : 10m</p>
										<p class="text-muted"><i class="bx bx-battery font-size-16 align-middle text-primary me-1"></i> Battery life : 6hrs</p>
									</div>
								</div>
								<div class="col-md-6">
									<div>
										<p class="text-muted"><i class="bx bx-user-voice font-size-16 align-middle text-primary me-1"></i> Bass</p>
										<p class="text-muted"><i class="bx bx-cog font-size-16 align-middle text-primary me-1"></i> Warranty : 1 Year</p>
									</div>
								</div>
							</div>

							<div class="product-color">
								<h5 class="font-size-15">Color :</h5>
								<Link href="#" active>
									<div class="product-color-item border rounded">
										<Image src={img7} alt="" class="avatar-md" />
									</div>
									<p>Black</p>
								</Link>
								<Link href="#">
									<div class="product-color-item border rounded">
										<Image src={img7} alt="" class="avatar-md" />
									</div>
									<p>Blue</p>
								</Link>
								<Link href="#">
									<div class="product-color-item border rounded">
										<Image src={img7} alt="" class="avatar-md" />
									</div>
									<p>Gray</p>
								</Link>
							</div>
					</Col>
				</Row>
				<div class="mt-5">
					<h5 class="mb-3">Specifications :</h5>

					<div class="table-responsive">
						<Table class="mb-0" bordered>
							<tbody>
								<tr>
									<th scope="row" style="width: 400px;">Category</th>
									<td>Headphone</td>
								</tr>
								<tr>
									<th scope="row">Brand</th>
									<td>JBL</td>
								</tr>
								<tr>
									<th scope="row">Color</th>
									<td>Black</td>
								</tr>
								<tr>
									<th scope="row">Connectivity</th>
									<td>Bluetooth</td>
								</tr>
								<tr>
									<th scope="row">Warranty Summary</th>
									<td>1 Year</td>
								</tr>
							</tbody>
						</Table>
					</div>
				</div>
				<div class="mt-5">
					<h5>Reviews :</h5>

					<div class="d-flex py-3 border-bottom">
						<div class="flex-shrink-0 me-3">
							<img src={avatar2} class="avatar-xs rounded-circle" alt="img" />
						</div>
						
						<div class="flex-grow-1">
							<h5 class="mb-1 font-size-15">Brian</h5>
							<p class="text-muted">If several languages coalesce, the grammar of the resulting language.</p>
							<ul class="list-inline float-sm-end mb-sm-0">
								<li class="list-inline-item">
									<Link href="#"><i class="far fa-thumbs-up me-1"></i> Like</Link>
								</li>
								<li class="list-inline-item">
									<Link href="#"><i class="far fa-comment-dots me-1"></i> Comment</Link>
								</li>
							</ul>
							<div class="text-muted font-size-12"><i class="far fa-calendar-alt text-primary me-1"></i> 5 hrs ago</div>
						</div>
					</div>
					<div class="d-flex py-3 border-bottom">
						<div class="flex-shrink-0 me-3">
							<img src={avatar4} class="avatar-xs rounded-circle" alt="img" />
						</div>
						
						<div class="flex-grow-1">
							<h5 class="font-size-15 mb-1">Denver</h5>
							<p class="text-muted">To an English person, it will seem like simplified English, as a skeptical Cambridge</p>
							<ul class="list-inline float-sm-end mb-sm-0">
								<li class="list-inline-item">
									<Link href="#"><i class="far fa-thumbs-up me-1"></i> Like</Link>
								</li>
								<li class="list-inline-item">
									<Link href="#"><i class="far fa-comment-dots me-1"></i> Comment</Link>
								</li>
							</ul>
							<div class="text-muted font-size-12"><i class="far fa-calendar-alt text-primary me-1"></i> 07 Oct, 2019</div>
							<div class="d-flex mt-4">
								<div class="flex-shrink-0 me-2">
									<img src={avatar5} class="avatar-xs me-3 rounded-circle" alt="img" />
								</div>
								
								<div class="flex-grow-1">
									<h5 class="mb-1 font-size-15">Henry</h5>
									<p class="text-muted">Their separate existence is a myth. For science, music, sport, etc.</p>
									<ul class="list-inline float-sm-end mb-sm-0">
										<li class="list-inline-item">
											<Link href="#"><i class="far fa-thumbs-up me-1"></i> Like</Link>
										</li>
										<li class="list-inline-item">
											<Link href="#"><i class="far fa-comment-dots me-1"></i> Comment</Link>
										</li>
									</ul>
									<div class="text-muted font-size-12"><i class="far fa-calendar-alt text-primary me-1"></i> 08 Oct, 2019</div>
								</div>
							</div>
						</div>
					</div>

					<div class="d-flex py-3 border-bottom">
						<div class="flex-shrink-0 me-3">
							<div class="avatar-xs">
								<span class="avatar-title bg-primary-subtle text-primary rounded-circle font-size-16">
									N
								</span>
							</div>
						</div>
						
						<div class="flex-grow-1">
							<h5 class="mb-1 font-size-15">Neal</h5>
							<p class="text-muted">Everyone realizes why a new common language would be desirable.</p>
							<ul class="list-inline float-sm-end mb-sm-0">
								<li class="list-inline-item">
									<Link href="#"><i class="far fa-thumbs-up me-1"></i> Like</Link>
								</li>
								<li class="list-inline-item">
									<Link href="#"><i class="far fa-comment-dots me-1"></i> Comment</Link>
								</li>
							</ul>
							<div class="text-muted font-size-12"><i class="far fa-calendar-alt text-primary me-1"></i> 05 Oct, 2019</div>
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	</Col>
</Row>

<Row class="mt-3">
	<Col lg="12">
		<div>
			<h5 class="mb-3">Recent product :</h5>

			<div class="row">
				<div class="col-xl-4 col-sm-6">
					<div class="card">
						<div class="card-body">
							<div class="row align-items-center">
								<div class="col-md-4">
									<img src={img7} alt="" class="img-fluid mx-auto d-block">
								</div>
								<div class="col-md-8">
									<div class="text-center text-md-start pt-3 pt-md-0">
										<h5 class="text-truncate"><Link href="#" class="text-dark">Wireless Headphone</Link></h5>
										<p class="text-muted mb-4">
											<i class="bx bxs-star text-warning"></i>
											<i class="bx bxs-star text-warning"></i>
											<i class="bx bxs-star text-warning"></i>
											<i class="bx bxs-star text-warning"></i>
											<i class="bx bxs-star"></i>
										</p>
										<h5 class="my-0"><span class="text-muted me-2"><del>$240</del></span> <b>$225</b></h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-4 col-sm-6">
					<div class="card">
						<div class="card-body">
							<div class="row align-items-center">
								<div class="col-md-4">
									<img src={img4} alt="" class="img-fluid mx-auto d-block">
								</div>
								<div class="col-md-8">
									<div class="text-center text-md-start pt-3 pt-md-0">
										<h5 class="text-truncate"><Link href="#" class="text-dark">Phone patterned cases</Link></h5>
										<p class="text-muted mb-4">
											<i class="bx bxs-star text-warning"></i>
											<i class="bx bxs-star text-warning"></i>
											<i class="bx bxs-star text-warning"></i>
											<i class="bx bxs-star text-warning"></i>
											<i class="bx bxs-star"></i>
										</p>
										<h5 class="my-0"><span class="text-muted me-2"><del>$150</del></span> <b>$145</b></h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-4 col-sm-6">
					<div class="card">
						<div class="card-body">
							<div class="row align-items-center">
								<div class="col-md-4">
									<img src={img6} alt="" class="img-fluid mx-auto d-block">
								</div>
								<div class="col-md-8">
									<div class="text-center text-md-start pt-3 pt-md-0">
										
										<h5 class="text-truncate"><Link href="#" class="text-dark">Phone Dark Patterned cases</Link></h5>
										<p class="text-muted mb-4">
											<i class="bx bxs-star text-warning"></i>
											<i class="bx bxs-star text-warning"></i>
											<i class="bx bxs-star text-warning"></i>
											<i class="bx bxs-star text-warning"></i>
											<i class="bx bxs-star"></i>
										</p>
										<h5 class="my-0"><span class="text-muted me-2"><del>$138</del></span> <b>$135</b></h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- end row -->
		</div>
	</Col>
</Row>
