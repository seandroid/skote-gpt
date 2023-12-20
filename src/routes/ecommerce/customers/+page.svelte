<script>
	import { Button, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, ModalBody, Row, Table } from 'sveltestrap';
	import Breadcrumb from '../../../common/Breadcrumb.svelte';
	import data from '../../../common/data/ecommerce';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import Link from 'svelte-link';
	import Modal from '../../../common/Modal.svelte';

	let isDelete = false;
	const toggleDeleteModal = () => {
		isDelete = !isDelete;
	};

	let isshowForm = false;
	const toggleFormModal = () => {
		isshowForm = !isshowForm;
	};
</script>

<HeadTitle title="Customers" />

<Breadcrumb title="Ecommerce" pagetitle="Customers" />

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
								<i class="mdi mdi-plus me-1" /> New Customers
							</Button>
						</div>
					</Col><!-- end col-->
				</Row>

				<div class="table-responsive">
					<Table class="align-middle table-nowrap table-check">
						<thead class="table-light">
							<tr>
							  <th>#</th>
							  <th>Username</th>
							  <th>Email</th>
							  <th>Phone</th>
							  <th>Address</th>
							  <th>Rating</th>
							  <th>Wallet Balance</th>
							  <th>Joining Date</th>
							  <th>Action</th>
							</tr>
						  </thead>
						  <tbody>
							{#each data.customerData as customer}
							  <tr>
								<td>
								  <div class="form-check font-size-16">
									<input
									  class="form-check-input"
									  type="checkbox"
									  id="customerlistcheck01"
									/>
									<label
									  class="form-check-label"
									  for="customerlistcheck01"
									/>
								  </div>
								</td>
								<td>{customer.username}</td>
								<td>
								  <p class="mb-0">{customer.email}</p>
								</td>
								<td>
								  <p class="mb-0">{customer.phone}</p>
								</td>
		  
								<td>{customer.address}</td>
								<td
								  ><span class="badge bg-success font-size-12"
									><i class="mdi mdi-star me-1" />
									{customer.rating}</span
								  ></td
								>
								<td>{customer.walletBalance}</td>
								<td>{customer.joiningDate}</td>
								<td>
								  <Dropdown>
									<DropdownToggle
									  class="card-drop"
									  tag="div"
									  color=""
									>
									  <i class="mdi mdi-dots-horizontal font-size-18" />
									</DropdownToggle>
									<DropdownMenu end>
									  <DropdownItem>
										<i
										  class="mdi mdi-pencil font-size-16 text-success me-1"
										/> Edit
									  </DropdownItem>
									  <DropdownItem on:click={toggleDeleteModal}>
										<i
										  class="mdi mdi-trash-can font-size-16 text-danger me-1"
										/> Delete
									  </DropdownItem>
									</DropdownMenu>
								  </Dropdown>
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

<!--  Form Modal -->
<Modal isOpen={isshowForm} className="modal-dialog-centered">
	<div class="modal-content">
		<div class="modal-header">
			<h5 class="modal-title">Add Customer
			</h5>
			<Button type="button" color="" class="btn-close" on:click={toggleFormModal} />
		</div>
		<ModalBody>
			<form autocomplete="off" class="needs-validation createCustomer-form" id="createCustomer-form" novalidate>
				<div class="row">
					<div class="col-lg-12">
						<input type="hidden" class="form-control" id="userid-input">
						<div class="mb-3">
							<label for="username-input" class="form-label">Customer Name</label>
							<input type="text" id="username-input" class="form-control" placeholder="Enter name" required />
							<div class="invalid-feedback">Please enter a name.</div>
						</div>
						<div class="mb-3">
							<label for="email-input" class="form-label">Email</label>
							<input type="email" id="email-input" class="form-control" placeholder="Enter email" required />
							<div class="invalid-feedback">Please enter email.</div>
						</div>
						<div class="mb-3">
							<label for="phone-input" class="form-label">Phone</label>
							<input type="text" id="phone-input" class="form-control" placeholder="Enter Phone" required />
							<div class="invalid-feedback">Please enter amount.</div>
						</div>
						<div class="mb-3">
							<label for="joindate-input" class="form-label">Join Date</label>
							<input type="text" id="joindate-input" class="form-control" placeholder="Select join date" data-date-format="dd M, yyyy" data-provide="datepicker" data-date-autoclose="true" required />
							<div class="invalid-feedback">Please select a join date.</div>
						</div>
					</div>
					
					<div class="col-lg-12">
						<div class="text-end">
							<Button type="button" color="secondary" outline on:click={toggleFormModal}>Cancel</Button>
							<Button type="submit" id="addCustomer-btn" color="success">Add Customer</Button>
						</div>
					</div>
				</div>
			</form>
		</ModalBody>
	</div>
</Modal>

<!-- Delete Modal -->
<Modal isOpen={isDelete} className="modal-dialog-centered modal-sm">
	<div class="modal-content customer-delete-modal">
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
