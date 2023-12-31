<script>

	import { Card, CardBody, CardTitle, Col, Progress, Row } from 'sveltestrap';

	import Breadcrumb from './../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
</script>

<HeadTitle title="Progress Bars" />

<Breadcrumb title="Ecommerce" pagetitle="Progress Bars" />

<Row>
	<Col lg={6}>
		<Card>
			<CardBody>
				<CardTitle class="h4">Default Examples</CardTitle>
				<p class="card-title-desc">
					Progress components are built with two HTML elements, some CSS to set the width, and a few
					attributes.
				</p>

				<div>
					<div class="mb-4">
						<Progress color="primary" value={25} />
					</div>
					

					<div class="mb-4">
						<Progress color="primary" value={50} />
					</div>

					<div class="mb-4">
						<Progress color="primary" value={75} />
					</div>

					<div>
						<Progress color="primary" value={100} />
					</div>
				</div>
			</CardBody>
		</Card>
	</Col>

	<Col lg={6}>
		<Card>
			<CardBody>
				<CardTitle class="h4">Backgrounds</CardTitle>
				<p class="card-title-desc">
					Use background utility classes to change the appearance of individual progress bars.
				</p>

				<div>
					<div class="mb-4">
						<Progress color="success" value={25} />
					</div>

					<div class="mb-4">
						<Progress color="info" value={50} />
					</div>

					<div class="mb-4">
						<Progress color="warning" value={75} />
					</div>

					<div>
						<Progress color="danger" value={100} />
					</div>
				</div>
			</CardBody>
		</Card>
	</Col>
</Row>

<Row>
	<Col lg={6}>
		<Card>
			<CardBody>
				<CardTitle class="h4">Labels Example</CardTitle>
				<p class="card-title-desc">
					Add labels to your progress bars by placing text within the
					<code class="highlighter-rouge">.progress-bar</code>.
				</p>

				<div class="">
					<Progress color="primary" value={25}>25%</Progress>
				</div>
			</CardBody>
		</Card>
	</Col>

	<Col lg={6}>
		<Card>
			<CardBody>
				<CardTitle class="h4">Multiple bars</CardTitle>
				<p class="card-title-desc">
					Include multiple progress bars in a progress component if you need.
				</p>

				<div class="">
					<Progress multi>
						<Progress bar color="primary" value={15} />
						<Progress bar color="success" value={30} />
						<Progress bar color="info" value={20} />
					</Progress>
				</div>
			</CardBody>
		</Card>
	</Col>
</Row>

<Row>
	<Col lg={6}>
		<Card>
			<CardBody>
				<CardTitle class="h4">Height</CardTitle>
				<p class="card-title-desc">
					We only set a
					<code class="highlighter-rouge">height</code> value on the
					<code class="highlighter-rouge">.progress-bar</code>, so if you change that value the
					outer
					<code class="highlighter-rouge">.progress</code> will automatically resize accordingly.
				</p>

				<div class="">
					<div class="mb-4">
						<h5 class="font-size-13">Progress sm</h5>
						<Progress value={25} color="primary" class="progress-sm" />
					</div>
					<div class="mb-4">
						<h5 class="font-size-13">Progress md</h5>
						<Progress value={40} color="success" class="progress-md" />
					</div>
					<div class="mb-4">
						<h5 class="font-size-13">Progress lg</h5>
						<Progress value={50} color="warning" class="progress-lg" />
					</div>
					<div>
						<h5 class="font-size-13">Progress xl</h5>
						<Progress value={70} color="danger" class="progress-xl" />
					</div>
				</div>
			</CardBody>
		</Card>
	</Col>

	<Col lg={6}>
		<Card>
			<CardBody>
				<CardTitle class="h4">Striped</CardTitle>
				<p class="card-title-desc">
					Add <code class="highlighter-rouge"> striped </code>
					to any to apply a stripe via CSS gradient over the progress bar’s background color.
				</p>

				<div class="">
					<div class="mb-4">
						<Progress striped color="primary" value={25} />
					</div>

					<div class="mb-4">
						<Progress striped color="success" value={40} />
					</div>
				</div>
			</CardBody>
		</Card>
		<Card>
			<CardBody>
				<CardTitle class="h4">Animated stripes</CardTitle>
				<p class="card-title-desc">
					The striped gradient can also be animated. Add <code>.progress-bar-animated</code>
					to <code>.progress-bar</code> to animate the stripes right to left via CSS3 animations.
				</p>
				<div class="">
					<Progress value={75} color="primary" animated />
				</div>
			</CardBody>
		</Card>
	</Col>
</Row>

<Row>
	<Col lg={6}>
		<Card>
			<CardBody>
				<CardTitle class="h4">Animated Progress</CardTitle>
				<p class="card-title-desc">
					Add <code>.animated-progess</code> class with
					<code>.progress-bar</code> for animated progressbar.
				</p>
				<div class="">
					<div class="animated-progess mb-4">
						<Progress value={10} color="primary" />
					</div>
					<div class="animated-progess mb-4">
						<Progress value={25} color="success" />
					</div>
					<div class="animated-progess mb-4">
						<Progress value={50} color="info" />
					</div>
					<div class="animated-progess mb-4">
						<Progress value={75} color="warning" />
					</div>
					<div class="animated-progess">
						<Progress value={100} color="danger" />
					</div>
				</div>
			</CardBody>
		</Card>
	</Col>
	<Col lg={6}>
		<Card>
			<CardBody>
				<CardTitle class="h4">Custom progress</CardTitle>
				<p class="card-title-desc mb-4">Example of Custom progress</p>

				<div class="">
					<div class="custom-progess mb-5">
						<Progress class="progress-sm" color="danger" value={84} max={100} />
						<div class="avatar-xs progress-icon">
							<span class="avatar-title rounded-circle border border-danger">
								<i class="bx bxl-html5 text-danger font-size-18" />
							</span>
						</div>
					</div>

					<div class="custom-progess mb-5">
						<Progress class="progress-sm" color="primary" value={75} max={100} />
						<div class="avatar-xs progress-icon">
							<span class="avatar-title rounded-circle border border-primary">
								<i class="bx bxl-css3 text-primary font-size-18" />
							</span>
						</div>
					</div>

					<div class="custom-progess mb-4">
						<Progress class="progress-sm" color="info" value={62} max={100} />
						<div class="avatar-xs progress-icon">
							<span class="avatar-title rounded-circle border border-info">
								<i class="bx bxl-jquery text-info font-size-18" />
							</span>
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	</Col>
</Row>
<Row>
	<Col xl="6">
		<Card>
			<CardBody>
				<CardTitle class="h5">Progress Example</CardTitle>
				<p class="card-title-desc">
					You can use these classes with existing components to create new ones.
				</p>
				<div class="mt-5">
					<div class="position-relative m-4">
						<Progress value={50} color="primary" style={'height: 1px'} />
						<button
							class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill"
							style={'width: 2rem;height: 2rem'}
						>
							1
						</button>
						<button
							class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill"
							style={'width: 2rem;height: 2rem'}
						>
							2
						</button>
						<button
							class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill"
							style={'width: 2rem;height: 2rem'}
						>
							3
						</button>
					</div>
				</div>
			</CardBody>
		</Card>
	</Col>
</Row>
