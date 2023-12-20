<script>
	import {
		Card,
		CardBody,
		CardTitle,
		Col,
		Row,
		Dropdown,
		DropdownToggle,
		DropdownMenu,
		DropdownItem,

		Button

	} from 'sveltestrap';
	import Breadcrumb from '../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import Link from 'svelte-link/src/Link.svelte';
	import Modal from '../../../common/Modal.svelte';

	import avatar1 from '../../../assets/images/users/avatar-1.jpg';
	import avatar2 from '../../../assets/images/users/avatar-2.jpg';
	import avatar4 from '../../../assets/images/users/avatar-4.jpg';
	import avatar5 from '../../../assets/images/users/avatar-5.jpg';
	import avatar6 from '../../../assets/images/users/avatar-6.jpg';
	import avatar7 from '../../../assets/images/users/avatar-7.jpg';
	import avatar8 from '../../../assets/images/users/avatar-8.jpg';
	import img1 from '../../../assets/images/companies/img-1.png';
	import img2 from '../../../assets/images/companies/img-2.png';
	import img3 from '../../../assets/images/companies/img-3.png';
	import img4 from '../../../assets/images/companies/img-4.png';
	import img5 from '../../../assets/images/companies/img-5.png';
	import img6 from '../../../assets/images/companies/img-6.png';

	let tasks = [
		{
			id: 'uptask-1',
			title: 'Topnav layout design',
			taskCategory: 'Waiting',
			status: 'upcoming',
			date: '14 Oct, 2019',
			assignees: [avatar4, avatar5, avatar2],
			budget: '$145'
		},
		{
			id: 'uptask-2',
			title: 'Create a New Landing UI',
			taskCategory: 'Approved',
			status: 'upcoming',
			date: '15 Oct, 2019',
			description: ['Separate existence is a myth.', 'For music, sport, etc'],
			assignees: [avatar1, avatar2, avatar5],
			budget: '$112'
		},
		{
			id: 'uptask-3',
			title: 'Create a Skote Logo',
			taskCategory: 'Waiting',
			status: 'upcoming',
			date: '15 Oct, 2019',
			assignees: [avatar4, avatar5, avatar4],
			budget: '$86'
		},
		{
			id: 'intask-1',
			title: 'Brand logo design',
			taskCategory: 'Complete',
			status: 'InProgress',
			date: '12 Oct, 2019',
			assignees: [img1, img2, img3],
			avatars: [avatar7, avatar8],
			budget: '$132'
		},
		{
			id: 'intask-2',
			title: 'Create a Blog Template UI',
			taskCategory: 'Pending',
			status: 'InProgress',
			date: '13 Oct, 2019',
			assignees: [avatar6, avatar4, avatar7,avatar4, avatar7],
			avatars: [avatar4, avatar5, avatar4],
			budget: '$103'
		},
		{
			id: 'intask-3',
			title: 'Skote Dashboard UI',
			taskCategory: 'Complete',
			status: 'InProgress',
			date: '13 Oct, 2019',
			assignees: [avatar4, avatar5,avatar4, avatar5],
			avatars: [avatar4, avatar5],
			budget: '$94'
		},
		{
			id: 'cmptask-1',
			title: 'Redesign - Landing page',
			taskCategory: 'Complete',
			status: 'Completed',
			date: '10 Oct, 2019',
			assignees: [avatar1, avatar2, avatar5],
			budget: '$145'
		},
		{
			id: 'cmptask-2',
			title: 'Multipurpose Landing',
			taskCategory: 'Complete',
			status: 'Completed',
			date: '09 Oct, 2019',
			assignees: [avatar4, avatar5, avatar4],
			images: [img4, img5, img6],
			avatars: [avatar4, avatar5, avatar6],
			additionalAssignee: {
				avatar: 'bg-pink',
				count: 5
			},
			budget: '$92'
		},
		{
			id: 'cmptask-3',
			title: 'Skote landing Psd',
			taskCategory: 'Waiting',
			status: 'Completed',
			date: '15 Oct, 2019',
			assignees: [avatar7, avatar8],
			additionalAssignee: {
				avatar: 'bg-info',
				count: 2
			},
			budget: '$86'
		}
	];

	const categoryColor = (category) => {
		switch (category.trim().toLowerCase()) {
			case 'waiting':
				return 'secondary';
				break;
			case 'approved':
				return 'primary';
				break;
			case 'complete':
				return 'success';
				break;
			case 'pending':
				return 'warning';
				break;
		}
	};

	const statuses = ['upcoming', 'InProgress', 'Completed'];
	let newTaskTitle = '';
	let isshowForm = false;

    const toggleModal = () => (isshowForm = !isshowForm)

	function handleDrop(event, status) {
		event.preventDefault();
		const taskId = event.dataTransfer.getData('text/plain');
		const taskIndex = tasks.findIndex((task) => task.id == taskId);

		if (taskIndex !== -1) {
			tasks[taskIndex].status = status;
		}
	}

	function allowDrop(event) {
		event.preventDefault();
	}

	function handleDragStart(event, taskId) {
		event.dataTransfer.setData('text/plain', taskId);
	}

	function addTask() {
		if (newTaskTitle.trim() !== '') {
			const newTask = {
				id: tasks.length + 1,
				title: newTaskTitle.trim(),
				status: 'Todo'
			};

			tasks = [...tasks, newTask];
			newTaskTitle = '';
		}
	}
