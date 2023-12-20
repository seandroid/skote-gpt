<script>
	import { Button, Card, CardBody, Col, ModalBody, Row, Table } from 'sveltestrap';
	import Breadcrumb from '../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import jobApplydata from '../../../common/data/job';
	import Link from 'svelte-link/src/Link.svelte';
	import Modal from '../../../common/Modal.svelte';

	let show = false;
	const toggle = () => {
		show = !show;
	};

	const typeColors = (color) => {
		switch (color) {
			case 'Internship':
				return 'warning';
				break;
			case 'Freelance':
				return 'info';
				break;
			case 'Full Time':
				return 'success';
				break;
			case 'Part Time':
				return 'danger';
				break;
			default:
				return 'warning';
				break;
		}
	};
	const statusColors = (color) => {
		switch (color) {
			case 'Active':
				return 'success';
				break;
			case 'Close':
				return 'danger';
				break;
			case 'New':
				return 'info';
				break;
			default:
				return 'info';
				break;
		}
	};
</script>

<HeadTitle title="Job Apply" />

<Breadcrumb title="Jobs" pagetitle="Job Apply" />

<Row>
	<Col lg="12">
		<Card>
			<CardBody class="border-bottom">
				<div class="d-flex align-items-center">
					<h5 class="mb-0 card-title flex-grow-1">Applied Jobs</h5>
					<div class="flex-shrink-0">
						<select class="form-select" aria-label="Default select example">
							<option value="Today" selected="">Today</option>
							<option value="1 Monthly">1 Month</option>
							<option value="6 Month">6 Month</option>
							<option value="1 Years">1 Year</option>
						</select>
					</div>
				</div>
			</CardBody>
			<CardBody>
				<div class="table-responsive">
					<Table class="align-middle nowrap" bordered>
						<thead>
							<tr>
								<th scope="col">No</th>
								<th scope="col">Job Title</th>
								<th scope="col">Company Name</th>
								<th scope="col">Type</th>
								<th scope="col">Apply Date</th>
								<th scope="col">Status</th>
								<th scope="col">Action</th>
							</tr>
						</thead>
						<tbody>
							{#each jobApplydata.jobApply as row}
								<tr>
									<td>{row.id}</td>
									<td>{row.jobTitle}</td>
									<td>{row.companyName}</td>
									<td><span class="badge badge-soft-{typeColors(row.type)}">{row.type}</span></td>
									<td>{row.applyDate}</td>
									<td><span class="badge text-bg-{statusColors(row.status)}">{row.status}</span></td
									>
									<td>
										<ul class="list-unstyled hstack gap-1 mb-0">
											<li>
												<Link href="/jobs/details" class="btn btn-sm btn-soft-primary"
													><i class="mdi mdi-eye-outline" /></Link
												>
											</li>
											<li>
												<Link href="#jobDelete" class="btn btn-sm btn-soft-danger" on:click={toggle}
													><i class="mdi mdi-delete-outline" /></Link
												>
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

<Modal size="sm" isOpen={show} className="modal-dialog-centered modal-sm">
	<div class="modal-content">
		<ModalBody class="px-4 py-5 text-center">
			<button type="button" on:click={toggle} class="btn-close position-absolute end-0 top-0 m-3" />
			<div class="avatar-sm mb-4 mx-auto">
				<div class="avatar-title bg-primary text-primary bg-opacity-10 font-size-20 rounded-3">
					<i class="mdi mdi-trash-can-outline" />
				</div>
			</div>
			<p class="text-muted font-size-16 mb-4">
				Are you sure you want to permanently erase the job.
			</p>

			<div class="hstack gap-2 justify-content-center mb-0">
				<button type="button" class="btn btn-danger">Delete Now</button>
				<button type="button" class="btn btn-secondary" on:click={toggle}>Close</button>
			</div>
		</ModalBody>
	</div>
</Modal>
