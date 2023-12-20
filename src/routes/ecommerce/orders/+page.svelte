<script>
	import { Button, Card, CardBody, Col, ModalBody, ModalFooter, Row, Table } from 'sveltestrap';
	import Breadcrumb from '../../../common/Breadcrumb.svelte';
	import data from '../../../common/data/ecommerce';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import Link from 'svelte-link';
	import Modal from '../../../common/Modal.svelte';
	import img7 from '../../../assets/images/product/img-7.png';
	import img4 from '../../../assets/images/product/img-4.png';

	let show = false;
	const toggleOrderModal = () => {
		show = !show;
	};

	let isDelete = false;
	const toggleDeleteModal = () => {
		isDelete = !isDelete;
	};

	let isshowForm = false;
	const toggleFormModal = () => {
		isshowForm = !isshowForm;
	};
</script>

<HeadTitle title="Orders" />

<Breadcrumb title="Ecommerce" pagetitle="Orders" />

<Row>
	<div class="col-12">
		<Card>
			<CardBody>
				<Row class="mb-2">
					<Col sm={4}>
						<div class="search-box me-2 mb-2 d-inline-block">
							<div class="position-relative">
								<input type="text" class="form-control" placeholder="Search..." />
								<i class="bx bx-search-alt search-icon" />
							</div>
						</div>
					</Col>
					<Col sm={8}>
						<div class="text-sm-end">
							<Button
								type="button"
								color="success"
								class="btn-rounded waves-effect waves-light mb-2 me-2"
								on:click={toggleFormModal}
							>
								<i class="mdi mdi-plus me-1" /> Add New Order
							</Button>
						</div>
					</Col><!-- end col-->
				</Row>

				<div class="table-responsive">
					<Table class="align-middle table-nowrap table-check">
						<thead class="table-light">
							<tr>
								<th style="width: 20px;" class="align-middle">
									<div class="form-check font-size-16">
										<input class="form-check-input" type="checkbox" id="checkAll" />
										<label class="form-check-label" for="checkAll" />
									</div>
								</th>
								<th class="align-middle">Order ID</th>
								<th class="align-middle">Billing Name</th>
								<th class="align-middle">Date</th>
								<th class="align-middle">Total</th>
								<th class="align-middle">Payment Status</th>
								<th class="align-middle">Payment Method</th>
								<th class="align-middle">View Details</th>
								<th class="align-middle">Action</th>
							</tr>
						</thead>
						<tbody>
							{#each data.orders as order}
								<tr>
									<td>
										<div class="form-check font-size-16">
											<input class="form-check-input" type="checkbox" id="orderidcheck01" />
											<label class="form-check-label" for="orderidcheck01" />
										</div>
									</td>
									<td><Link href="/" class="text-body fw-bold">{order.orderId}</Link> </td>
									<td>{order.billingName}</td>
									<td>
										{order.orderdate}
									</td>
									<td>
										{order.total}
									</td>
									<td>
										<span class={'badge rounded-pill font-size-12 badge-soft-' + order.badgeclass}
											>{order.paymentStatus}</span
										>
									</td>
									<td>
										<i class={'me-1 fab ' + order.methodIcon} />
										{order.paymentMethod}
									</td>
									<td>
										<!-- Button trigger modal -->
										<Button
											type="button"
											color="primary"
											class="btn-sm btn-rounded"
											on:click={toggleOrderModal}
										>
											View Details
										</Button>
									</td>
									<td>
										<div class="d-flex gap-3">
											<Link href="#" class="text-success"><i class="mdi mdi-pencil font-size-18" /></Link>
											<Link href="#" class="text-danger" on:click={toggleDeleteModal}><i class="mdi mdi-delete font-size-18" /></Link>
										</div>
									</td>
								</tr>
							{/each}
						</tbody>
					</Table>
				</div>
				<ul class="pagination pagination-rounded justify-content-end mb-2">
					<li class="page-item disabled">
						<Link class="page-link" href="#" aria-label="Previous">
							<i class="mdi mdi-chevron-left" />
						</Link>
					</li>
					<li class="page-item active">
						<Link class="page-link" href="#">1</Link>
					</li>
					<li class="page-item"><Link class="page-link" href="#">2</Link></li>
					<li class="page-item"><Link class="page-link" href="#">3</Link></li>
					<li class="page-item"><Link class="page-link" href="#">4</Link></li>
					<li class="page-item"><Link class="page-link" href="#">5</Link></li>
					<li class="page-item">
						<Link class="page-link" href="#" aria-label="Next">
							<i class="mdi mdi-chevron-right" />
						</Link>
					</li>
				</ul>
			</CardBody>
		</Card>
	</div>
</Row>

<!-- Show Order Modal  -->
<Modal isOpen={show} className="modal-dialog-centered">
	<div class="modal-content">
		<div class="modal-header">
			<h5 class="modal-title">Order Details</h5>
			<Button type="button" color="" class="btn-close" on:click={toggleOrderModal} />
		</div>
		<ModalBody>
			<p class="mb-2">
				Product id: <span class="text-primary">#SK2540</span>
			</p>
			<p class="mb-4">
				Billing Name: <span class="text-primary">Neal Matthews</span>
			</p>

			<div class="table-responsive">
				<Table class="table align-middle table-nowrap">
					<thead>
						<tr>
							<th scope="col">Product</th>
							<th scope="col">Product Name</th>
							<th scope="col">Price</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">
								<div>
									<img src={img7} alt="" class="avatar-sm" />
								</div>
							</th>
							<td>
								<div>
									<h5 class="text-truncate font-size-14">Solid Color T-Shirt</h5>
									<p class="text-muted mb-0">$ 225 x 1</p>
								</div>
							</td>
							<td>$ 255</td>
						</tr>
						<tr>
							<th scope="row">
								<div>
									<img src={img4} alt="" class="avatar-sm" />
								</div>
							</th>
							<td>
								<div>
									<h5 class="text-truncate font-size-14">Hoodie (Blue)</h5>
									<p class="text-muted mb-0">$ 145 x 1</p>
								</div>
							</td>
							<td>$ 145</td>
						</tr>
						<tr>
							<td colSpan="2">
								<h6 class="m-0 text-right">Sub Total:</h6>
							</td>
							<td>$ 400</td>
						</tr>
						<tr>
							<td colSpan="2">
								<h6 class="m-0 text-right">Shipping:</h6>
							</td>
							<td>Free</td>
						</tr>
						<tr>
							<td colSpan="2">
								<h6 class="m-0 text-right">Total:</h6>
							</td>
							<td>$ 400</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</ModalBody>
		<ModalFooter>
			<Button type="button" color="secondary" on:click={toggleOrderModal}>Close</Button>
		</ModalFooter>
	</div>
</Modal>

<!--  Form Modal -->
<Modal isOpen={isshowForm} className="modal-dialog-centered">
	<div class="modal-content">
		<div class="modal-header">
			<h5 class="modal-title">Add New Order
			</h5>
			<Button type="button" color="" class="btn-close" on:click={toggleFormModal} />
		</div>
		<ModalBody>
			<form autocomplete="off" class="needs-validation createorder-form" id="createorder-form" novalidate>
				<Row>
					<Col lg="12">
						<input type="hidden" class="form-control" id="orderid-input">
						<div class="mb-3">
							<label for="customername-field" class="form-label">Customer Name</label>
							<input type="text" id="customername-field" class="form-control" placeholder="Enter name" required />
							<div class="invalid-feedback">Please enter a name.</div>
						</div>
						<div class="mb-3">
							<label for="orderdate-input" class="form-label">Order Date</label>
							<input type="text" id="orderdate-input" class="form-control" placeholder="Enter order date" data-date-format="dd M, yyyy" data-provide="datepicker" data-date-autoclose="true" required />
							<div class="invalid-feedback">Please select a date.</div>
						</div>
						<div class="mb-3">
							<label for="payamount-input" class="form-label">Amount</label>
							<input type="text" id="payamount-input" class="form-control" placeholder="Enter amount" required />
							<div class="invalid-feedback">Please enter amount.</div>
						</div>
					</Col>
					<Col lg="6">
						<div class="mb-3">
							<label for="paystatus-input" class="form-label">Payment Status</label>
							<select class="form-select" id="paystatus-input" required>
								<option value="Chargeback">Chargeback</option>
								<option value="Paid" selected>Paid</option>
								<option value="Refund">Refund</option>
							</select>
							<div class="invalid-feedback">Please select a payment status.</div>
						</div>
					</Col>
					<Col lg="6">
						<div class="mb-3">
							<label for="paymethod-input" class="form-label">Payment Method</label>
							<select class="form-select" id="paymethod-input">
								<option value="Mastercard">Mastercard</option>
								<option value="Visa">Visa</option>
								<option value="Paypal">Paypal</option>
								<option value="COD">COD</option>
							</select>
							<div class="invalid-feedback">Please select a payment method.</div>
						</div>
					</Col>
					<Col lg="12">
						<div class="text-end">
							<Button type="button" outline  color="secondary" on:click={toggleFormModal}>Cancel</Button>
							<Button type="submit" id="addNewOrder-btn" color="success">Create</Button>
						</div>
					</Col>
				</Row>
			</form>
		</ModalBody>
	</div>
</Modal>

<!-- Delete Modal -->
<Modal isOpen={isDelete} className="modal-dialog-centered modal-sm">
	<div class="modal-content">
		<ModalBody class="px-4 py-5 text-center">
			<Button type="button" color="" class="btn-close position-absolute end-0 top-0 m-3" on:click={toggleDeleteModal} />
			<div class="avatar-sm mb-4 mx-auto">
				<div class="avatar-title bg-primary text-primary bg-opacity-10 font-size-20 rounded-3">
					<i class="mdi mdi-trash-can-outline" />
				</div>
			</div>
			<p class="text-muted font-size-16 mb-4">Are you Sure You want to Remove this Order ?</p>

			<div class="hstack gap-2 justify-content-center mb-0">
				<Button type="button" color="danger" id="remove-item" on:click={toggleDeleteModal}>Remove Now</Button>
				<Button
					type="button"
					color="secondary"
					id="close-removeOrderModal"
					on:click={toggleDeleteModal}>Close</Button
				>
			</div>
		</ModalBody>
	</div>
</Modal>
