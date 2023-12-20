<script>
	import HeadTitle from '../../common/HeadTitle.svelte';
	import Breadcrumb from '../../common/Breadcrumb.svelte';
	import { Card, CardBody, Col, Row, Image, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'sveltestrap';

	import avatar1 from '../../assets/images/users/avatar-1.jpg';
	import Widget from './Widget.svelte';
	import Earninng from './Earninng.svelte';
	import SalesAnalytics from './SalesAnalytics.svelte';
	import TopSellingproduct from './TopSellingproduct.svelte';
	import Tasks from './Tasks.svelte';
	import Chat from './Chat.svelte';
</script>

<HeadTitle title="Saas Dashboard" />

<Breadcrumb title="Dashboards" pagetitle="Saas" />

<Row>
	<Col lg={12}>
		<Card>
			<CardBody>
				<Row>
					<Col lg={4}>
						<div class="d-flex">
							<div class="flex-shrink-0 me-3">
								<Image src={avatar1} alt="" class="avatar-md rounded-circle img-thumbnail" />
							</div>
							<div class="flex-grow-1 align-self-center">
								<div class="text-muted">
									<p class="mb-2">Welcome to Skote Dashboard</p>
									<h5 class="mb-1">Henry wells</h5>
									<p class="mb-0">UI / UX Designer</p>
								</div>
							</div>
						</div>
					</Col>
					<Col lg={4} class="align-self-center">
						<div class="text-lg-center mt-4 mt-lg-0">
							<Row>
								<Col xs={4}>
									<div>
										<p class="text-muted text-truncate mb-2">Total Projects</p>
										<h5 class="mb-0">48</h5>
									</div>
								</Col>
								<Col xs={4}>
									<div>
										<p class="text-muted text-truncate mb-2">Projects</p>
										<h5 class="mb-0">40</h5>
									</div>
								</Col>
								<Col xs={4}>
									<div>
										<p class="text-muted text-truncate mb-2">Clients</p>
										<h5 class="mb-0">18</h5>
										
									</div>
								</Col>
							</Row>
						</div>
					</Col>
					<Col lg={4} class="d-none d-lg-block">
						<div class="clearfix mt-4 mt-lg-0">
							<Dropdown class="float-end">
								<DropdownToggle color="primary">
									<i class="bx bxs-cog align-middle me-1"></i> Setting
								</DropdownToggle>
								<DropdownMenu end>
									<DropdownItem>Action</DropdownItem>
									<DropdownItem>Another action</DropdownItem>
									<DropdownItem>Something else</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</div>
					</Col>
				</Row>
			</CardBody>
		</Card>
	</Col>
</Row>

<Row>
	<Widget />
</Row>
<Row>
	<Earninng />
	<SalesAnalytics />
</Row>
<Row>
	<TopSellingproduct />
	<Tasks/>
	<Chat />
</Row>