<script>
	import {
		Button,
		Card,
		CardBody,
		CardTitle,
		Col,
		Dropdown,
		DropdownItem,
		DropdownMenu,
		DropdownToggle,
		Form,
		FormGroup,
		Input,
		Label,
		Row,
		Table
	} from 'sveltestrap';
	import Breadcrumb from '../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import data from '../../../common/data/contacts';
	import Link from 'svelte-link';
	import Modal from '../../../common/Modal.svelte';
	import userdummyimg from '../../../assets/images/users/user-dummy-img.jpg';

	let ishowModal = false;
	const toggleModal = () => {
		ishowModal = !ishowModal;
	};
</script>

<HeadTitle title="Contacts Users List" />

<Breadcrumb title="Contacts" pagetitle="Users List" />

<Row>
	<Col lg="12">
		<Card>
			<CardBody>
				<Row class="mb-2">
					<Col sm="4">
						<div class="search-box me-2 mb-2 d-inline-block">
							<div class="position-relative">
								<input
									type="text"
									class="form-control"
									id="searchTableList"
									placeholder="Search..."
								/>
								<i class="bx bx-search-alt search-icon" />
							</div>
						</div>
					</Col>
					<Col sm="8">
						<div class="text-sm-end">
							<Button
								type="button"
								color="success"
								class="btn-rounded waves-effect waves-light mb-2"
								on:click={toggleModal}><i class="mdi mdi-plus me-1" /> New Contact</Button
							>
						</div>
					</Col>
				</Row>

				<div class="table-responsive">
					<Table class="align-middle table-nowrap table-hover">
						<thead class="table-light">
							<tr>
								<th scope="col" style="width: 70px;">#</th>
								<th scope="col">Name</th>
								<th scope="col">Email</th>
								<th scope="col">Tags</th>
								<th scope="col">Projects</th>
								<th scope="col">Action</th>
							</tr>
						</thead>
						<tbody>
							{#each data.users as user}
								<tr>
									<td>
										{#if !user.img}
											<div class="avatar-xs">
												<span class="avatar-title rounded-circle">
													{user.name.charAt(0)}
												</span>
											</div>
										{:else}
											<div>
												<img class="rounded-circle avatar-xs" src={user.img} alt="" />
											</div>
										{/if}
									</td>
									<td>
										<h5 class="font-size-14 mb-1">
											<Link href={'#'} class="text-dark">{user.name}</Link>
										</h5>
										<p class="text-muted mb-0">{user.designation}</p>
									</td>
									<td>{user.email}</td>
									<td>
										<div>
											{#each user.tags as tag, index}
												{#if index < 2}
													<Link href={'#'} class="badge badge-soft-primary font-size-11 m-1"
														>{tag}</Link
													>
												{/if}
											{/each}

											{#if user.tags.length > 2}
												<Link href="#" class="badge badge-soft-primary font-size-11 m-1">
													{user.tags.length - 1} + more
												</Link>
											{/if}
										</div>
									</td>
									<td> {user.projects} </td>
									<td>
										<ul class="list-inline font-size-20 contact-links mb-0">
											<li class="list-inline-item px-2">
												<Link href={'#'} title="Message"
													><i class="bx bx-message-square-dots" /></Link
												>
											</li>
											<li class="list-inline-item px-2">
												<Link href={'#'} title="Profile"><i class="bx bx-user-circle" /></Link>
											</li>
											<li class="list-inline-item px-2">
												<Dropdown class="float-end ms-2">
													<DropdownToggle tag="div" color="" class="text-muted">
														<i class="mdi mdi-dots-horizontal font-size-18" />
													</DropdownToggle>
													<DropdownMenu class="dropdown-menu-end">
														<DropdownItem href="#"
															><i class="mdi mdi-pencil font-size-16 text-success me-1" /> Edit</DropdownItem
														>
														<DropdownItem href="#"
															><i class="mdi mdi-trash-can font-size-16 text-danger me-1" /> Delete</DropdownItem
														>
													</DropdownMenu>
												</Dropdown>
											</li>
										</ul>
									</td>
								</tr>
							{/each}
						</tbody>
					</Table>
				</div>
			</CardBody>
		</Card>
	</Col>
</Row>

<Modal isOpen={ishowModal} className="modal-dialog-centered">
	<div class="modal-content">
		<div class="modal-header">
			<h5 class="modal-title" id="newContactModalLabel">Add Contact</h5>
			<Button
				type="button"
				class="btn-close"
				data-bs-dismiss="modal"
				aria-label="Close"
				on:click={toggleModal}
			/>
		</div>
		<div class="modal-body">
			<Form
				autocomplete="off"
				class="needs-validation createContact-form"
				id="createContact-form"
				novalidate=""
			>
				<Row>
					<Col lg="12">
						<Input type="hidden" class="form-control" id="userid-input" value="" />
						<div class="text-center mb-4">
							<div class="position-relative d-inline-block">
								<div class="position-absolute bottom-0 end-0">
									<label
										for="member-image-input"
										class="mb-0"
									>
										<div class="avatar-xs">
											<div
												class="avatar-title bg-light border rounded-circle text-muted cursor-pointer"
											>
												<i class="bx bxs-image-alt" />
											</div>
										</div>
									</label>
									<input
										class="form-control d-none"
										value=""
										id="member-image-input"
										type="file"
										accept="image/png, image/gif, image/jpeg"
									/>
								</div>
								<div class="avatar-lg">
									<div class="avatar-title bg-light rounded-circle">
										<img
											src={userdummyimg}
											id="member-img"
											class="avatar-md rounded-circle h-auto"
											alt=""
										/>
									</div>
								</div>
							</div>
						</div>
						<div class="mb-3">
							<label for="username-input" class="form-label">User Name</label>
							<Input
								type="text"
								id="username-input"
								class="form-control"
								placeholder="Enter name"
								required=""
							/>
							<div class="invalid-feedback">Please enter a name.</div>
						</div>
						<div class="mb-3">
							<label for="designation-input" class="form-label">Designation</label>
							<Input
								type="text"
								id="designation-input"
								class="form-control"
								placeholder="Enter Designation"
								required=""
							/>
							<div class="invalid-feedback">Please enter a designation.</div>
						</div>
						<div class="mb-3">
							<label for="email-input" class="form-label">Email</label>
							<Input
								type="email"
								id="email-input"
								class="form-control"
								placeholder="Enter email"
								required=""
							/>
							<div class="invalid-feedback">Please enter email.</div>
						</div>
						<div class="mb-3">
							<label for="tag-input" class="form-label">Tags</label>
							<select
								class="select2 form-control select2-multiple select2-hidden-accessible"
								id="tag-input"
							>
								<option value="Photoshop">Photoshop</option>
								<option value="illustrator">illustrator</option>
								<option value="Html">Html</option>
								<option value="Css">Css</option>
								<option value="Javascript">Javascript</option>
								<option value="Php">Php</option>
								<option value="Java">Java</option>
								<option value="Ruby">Ruby</option>
								<option value="Python">Python</option>
							</select>
						</div>
					</Col>

					<Col lg="12">
						<div class="text-end">
							<Button type="button" color="secondary" outline on:click={toggleModal}>Cancel</Button>
							<Button type="submit" color="success" id="addContact-btn">add</Button>
						</div>
					</Col>
				</Row>
			</Form>
		</div>
	</div>
</Modal>
