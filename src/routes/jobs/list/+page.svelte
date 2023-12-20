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
</script>

<HeadTitle title="Jobs List" />

<Breadcrumb title="Jobs" pagetitle="Jobs List" />

<Row>
	<Col lg="12">
		<Card>
			<CardBody class="border-bottom">
				<div class="d-flex align-items-center">
					<h5 class="mb-0 card-title flex-grow-1">Jobs Lists</h5>
					<div class="flex-shrink-0">
						<Link href="#" class="btn btn-primary">Add New Job</Link>
						<Link href="#" class="btn btn-light"><i class="mdi mdi-refresh" /></Link>
						<Dropdown class="dropdown d-inline-block">
							<DropdownToggle type="menu" class="btn btn-success" id="dropdownMenuButton1">
								<i class="mdi mdi-dots-vertical" /></DropdownToggle
							>
							<DropdownMenu>
								<DropdownItem href="#">Action</DropdownItem>
								<DropdownItem href="#">Another action</DropdownItem>
								<DropdownItem href="#">Something else here</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</div>
				</div>
			</CardBody>
			<CardBody class="border-bottom">
				<Row class="g-3">
					<Col xxl="4" lg="6">
						<Input
							type="search"
							class="form-control"
							id="searchTableList"
							placeholder="Search for ..."
						/>
					</Col>
					<Col xxl="2" lg="6">
						<select class="form-select" id="idStatus">
							<option value="all">Status</option>
							<option value="Active">Active</option>
							<option value="New">New</option>
							<option value="Close">Close</option>
						</select>
					</Col>
					<Col xxl="2" lg="4">
						<select class="form-select" id="idType">
							<option value="all">Select Type</option>
							<option value="Full Time">Full Time</option>
							<option value="Part Time">Part Time</option>
						</select>
					</Col>
					<Col xxl="2" lg="4">
						<Input type="date" class="form-control" />
					</Col>
					<Col xxl="2" lg="4">
						<Button type="button" color="secondary" class="btn-soft-secondary w-100">
							<i class="mdi mdi-filter-outline align-middle" /> Filter
						</Button>
					</Col>
				</Row>
			</CardBody>
			<CardBody>
				<div class="table-responsive">
					<Table class="align-middle nowrap" bordered>
						<thead>
							<tr>
								<th scope="col">No</th>
								<th scope="col">Job Title</th>
								<th scope="col">Company Name</th>
								<th scope="col">Location</th>
								<th scope="col">Experience</th>
								<th scope="col">Position</th>
								<th scope="col">Type</th>
								<th scope="col">Posted Date</th>
								<th scope="col">Last Date</th>
								<th scope="col">Status</th>
								<th scope="col">Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>Magento Developer</td>
								<td>Themesbrand</td>
								<td>California</td>
								<td>0-2 Years</td>
								<td>2</td>
								<td><span class="badge badge-soft-success">Full Time</span></td>
								<td>02 June 2021</td>
								<td>25 June 2021</td>
								<td><span class="badge bg-success">Active</span></td>
								<td>
									<ul class="list-unstyled hstack gap-1 mb-0">
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
											<Link href="job-details.html" class="btn btn-sm btn-soft-primary"
												><i class="mdi mdi-eye-outline" /></Link
											>
										</li>
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
											<Link href="#" class="btn btn-sm btn-soft-info"
												><i class="mdi mdi-pencil-outline" /></Link
											>
										</li>
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
											<Link href="#jobDelete" class="btn btn-sm btn-soft-danger"
												><i class="mdi mdi-delete-outline" /></Link
											>
										</li>
									</ul>
								</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Product Designer</td>
								<td>Web Technology pvt.ltd</td>
								<td>California</td>
								<td>1-2 Years</td>
								<td>3</td>
								<td><span class="badge badge-soft-danger">Part Time</span></td>
								<td>15 June 2021</td>
								<td>28 June 2021</td>
								<td><span class="badge bg-info">New</span></td>
								<td>
									<ul class="list-unstyled hstack gap-1 mb-0">
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
											<Link href="job-details.html" class="btn btn-sm btn-soft-primary"
												><i class="mdi mdi-eye-outline" /></Link
											>
										</li>
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
											<Link href="#" class="btn btn-sm btn-soft-info"
												><i class="mdi mdi-pencil-outline" /></Link
											>
										</li>
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
											<Link href="#jobDelete" class="btn btn-sm btn-soft-danger"
												><i class="mdi mdi-delete-outline" /></Link
											>
										</li>
									</ul>
								</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>Marketing Director</td>
								<td>Creative Agency</td>
								<td>Phoenix</td>
								<td>-</td>
								<td>5</td>
								<td><span class="badge badge-soft-success">Full Time</span></td>
								<td>02 June 2021</td>
								<td>25 June 2021</td>
								<td><span class="badge bg-danger">Close</span></td>
								<td>
									<ul class="list-unstyled hstack gap-1 mb-0">
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
											<Link href="job-details.html" class="btn btn-sm btn-soft-primary"
												><i class="mdi mdi-eye-outline" /></Link
											>
										</li>
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
											<Link href="#" class="btn btn-sm btn-soft-info"
												><i class="mdi mdi-pencil-outline" /></Link
											>
										</li>
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
											<Link href="#jobDelete" class="btn btn-sm btn-soft-danger"
												><i class="mdi mdi-delete-outline" /></Link
											>
										</li>
									</ul>
								</td>
							</tr>
							<tr>
								<th scope="row">4</th>
								<td>HTML Developer</td>
								<td>Web Technology pvt.ltd</td>
								<td>California</td>
								<td>0-4 Years</td>
								<td>8</td>
								<td><span class="badge badge-soft-success">Full Time</span></td>
								<td>02 June 2021</td>
								<td>25 June 2021</td>
								<td><span class="badge bg-success">Active</span></td>
								<td>
									<ul class="list-unstyled hstack gap-1 mb-0">
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
											<Link href="job-details.html" class="btn btn-sm btn-soft-primary"
												><i class="mdi mdi-eye-outline" /></Link
											>
										</li>
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
											<Link href="#" class="btn btn-sm btn-soft-info"
												><i class="mdi mdi-pencil-outline" /></Link
											>
										</li>
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
											<Link href="#jobDelete" class="btn btn-sm btn-soft-danger"
												><i class="mdi mdi-delete-outline" /></Link
											>
										</li>
									</ul>
								</td>
							</tr>
							<tr>
								<th scope="row">5</th>
								<td>Product Sales Specialist</td>
								<td>Skote Technology pvt.Ltd</td>
								<td>Louisiana</td>
								<td>5+ Years</td>
								<td>1</td>
								<td><span class="badge badge-soft-danger">Part Time</span></td>
								<td>02 June 2021</td>
								<td>25 June 2021</td>
								<td><span class="badge bg-info">New</span></td>
								<td>
									<ul class="list-unstyled hstack gap-1 mb-0">
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
											<Link href="job-details.html" class="btn btn-sm btn-soft-primary"
												><i class="mdi mdi-eye-outline" /></Link
											>
										</li>
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
											<Link href="#" class="btn btn-sm btn-soft-info"
												><i class="mdi mdi-pencil-outline" /></Link
											>
										</li>
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
											<Link href="#jobDelete" class="btn btn-sm btn-soft-danger"
												><i class="mdi mdi-delete-outline" /></Link
											>
										</li>
									</ul>
								</td>
							</tr>
							<tr>
								<th scope="row">6</th>
								<td>Magento Developer</td>
								<td>New Technology pvt.ltd</td>
								<td>Oakridge Lane Richardson</td>
								<td>0-2 Years</td>
								<td>2</td>
								<td><span class="badge badge-soft-info">Freelance</span></td>
								<td>02 June 2021</td>
								<td>25 June 2021</td>
								<td><span class="badge text-bg-info">New</span></td>
								<td>
									<ul class="list-unstyled hstack gap-1 mb-0">
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
											<Link href="job-details.html" class="btn btn-sm btn-soft-primary"
												><i class="mdi mdi-eye-outline" /></Link
											>
										</li>
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
											<Link href="#" class="btn btn-sm btn-soft-info"
												><i class="mdi mdi-pencil-outline" /></Link
											>
										</li>
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
											<Link href="#jobDelete" class="btn btn-sm btn-soft-danger"
												><i class="mdi mdi-delete-outline" /></Link
											>
										</li>
									</ul>
								</td>
							</tr>
							<tr>
								<th scope="row">7</th>
								<td>Business Associate</td>
								<td>Web Technology pvt.ltd</td>
								<td>California</td>
								<td>0-2 Years</td>
								<td>2</td>
								<td><span class="badge badge-soft-success">Full Time</span></td>
								<td>02 June 2021</td>
								<td>25 June 2021</td>
								<td><span class="badge text-bg-success">Active</span></td>
								<td>
									<ul class="list-unstyled hstack gap-1 mb-0">
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
											<Link href="job-details.html" class="btn btn-sm btn-soft-primary"
												><i class="mdi mdi-eye-outline" /></Link
											>
										</li>
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
											<Link href="#" class="btn btn-sm btn-soft-info"
												><i class="mdi mdi-pencil-outline" /></Link
											>
										</li>
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
											<Link href="#jobDelete" class="btn btn-sm btn-soft-danger"
												><i class="mdi mdi-delete-outline" /></Link
											>
										</li>
									</ul>
								</td>
							</tr>
							<tr>
								<th scope="row">8</th>
								<td>Magento Developer</td>
								<td>Adobe Agency</td>
								<td>California</td>
								<td>0-2 Years</td>
								<td>2</td>
								<td><span class="badge badge-soft-success">Full Time</span></td>
								<td>02 June 2021</td>
								<td>25 June 2021</td>
								<td><span class="badge text-bg-danger">Close</span></td>
								<td>
									<ul class="list-unstyled hstack gap-1 mb-0">
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
											<Link href="job-details.html" class="btn btn-sm btn-soft-primary"
												><i class="mdi mdi-eye-outline" /></Link
											>
										</li>
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
											<Link href="#" class="btn btn-sm btn-soft-info"
												><i class="mdi mdi-pencil-outline" /></Link
											>
										</li>
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
											<Link href="#jobDelete" class="btn btn-sm btn-soft-danger"
												><i class="mdi mdi-delete-outline" /></Link
											>
										</li>
									</ul>
								</td>
							</tr>
							<tr>
								<th scope="row">9</th>
								<td>HTML Developer</td>
								<td>Web Technology pvt.ltd</td>
								<td>California</td>
								<td>0-2 Years</td>
								<td>2</td>
								<td><span class="badge badge-soft-danger">Part Time</span></td>
								<td>02 June 2021</td>
								<td>25 June 2021</td>
								<td><span class="badge text-bg-info">New</span></td>
								<td>
									<ul class="list-unstyled hstack gap-1 mb-0">
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
											<Link href="job-details.html" class="btn btn-sm btn-soft-primary"
												><i class="mdi mdi-eye-outline" /></Link
											>
										</li>
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
											<Link href="#" class="btn btn-sm btn-soft-info"
												><i class="mdi mdi-pencil-outline" /></Link
											>
										</li>
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
											<Link href="#jobDelete" class="btn btn-sm btn-soft-danger"
												><i class="mdi mdi-delete-outline" /></Link
											>
										</li>
									</ul>
								</td>
							</tr>
							<tr>
								<th scope="row">10</th>
								<td>Marketing Director</td>
								<td>Web Technology pvt.ltd</td>
								<td>California</td>
								<td>0-2 Years</td>
								<td>2</td>
								<td><span class="badge badge-soft-warning">Internship</span></td>
								<td>02 June 2021</td>
								<td>25 June 2021</td>
								<td><span class="badge text-bg-success">Active</span></td>
								<td>
									<ul class="list-unstyled hstack gap-1 mb-0">
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
											<Link href="job-details.html" class="btn btn-sm btn-soft-primary"
												><i class="mdi mdi-eye-outline" /></Link
											>
										</li>
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
											<Link href="#" class="btn btn-sm btn-soft-info"
												><i class="mdi mdi-pencil-outline" /></Link
											>
										</li>
										<li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
											<Link href="#jobDelete" class="btn btn-sm btn-soft-danger"
												><i class="mdi mdi-delete-outline" /></Link
											>
										</li>
									</ul>
								</td>
							</tr>
						</tbody>
					</Table>
				</div>
				<div class="row justify-content-between align-items-center">
					<div class="col-auto me-auto">
						<p class="text-muted mb-0">Showing <b>1</b> to <b>12</b> of <b>45</b> entries</p>
					</div>
					<div class="col-auto">
						<div class="card d-inline-block ms-auto mb-0">
							<div class="card-body p-2">
								<nav aria-label="Page navigation example" class="mb-0">
									<ul class="pagination mb-0">
										<li class="page-item">
											<Link class="page-link" href="#" aria-label="Previous">
												<span aria-hidden="true">&laquo;</span>
											</Link>
										</li>
										<li class="page-item"><Link class="page-link" href="#">1</Link></li>
										<li class="page-item active"><Link class="page-link" href="#">2</Link></li>
										<li class="page-item"><Link class="page-link" href="#">3</Link></li>
										<li class="page-item"><Link class="page-link" href="#">...</Link></li>
										<li class="page-item"><Link class="page-link" href="#">12</Link></li>
										<li class="page-item">
											<Link class="page-link" href="#" aria-label="Next">
												<span aria-hidden="true">&raquo;</span>
											</Link>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					<!--end col-->
				</div>
			</CardBody>
		</Card>
	</Col>
</Row>
