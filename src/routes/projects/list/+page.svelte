<script>
	import { Badge, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row, Table } from 'sveltestrap';
	import Breadcrumb from '../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import data from "../../../common/data/projects";
	import Link from 'svelte-link/src/Link.svelte';

</script>

<HeadTitle title="Projects List" />

<Breadcrumb title="Projects" pagetitle="Projects List" />

<Row>
	<Col lg="12">
	  <Card>
		<CardBody>

			<Row class=" mb-2">
				<div class="col-sm">
					<div class="search-box me-2 d-inline-block">
						<div class="position-relative">
							<input type="text" class="form-control" autocomplete="off" id="searchTableList" placeholder="Search...">
							<i class="bx bx-search-alt search-icon"></i>
						</div>
					</div>
				</div>
				<!-- end col -->
				<div class="col-sm-auto">
					<div class="text-sm-end">
						<Link href="/projects/create" class="btn btn-success btn-rounded"><i class="mdi mdi-plus me-1"></i> Add New Project</Link>
					</div>
				</div>
				<!-- end col -->
			</Row>

			<div class="table-responsive">
			  <Table
				class="project-list-table table-nowrap align-middle table-borderless"
			  >
				<thead class="table-light">
				  <tr>
					<th scope="col" style="width:100px"> # </th>
					<th scope="col">Projects</th>
					<th scope="col">Due Date</th>
					<th scope="col">Status</th>
					<th scope="col">Team</th>
					<th scope="col">Action</th>
				  </tr>
				</thead>
				<tbody>
				  {#each data.projects as project}
					<tr>
					  <td>
						<div class="avatar-sm bg-light rounded p-2">
						<img src={project.img} alt="" class="img-fluid rounded-circle" />
						</div>
					  </td>
					  <td>
						<h5 class="text-truncate font-size-14">
						  <Link
							to={'/#'}
							class="text-dark"
						  >
							{project.name}
						  </Link>
						</h5>
						<p class="text-muted mb-0">
						  {project.description}
						</p>
					  </td>
	
					  <td>
						{project.dueDate}
					  </td>
					  <td>
						<Badge
						  color={project.color}
						  class={"bg-" + project.color}
						>
						  {project.status}
						</Badge>
					  </td>
					  <td>
						<div class="avatar-group">
						  {#each project.team as team}
							{#if !team.img || team.img !== "Null"}
							  <div class="avatar-group-item">
								<Link
								  to="#"
								  class="d-inline-block"
								  id={"member" + team.id}
								>
								  <img
									src={team.img}
									class="rounded-circle avatar-xs"
									alt=""
								  />
								</Link>
							  </div>
							{:else}
							  <div class="avatar-group-item">
								<Link
								  to="#"
								  class="d-inline-block"
								  id={"member" + team.id}
								>
								  <div class="avatar-xs">
									<span
									  class={"avatar-title rounded-circle bg-" +
										team.color +
										" text-white font-size-16"}
									>
									  {team.name}
									</span>
								  </div>
								</Link>
							  </div>
							{/if}
						  {/each}
						</div>
					  </td>
					  <td>
						<Dropdown>
						  <DropdownToggle href="#" color="" class="card-drop" tag="div">
							<i class="mdi mdi-dots-horizontal font-size-18" />
						  </DropdownToggle>
						  <DropdownMenu class="dropdown-menu-end">
							<DropdownItem href="#">
							  <i
								class="mdi mdi-pencil font-size-16 text-success me-1"
							  />{" "}
							  Edit
							</DropdownItem>
							<DropdownItem href="#">
							  <i
								class="mdi mdi-trash-can font-size-16 text-danger me-1"
							  />{" "}
							  Delete
							</DropdownItem>
						  </DropdownMenu>
						</Dropdown>
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