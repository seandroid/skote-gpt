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
	import Link from 'svelte-link';
	import profileimg from "../../../assets/images/profile-img.png"
	import avatar1 from "../../../assets/images/users/avatar-1.jpg"
	import RevenueChart from './RevenueChart.svelte';
</script>

<HeadTitle title="Profile" />

<Breadcrumb title="Contacts" pagetitle="Profile" />

<Row>
	<Col xl="4">
	  <Card class="overflow-hidden">
		<div class="bg-primary-subtle">
		  <Row>
			<Col xs="7">
			  <div class="text-primary p-3">
				<h5 class="text-primary">Welcome Back !</h5>
				<p>It will seem like simplified</p>
			  </div>
			</Col>
			<Col xs="5" class="align-self-end">
			  <img
				src={profileimg}
				alt=""
				class="img-fluid"
			  />
			</Col>
		  </Row>
		</div>
		<CardBody class="pt-0">
		  <Row>
			<Col sm="4">
			  <div class="avatar-md profile-user-wid mb-4">
				<img
				  src={avatar1}
				  alt=""
				  class="img-thumbnail rounded-circle"
				/>
			  </div>
			  <h5 class="font-size-15 text-truncate">Cynthia Price</h5>
			  <p class="text-muted mb-0 text-truncate">UI/UX Designer</p>
			</Col>

			<Col sm={8}>
			  <div class="pt-4">
				<Row>
				  <Col xs="6">
					<h5 class="font-size-15">125</h5>
					<p class="text-muted mb-0">Projects</p>
				  </Col>
				  <Col xs="6">
					<h5 class="font-size-15">$1245</h5>
					<p class="text-muted mb-0">Revenue</p>
				  </Col>
				</Row>
				<div class="mt-4">
				  <Link to="" class="btn btn-primary btn-sm">
					View Profile{" "}
					<i class="mdi mdi-arrow-right ms-1" />
				  </Link>
				</div>
			  </div>
			</Col>
		  </Row>
		</CardBody>
	  </Card>

	  <Card>
		<CardBody>
		  <CardTitle class="mb-4 h4">Personal Information</CardTitle>

		  <p class="text-muted mb-4">
			Hi I'm Cynthia Price,has been the industry's standard dummy text
			To an English person, it will seem like simplified English, as a
			skeptical Cambridge.
		  </p>

		  <div class="table-responsive">
			<div class="table-responsive">
			  <Table class="table-nowrap mb-0">
				<tbody>
				  <tr>
					<th scope="row">Full Name :</th>
					<td>Cynthia Price</td>
				  </tr>
				  <tr>
					<th scope="row">Mobile :</th>
					<td>(123) 123 1234</td>
				  </tr>
				  <tr>
					<th scope="row">E-mail :</th>
					<td>admin@themesbrand.com</td>
				  </tr>
				  <tr>
					<th scope="row">Location :</th>
					<td>California, United States</td>
				  </tr>
				</tbody>
			  </Table>
			</div>
		  </div>
		</CardBody>
	  </Card>

	  <Card>
		<CardBody>
		  <CardTitle class="mb-5">Experience</CardTitle>
		  <div class="">
			<ul class="verti-timeline list-unstyled">
			  <li class="event-list active">
				<div class="event-timeline-dot">
				  <i class="bx bx-right-arrow-circle bx-fade-right" />
				</div>
				<div class="d-flex">
				  <div class="flex-shrink-0 me-3">
					<i class="bx bx-server h4 text-primary" />
				  </div>
				  <div class="flex-grow-1">
					<div>
					  <h5 class="font-size-15">
						<Link htef="#" class="text-dark"
						  >Back end Developer</Link
						>
					  </h5>
					  <span class="text-primary">2016 - 19</span>
					</div>
				  </div>
				</div>
			  </li>
			  <li class="event-list">
				<div class="event-timeline-dot">
				  <i class="bx bx-right-arrow-circle" />
				</div>
				<div class="d-flex">
				  <div class="flex-shrink-0 me-3">
					<i class="bx bx-code h4 text-primary" />
				  </div>
				  <div class="flex-grow-1">
					<div>
					  <h5 class="font-size-15">
						<Link htef="#" class="text-dark"
						  >Front end Developer</Link
						>
					  </h5>
					  <span class="text-primary">2013 - 16</span>
					</div>
				  </div>
				</div>
			  </li>
			  <li class="event-list">
				<div class="event-timeline-dot">
				  <i class="bx bx-right-arrow-circle" />
				</div>
				<div class="d-flex">
				  <div class="flex-shrink-0 me-3">
					<i class="bx bx-edit h4 text-primary" />
				  </div>
				  <div class="flex-grow-1">
					<div>
					  <h5 class="font-size-15">
						<Link htef="#" class="text-dark"
						  >UI /UX Designer</Link
						>
					  </h5>
					  <span class="text-primary">2011 - 13</span>
					</div>
				  </div>
				</div>
			  </li>
			</ul>
		  </div>
		</CardBody>
	  </Card>
	</Col>

	<Col xl="8">
	  <Row>
		<Col md={4}>
		  <Card class="mini-stats-wid">
			<CardBody>
			  <div class="d-flex">
				<div class="flex-grow-1">
				  <p class="text-muted fw-medium mb-2">Completed Projects</p>
				  <h4 class="mb-0">125</h4>
				</div>

				<div class="flex-shrink-0 align-self-center">
				  <div
					class="mini-stat-icon avatar-sm rounded-circle bg-primary"
				  >
					<span class="avatar-title">
					  <i class="bx bx-check-circle font-size-24" />
					</span>
				  </div>
				</div>
			  </div>
			</CardBody>
		  </Card>
		</Col>
		<Col md={4}>
		  <Card class="mini-stats-wid">
			<CardBody>
			  <div class="d-flex">
				<div class="flex-grow-1">
				  <p class="text-muted fw-medium mb-2">Pending Projects</p>
				  <h4 class="mb-0">12</h4>
				</div>

				<div class="flex-shrink-0 align-self-center">
				  <div
					class="avatar-sm mini-stat-icon rounded-circle bg-primary"
				  >
					<span class="avatar-title">
					  <i class="bx bx-hourglass font-size-24" />
					</span>
				  </div>
				</div>
			  </div>
			</CardBody>
		  </Card>
		</Col>
		<Col md={4}>
		  <Card class="mini-stats-wid">
			<CardBody>
			  <div class="d-flex">
				<div class="flex-grow-1">
				  <p class="text-muted fw-medium mb-2">Total Revenue</p>
				  <h4 class="mb-0">$36,524</h4>
				</div>

				<div class="flex-shrink-0 align-self-center">
				  <div
					class="avatar-sm mini-stat-icon rounded-circle bg-primary"
				  >
					<span class="avatar-title">
					  <i class="bx bx-package font-size-24" />
					</span>
				  </div>
				</div>
			  </div>
			</CardBody>
		  </Card>
		</Col>
	  </Row>
	  <Card>
		<CardBody>
		  <CardTitle class="mb-4 h4">Revenue</CardTitle>
		  <RevenueChart />
		</CardBody>
	  </Card>
	  <Card>
		<CardBody>
		  <CardTitle class="mb-4 h4">My Projects</CardTitle>
		  <div class="table-responsive">
			<Table class="table-nowrap table-hover mb-0">
			  <thead>
				<tr>
				  <th scope="col">#</th>
				  <th scope="col">Projects</th>
				  <th scope="col">Start Date</th>
				  <th scope="col">Deadline</th>
				  <th scope="col">Budget</th>
				</tr>
			  </thead>
			  <tbody>
				<tr>
				  <th scope="row">1</th>
				  <td>Skote admin UI</td>
				  <td>2 Sep, 2019</td>
				  <td>20 Oct, 2019</td>
				  <td>$506</td>
				</tr>

				<tr>
				  <th scope="row">2</th>
				  <td>Skote admin Logo</td>
				  <td>1 Sep, 2019</td>
				  <td>2 Sep, 2019</td>
				  <td>$94</td>
				</tr>
				<tr>
				  <th scope="row">3</th>
				  <td>Redesign - Landing page</td>
				  <td>21 Sep, 2019</td>
				  <td>29 Sep, 2019</td>
				  <td>$156</td>
				</tr>
				<tr>
				  <th scope="row">4</th>
				  <td>App Landing UI</td>
				  <td>29 Sep, 2019</td>
				  <td>04 Oct, 2019</td>
				  <td>$122</td>
				</tr>
				<tr>
				  <th scope="row">5</th>
				  <td>Blog Template</td>
				  <td>05 Oct, 2019</td>
				  <td>16 Oct, 2019</td>
				  <td>$164</td>
				</tr>
				<tr>
				  <th scope="row">6</th>
				  <td>Redesign - Multipurpose Landing</td>
				  <td>17 Oct, 2019</td>
				  <td>05 Nov, 2019</td>
				  <td>$192</td>
				</tr>
				<tr>
				  <th scope="row">7</th>
				  <td>Logo Branding</td>
				  <td>04 Nov, 2019</td>
				  <td>05 Nov, 2019</td>
				  <td>$94</td>
				</tr>
			  </tbody>
			</Table>
		  </div>
		</CardBody>
	  </Card>
	</Col>
  </Row>