</script>

<HeadTitle title="Kanban Board" />

<Breadcrumb title="Tasks" pagetitle="Kanban Board" />

<Row>
	{#each statuses as status}
		<Col lg="4">
			<Card>
				<CardBody>
					<Dropdown class="float-end">
						<DropdownToggle href="#" color="" class="arrow-none" tag="div">
							<i class="mdi mdi-dots-vertical m-0 text-muted h5" />
						</DropdownToggle>
						<DropdownMenu class="dropdown-menu-end" end>
							<DropdownItem href="#">Edit</DropdownItem>
							<DropdownItem href="#">Delete</DropdownItem>
						</DropdownMenu>
					</Dropdown>
					<CardTitle class="mb-4">
						{status}
					</CardTitle>

					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div
						class="pb-1 task-list"
						on:drop={(event) => handleDrop(event, status)}
						on:dragover={allowDrop}
					>
						{#each tasks.filter((task) => task.status === status) as task (task.id)}
							<div draggable="true" on:dragstart={(event) => handleDragStart(event, task.id)}>
								<Card class="task-box">
									<CardBody>
										<Dropdown class="float-end">
											<DropdownToggle href="#" color="" class="arrow-none" tag="div">
												<i class="mdi mdi-dots-vertical m-0 text-muted h5" />
											</DropdownToggle>
											<DropdownMenu class="dropdown-menu-end" end>
												<DropdownItem href="#">Edit</DropdownItem>
												<DropdownItem href="#">Delete</DropdownItem>
											</DropdownMenu>
										</Dropdown>

										<div class="float-end ms-2">
											<span
												class="badge rounded-pill badge-soft-{categoryColor(
													task.taskCategory
												)} font-size-12"
											>
												{task.taskCategory}
											</span>
										</div>
										<div>
											<h5 class="font-size-15">
												<Link href="#" class="text-dark" id="task-name">
													{task.title}
												</Link>
											</h5>
											<p class="text-muted mb-4">
												{task.date}
											</p>
										</div>
										{#if task.description}
											<ul class="ps-3 mb-4 text-muted" id="task-desc">
												{#each task.description as row}
													<li class="py-1">{row}</li>
												{/each}
											</ul>
										{/if}
										<div class="avatar-group float-start task-assigne">
											{#each task.assignees as assign,index}
											{#if index < 2}
											<div class="avatar-group-item">
												<Link href="#" class="d-inline-block" value="member-4">
													<img src={assign} alt="" class="rounded-circle avatar-xs" />
												</Link>
											</div>
											{/if}
											{/each}
											{#if task.assignees.length > 2}
											<div class="avatar-group-item">
												<Link href="#" class="d-inline-block">
													<div class="avatar-xs">
														<span class="avatar-title rounded-circle bg-info text-white font-size-16">
															{task.assignees.length - 2 +"+"}
														</span>
													</div>
												</Link>
											</div>
											{/if}
										</div>
										<div class="text-end">
											<h5 class="font-size-15 mb-1" id="task-budget">
												{task.budget}
											</h5>
											<p class="mb-0 text-muted">Budget</p>
										</div>
									</CardBody>
								</Card>
							</div>
						{/each}

						<div class="text-center d-grid">
							<Button color="primary" class=" waves-effect waves-light" on:click={toggleModal}
								><i class="mdi mdi-plus me-1" /> Add New</Button>
						</div>
					</div>
				</CardBody>
			</Card>
		</Col>
	{/each}
</Row>

<Modal isOpen={isshowForm} className="modal-lg">
	<div class="modal-content">
		<div class="modal-header">
			<h5 class="modal-title add-task-title">Add New Task</h5>
			<button type="button" class="btn-close" on:click={toggleModal}/>
		</div>
		<div class="modal-body">
			<form id="NewtaskForm" >
				<div class="form-group mb-3">
					<label for="taskname" class="col-form-label"
						>Task Name<span class="text-danger">*</span></label
					>
					<div class="col-lg-12">
						<input
							id="taskname"
							name="taskname"
							type="text"
							class="form-control validate"
							placeholder="Enter Task Name..."
							required
						/>
					</div>
				</div>
				<div class="form-group mb-3">
					<label class="col-form-label">Task Description</label>
					<div class="col-lg-12">
						<textarea id="taskdesc" class="form-control" name="taskdesc" />
					</div>
				</div>

				<div class="form-group mb-3">
					<label class="col-form-label">Add Team Member<span class="text-danger">*</span></label>
					<ul class="list-unstyled user-list validate" id="taskassignee">
						<li>
							<div class="form-check form-check-primary mb-2 d-flex align-items-center">
								<input class="form-check-input" type="checkbox" id="member-1" name="member[]" />
								<label class="form-check-label ms-2" for="member-1">Albert Rodarte</label>
								<img
									src={avatar1}
									class="rounded-circle avatar-xs m-1"
									alt=""
								/>
							</div>
						</li>
						<li>
							<div class="form-check form-check-primary mb-2 d-flex align-items-center">
								<input class="form-check-input" type="checkbox" id="member-2" name="member[]" />
								<label class="form-check-label ms-2" for="member-2">Hannah Glover</label>
								<img
									src={avatar2}
									class="rounded-circle avatar-xs m-1"
									alt=""
								/>
							</div>
						</li>
						<li>
							<div class="form-check form-check-primary mb-2 d-flex align-items-center">
								<input class="form-check-input" type="checkbox" id="member-3" name="member[]" />
								<label class="form-check-label ms-2" for="member-3">Adrian Rodarte</label>
								<img
									src={avatar2}
									class="rounded-circle avatar-xs m-1"
									alt=""
								/>
							</div>
						</li>
						<li>
							<div class="form-check form-check-primary mb-2 d-flex align-items-center">
								<input class="form-check-input" type="checkbox" id="member-4" name="member[]" />
								<label class="form-check-label ms-2" for="member-4">Frank Hamilton</label>
								<img
									src={avatar4}
									class="rounded-circle avatar-xs m-1"
									alt=""
								/>
							</div>
						</li>
						<li>
							<div class="form-check form-check-primary mb-2 d-flex align-items-center">
								<input class="form-check-input" type="checkbox" id="member-5" name="member[]" />
								<label class="form-check-label ms-2" for="member-5">Justin Howard</label>
								<img
									src={avatar5}
									class="rounded-circle avatar-xs m-1"
									alt=""
								/>
							</div>
						</li>
						<li>
							<div class="form-check form-check-primary mb-2 d-flex align-items-center">
								<input class="form-check-input" type="checkbox" id="member-6" name="member[]" />
								<label class="form-check-label ms-2" for="member-6">Michael Lawrence</label>
								<img
									src={avatar6}
									class="rounded-circle avatar-xs m-1"
									alt=""
								/>
							</div>
						</li>
						<li>
							<div class="form-check form-check-primary mb-2 d-flex align-items-center">
								<input class="form-check-input" type="checkbox" id="member-7" name="member[]" />
								<label class="form-check-label ms-2" for="member-7">Oliver Sharp</label>
								<img
									src={avatar7}
									class="rounded-circle avatar-xs m-1"
									alt=""
								/>
							</div>
						</li>
						<li>
							<div class="form-check form-check-primary mb-2 d-flex align-items-center">
								<input class="form-check-input" type="checkbox" id="member-8" name="member[]" />
								<label class="form-check-label ms-2" for="member-8">Richard Simpson</label>
								<img
									src={avatar8}
									class="rounded-circle avatar-xs m-1"
									alt=""
								/>
							</div>
						</li>
					</ul>
				</div>

				<div class="form-group mb-4">
					<label class="col-form-label">Status<span class="text-danger">*</span></label>
					<div class="col-lg-12">
						<select class="form-select validate" id="TaskStatus" required>
							<option value="" selected>Choose..</option>
							<option value="Waiting">Waiting</option>
							<option value="Approved">Approved</option>
							<option value="Pending">Pending</option>
							<option value="Complete">Complete</option>
						</select>
					</div>
				</div>

				<div class="form-group mb-4">
					<label for="taskbudget" class="col-form-label"
						>Budget<span class="text-danger">*</span></label
					>
					<div class="col-lg-12">
						<input
							id="taskbudget"
							name="taskbudget"
							type="number"
							placeholder="Enter Task Budget..."
							class="form-control"
							required
						/>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-10">
						<button type="button" class="btn btn-primary" id="addtask">Create Task</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</Modal>
