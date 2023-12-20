<script>
	import { Alert, Card, CardBody, CardTitle, Col, Row } from 'sveltestrap';
	import Breadcrumb from '../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import Link from 'svelte-link/src/Link.svelte';
	let visible = false;
</script>

<HeadTitle title="Alerts" />
<Breadcrumb pagetitle="Alerts" title="UI Elements" />

<Row>
	<Col lg={6}>
		<Card>
			<CardBody>
				<CardTitle class="h4">Default Alerts</CardTitle>
				<p class="card-title-desc">
					Alerts are available for any length of text, as well as an optional dismiss button. For
					proper styling, use one of the four <strong>required</strong>
					contextual classes (e.g., <code> .alert-success</code>). For inline dismissal, use the
					alerts jQuery plugin.
				</p>

				<div class="">
					<Alert color="primary">A simple primary alert—check it out!</Alert>
					<Alert color="secondary" role="alert">A simple secondary alert—check it out!</Alert>
					<Alert color="success" role="alert">A simple success alert—check it out!</Alert>
					<Alert color="danger" role="alert">A simple danger alert—check it out!</Alert>
					<Alert color="warning" role="alert">A simple warning alert—check it out!</Alert>
					<Alert color="info" class="mb-0" role="alert">A simple info alert—check it out!</Alert>
				</div>
			</CardBody>
		</Card>
	</Col>

	<Col lg={6}>
		<Card>
			<CardBody>
				<CardTitle class="h4">Link color</CardTitle>
				<p class="card-title-desc">
					Use the{' '}
					<code class="highlighter-rouge">.alert-link</code>{' '}
					utility className to quickly provide matching colored links within any alert.
				</p>

				<div class="">
					<Alert color="primary">
						A simple primary alert with{' '}
						<Link href="#" class="alert-link">an example link</Link>
						. Give it a click if you like.
					</Alert>
					<Alert color="secondary">
						A simple secondary alert with{' '}
						<Link href="#" class="alert-link">an example link</Link>
						. Give it a click if you like.
					</Alert>
					<Alert color="success">
						A simple success alert with{' '}
						<Link href="#" class="alert-link">an example link</Link>
						. Give it a click if you like.
					</Alert>
					<Alert color="danger">
						A simple danger alert with{' '}
						<Link href="#" class="alert-link">an example link</Link>
						. Give it a click if you like.
					</Alert>
					<Alert color="warning">
						A simple warning alert with{' '}
						<Link href="#" class="alert-link">an example link</Link>
						. Give it a click if you like.
					</Alert>
					<Alert color="info" class="mb-0">
						A simple info alert with{' '}
						<Link href="#" class="alert-link">an example link</Link>
						. Give it a click if you like.
					</Alert>
				</div>
			</CardBody>
		</Card>
	</Col>
</Row>

<Row>
	<Col lg={6}>
		<Card>
			<CardBody>
				<CardTitle class="h4">Dismissing</CardTitle>
				<p class="card-title-desc">
					Add a dismiss button and the <code>.alert-dismissible</code>
					class, which adds extra padding to the right of the alert and positions the
					<code>.btn-close</code> button.
				</p>

				<div class="">
					<Alert color="primary" dismissible>A simple primary alert—check it out!</Alert>
					<Alert color="secondary" dismissible role="alert">
						A simple secondary alert—check it out!
					</Alert>
					<Alert color="success" dismissible role="alert">
						A simple success alert—check it out!
					</Alert>
					<Alert color="danger" dismissible role="alert">A simple danger alert—check it out!</Alert>
					<Alert color="warning" dismissible role="alert">
						A simple warning alert—check it out!
					</Alert>
					<Alert color="info" dismissible class="mb-0" role="alert">
						A simple info alert—check it out!
					</Alert>
				</div>
			</CardBody>
		</Card>
	</Col>

	<Col lg={6}>
		<Card>
			<CardBody>
				<CardTitle class="mb-4">With Icon</CardTitle>
				<div class="">
					<Alert color="primary" class="alert-dismissible fade show" dismissible role="alert">
						<i class="mdi mdi-bullseye-arrow me-2" />A simple primary alert—check it out!
					</Alert>
					<Alert color="secondary" class="alert-dismissible fade show" dismissible role="alert">
						<i class="mdi mdi-grease-pencil me-2" />A simple secondary alert—check it out!
					</Alert>
					<Alert color="success" class="alert-dismissible fade show" dismissible role="alert">
						<i class="mdi mdi-check-all me-2" />A simple success alert—check it out!
					</Alert>
					<Alert color="danger" class="alert-dismissible fade show" dismissible role="alert">
						<i class="mdi mdi-block-helper me-2" />A simple danger alert—check it out!
					</Alert>
					<Alert color="warning" class="alert-dismissible fade show" dismissible role="alert">
						<i class="mdi mdi-alert-outline me-2" />A simple warning alert—check it out!
					</Alert>
					<Alert color="info" class="alert-dismissible fade show mb-0" dismissible role="alert">
						<i class="mdi mdi-alert-circle-outline me-2" />A simple info alert—check it out!
					</Alert>
				</div>
			</CardBody>
		</Card>
	</Col>
</Row>
<Row>
	<Col lg={6}>
		<Card>
			<CardBody>
				<h4 class="card-title">Live Example</h4>
				<p class="card-title-desc">
					Click the button below to show an alert (hidden with inline styles to start), then dismiss
					(and destroy) it with the built-in close button.
				</p>
				<div class="">
					<div id="liveAlertPlaceholder">
						<Alert color="success" isOpen={visible} toggle={() => (visible = false)}>
							Nice, you triggered this alert message!
						</Alert>
					</div>
					<button
						type="button"
						class="btn btn-primary"
						on:click={() => (visible = !visible)}
						id="liveAlertBtn">Show live alert</button
					>
				</div>
			</CardBody>
		</Card>
	</Col>
	<Col xl={6}>
		<Card>
			<CardBody>
				<h4 class="card-title">Additional content</h4>
				<p class="card-title-desc">
					Alerts can also contain additional HTML elements like headings, paragraphs and dividers.
				</p>

				<div>
					<Alert color="success" role="alert">
						<h4 class="alert-heading">Well done!</h4>
						<p>
							Aww yeah, you successfully read this important alert message. This example text is
							going to run a bit longer so that you can see how spacing within an alert works with
							this kind of content.
						</p>
						<hr />
						<p class="mb-0">
							Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
						</p>
					</Alert>
				</div>
			</CardBody>
		</Card>
	</Col>
</Row>
