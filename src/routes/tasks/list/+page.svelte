<script>
	import { Card, CardBody, CardTitle, Col, Row } from 'sveltestrap';
	import Breadcrumb from '../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import data from '../../../common/data/tasks';
	import Link from 'svelte-link/src/Link.svelte';
	import { onMount } from 'svelte';

	const options = {
		chart: {
			height: 280,
			type: 'line',
			stacked: !1,
			toolbar: {
				show: !1
			}
		},
		stroke: {
			width: [0, 2, 5],
			curve: 'smooth'
		},
		plotOptions: {
			bar: {
				columnWidth: '20%',
				endingShape: 'rounded'
			}
		},
		colors: ['#556ee6', '#34c38f'],
		series: [
			{
				name: 'Complete Tasks',
				type: 'column',
				data: [23, 11, 22, 27, 13, 22, 52, 21, 44, 22, 30]
			},
			{
				name: 'All Tasks',
				type: 'line',
				data: [23, 11, 34, 27, 17, 22, 62, 32, 44, 22, 39]
			}
		],
		fill: {
			gradient: {
				inverseColors: !1,
				shade: 'light',
				type: 'vertical',
				opacityFrom: 0.85,
				opacityTo: 0.55,
				stops: [0, 100, 100, 100]
			}
		},
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
		markers: {
			size: 0
		},

		yaxis: {
			min: 0
		}
	};
	onMount(() => {
		let chart = new ApexCharts(document.getElementById("taskChart"),options)
		chart.render();
	});
</script>

<HeadTitle title="Task List" />

<Breadcrumb title="Tasks" pagetitle="Task List" />

<Row>
	<Col lg={8}>
		{#each data.tasks as task}
			<Card>
				<CardBody>
					<CardTitle class="mb-4">{task.title}</CardTitle>
					<div class="table-responsive">
						<table class="table table-nowrap align-middle mb-0">
							<tbody>
								{#each task.tasks as item}
									<tr>
										<td style="width: 40px">
											<div class="form-check font-size-16">
												<input type="checkbox" class="form-check-input" id={item.id} />
												<label class="form-check-label" for={item.id} />
											</div>
										</td>
										<td>
											<h5 class="text-truncate font-size-14 m-0">
												<Link to="#" class="text-dark">
													{item.description}
												</Link>
											</h5>
										</td>
										<td>
											<div class="avatar-group">
												{#each item.members as member, index}
													{#if index < 2}
														<div class="avatar-group-item" key={index}>
															<Link to="#" class="d-inline-block">
																{#if member.userImg}
																	<img
																		src={member.userImg}
																		class="rounded-circle avatar-xs"
																		alt=""
																	/>
																{:else}
																	<div class="avatar-xs">
																		<span
																			class="avatar-title rounded-circle bg-success text-white font-size-16"
																		>
																			{member.username.charAt(0)}
																		</span>
																	</div>
																{/if}
															</Link>
														</div>
													{/if}
												{/each}
											</div>
										</td>
										<td>
											<div class="text-center">
												<span
													class={'badge rounded-pill badge-soft-primary font-size-11 ' +
														data.statusClasses[item.status.toLowerCase()]}
												>
													{item.status}
												</span>
											</div>
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</CardBody>
			</Card>
		{/each}
	</Col>

	<Col lg={4}>
		<Card>
			<CardBody>
				<CardTitle class="mb-4 h4">Tasks</CardTitle>
				<div class="" id="taskChart"/>
			</CardBody>
		</Card>
		<Card>
			<CardBody>
				<CardTitle class="mb-4">Recent Tasks</CardTitle>
				<div class="table-responsive">
					<table class="table table-nowrap align-middle mb-0">
						<tbody>
							{#each data.recenttasks.tasks as item}
								<tr>
									<td>
										<h5 class="text-truncate font-size-14 m-0">
											<Link to="#" class="text-dark">
												{item.description}
											</Link>
										</h5>
									</td>
									<td>
										<div class="avatar-group">
											{#each item.members as member, index}
												{#if index < 2}
													<div class="avatar-group-item" key={'member-' + index}>
														<Link to="#" class="d-inline-block">
															{#if member.userImg}
																<img src={member.userImg} class="rounded-circle avatar-xs" alt="" />
															{:else}
																<div class="avatar-xs">
																	<span
																		class="avatar-title rounded-circle bg-info text-white font-size-16"
																	>
																		{member.username.charAt(0)}
																	</span>
																</div>
															{/if}
														</Link>
													</div>
												{/if}
											{/each}
											{#if item.members.length > 2}
												<div class="avatar-group-item">
													<Link to="#" class="d-inline-block">
														<div class="avatar-xs">
															<span
																class="avatar-title rounded-circle bg-info text-white font-size-16"
															>
																{item.members.length - 2} +
															</span>
														</div>
													</Link>
												</div>
											{/if}
										</div>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</CardBody>
		</Card>
	</Col>
</Row>
