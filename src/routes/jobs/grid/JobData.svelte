<script>
	import Link from 'svelte-link';
	import {
		Card,
		CardBody,
		Col,
		ModalBody,
		ModalHeader,
		Row,
		Label,
		Input,
		Button
	} from 'sveltestrap';
    import Modal from "../../../common/Modal.svelte"
	import adobe from '../../../assets/images/companies/adobe.svg';
	import adobephotoshop from '../../../assets/images/companies/adobe-photoshop.svg';
	import airbnb from '../../../assets/images/companies/airbnb.svg';
	import amazon from '../../../assets/images/companies/amazon.svg';
	import flutter from '../../../assets/images/companies/flutter.svg';
	import mailchimp from '../../../assets/images/companies/mailchimp.svg';
	import line from '../../../assets/images/companies/line.svg';
	import spotify from '../../../assets/images/companies/spotify.svg';
	import wordpress from '../../../assets/images/companies/wordpress.svg';
	import upwork from '../../../assets/images/companies/upwork.svg';
	import sass from '../../../assets/images/companies/sass.svg';
	import reddit from '../../../assets/images/companies/reddit.svg';

	let modal = false;
	const setModal = () => (modal = !modal);

	const jobsGridData = [
		{
			id: 1,
			img: adobe,
			title: 'Magento Developer'
		},
		{
			id: 2,
			img: adobephotoshop,
			title: 'Product Designer'
		},
		{
			id: 3,
			img: airbnb,
			title: 'Marketing Director'
		},
		{
			id: 4,
			img: amazon,
			title: 'Project Manager'
		},
		{
			id: 5,
			img: flutter,
			title: 'HTML Developer'
		},
		{
			id: 6,
			img: mailchimp,
			title: 'Business Associate'
		},
		{
			id: 7,
			img: line,
			title: 'Product Sales Specialist'
		},
		{
			id: 8,
			img: spotify,
			title: 'Magento Developer'
		},
		{
			id: 9,
			img: wordpress,
			title: 'Magento Developer'
		},
		{
			id: 10,
			img: upwork,
			title: 'Magento Developer'
		},
		{
			id: 11,
			img: sass,
			title: 'Magento Developer'
		},
		{
			id: 12,
			img: reddit,
			title: 'Magento Developer'
		}
	];
</script>

<Row>
	{#each jobsGridData as item}
		<Col xl={3} md={6}>
			<Card>
				<CardBody>
					<div class="favorite-icon">
						<Link href="#"><i class="uil uil-heart-alt fs-18" /></Link>
					</div>
					<img src={item.img} alt="" height="50" class="mb-3" />
					<h5 class="fs-17 mb-2">
						<Link href="/jobs/details" class="text-dark">{item.title}</Link>
						<small class="text-muted fw-normal">(0-2 Yrs Exp.)</small>
					</h5>
					<ul class="list-inline mb-0">
						<li class="list-inline-item">
							<p class="text-muted fs-14 mb-1">Skote Technology Pvt.Ltd</p>
						</li>
						{' '}
						<li class="list-inline-item">
							<p class="text-muted fs-14 mb-0"><i class="mdi mdi-map-marker" /> California</p>
						</li>
						<li class="list-inline-item">
							<p class="text-muted fs-14 mb-0"><i class="uil uil-wallet" /> $250 - $800 / month</p>
						</li>
					</ul>
					<div class="mt-3 hstack gap-2">
						<span class="badge rounded-1 badge-soft-success">Full Time</span>
						<span class="badge rounded-1 badge-soft-warning">Urgent</span>
						<span class="badge rounded-1 badge-soft-info">Private</span>
					</div>
					<div class="mt-4 hstack gap-2">
						<Link href="/jobs/details" class="btn btn-soft-success w-100">View Profile</Link>
						<Button on:click={setModal} class="btn btn-soft-primary w-100">Apply Now</Button>
					</div>
				</CardBody>
			</Card>
		</Col>
	{/each}
</Row>

<Row class="mb-3">
	<Col lg="12">
		<div class="d-flex justify-content-center">
			<nav aria-label="Page navigation example" id="pagination-element" class="mb-0">
				<div class="pagination-block pagination pagination-rounded">
					<Link href="#" class="page-link outline-none disabled" id="page-prev"
						><i class="bx bx-chevron-left align-middle" /></Link
					>
					<span id="page-num" class="outline-none pagination">
                        <Link class="page-link clickPageNumber " href="#" active>1</Link><Link
							class="page-link clickPageNumber"
							href="#">2</Link
						></span
					>
					<Link href="#" class="page-link outline-none" id="page-next"
						><i class="bx bx-chevron-right align-middle" /></Link
					>
				</div>
			</nav>
		</div>
	</Col>
</Row>

<Modal isOpen={modal} id="applyJobs">
	<div class="modal-content">
		<div id="applyJobsLabel" class="modal-header">
			<h5 class="modal-title"> Apply For This Job</h5>
            <Button class="btn-close" on:click={setModal}></Button>
		</div>
		<ModalBody>
			<Row>
				<Col lg={12}>
					<div class="mb-3">
						<Label htmlfor="fullnameInput" class="form-label">Full Name</Label>
						<Input
							type="text"
							class="form-control"
							id="fullnameInput"
							placeholder="Enter your name"
						/>
					</div>
				</Col>
				<Col lg={6}>
					<div class="mb-3">
						<Label htmlfor="emailInput" class="form-label">Email</Label>
						<Input
							type="email"
							class="form-control"
							id="emailInput"
							placeholder="Enter your email"
						/>
					</div>
				</Col>
				<Col lg={6}>
					<div class="mb-3">
						<Label htmlfor="phoneNumberInput" class="form-label">Phone Number</Label>
						<Input
							type="email"
							class="form-control"
							id="phoneNumberInput"
							placeholder="Enter your number"
						/>
					</div>
				</Col>
				<Col lg={12}>
					<div class="mb-3">
						<Label htmlfor="uploadResume" class="form-label">Upload Resume</Label>
						<Input type="file" class="form-control" id="uploadResume" placeholder="Upload resume" />
					</div>
				</Col>
				<Col lg={12}>
					<div class="mb-4">
						<Label htmlfor="messageInput" class="form-label">Message</Label>
						<textarea
							class="form-control"
							id="messageInput"
							rows="3"
							placeholder="Enter your message"
						/>
					</div>
				</Col>
				<Col lg={12}>
					<div class="text-end">
						<button class="btn btn-success me-1" on:click={setModal}
							>Send Application <i class="bx bx-send align-middle" /></button
						>
						<button class="btn btn-outline-secondary" on:click={setModal}>Cancel</button>
					</div>
				</Col>
			</Row>
		</ModalBody>
	</div>
</Modal>
