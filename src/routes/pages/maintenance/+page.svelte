<script>
	import { Card, CardBody, Col, Container, Row } from 'sveltestrap';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import Link from 'svelte-link';
	import logodark from "../../../assets/images/logo-dark.png"
	import logolight from "../../../assets/images/logo-light.png"
	import maintenance from "../../../assets/images/maintenance.svg"
</script>

<HeadTitle title="Maintenance Page" />
<div class="home-btn d-none d-sm-block">
	<Link href="/dashboard" class="text-dark"><i class="fas fa-home h2"></i></Link>
</div>
<section class="my-5 pt-sm-5">
	<Container>
		<Row>
			<Col xs="12" class="text-center">
				<div class="home-wrapper">
					<div class="mb-5">
						<Link href="/dashboard" class="d-block auth-logo">
							<img
								src={logodark}
								alt="logo"
								height="20"
								class="auth-logo-dark mx-auto"
							/>
							<img
								src={logolight}
								alt="logo"
								height="20"
								class="auth-logo-light mx-auto"
							/>
						</Link>
					</div>

					<Row class="justify-content-center">
						<Col sm={4}>
							<div class="maintenance-img">
								<img src={maintenance} alt="" class="img-fluid mx-auto d-block" />
							</div>
						</Col>
					</Row>
					<h3 class="mt-5">Site is Under Maintenance</h3>
					<p>Please check back in sometime.</p>

					<Row>
						<Col md="4">
							<Card class="mt-4 maintenance-box">
								<CardBody>
									<i class="bx bx-broadcast mb-4 h1 text-primary" />
									<h5 class="font-size-15 text-uppercase">Why is the Site Down?</h5>
									<p class="text-muted mb-0">
										There are many variations of passages of Lorem Ipsum available, but the majority
										have suffered alteration.
									</p>
								</CardBody>
							</Card>
						</Col>

						<Col md="4">
							<Card class="mt-4 maintenance-box">
								<CardBody>
									<i class="bx bx-time-five mb-4 h1 text-primary" />
									<h5 class="font-size-15 text-uppercase">What is the Downtime?</h5>
									<p class="text-muted mb-0">
										Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
										in a piece of classNameical.
									</p>
								</CardBody>
							</Card>
						</Col>

						<Col md="4">
							<Card class="mt-4 maintenance-box">
								<CardBody>
									<i class="bx bx-envelope mb-4 h1 text-primary" />
									<h5 class="font-size-15 text-uppercase">Do you need Support?</h5>
									<p class="text-muted mb-0">
										If you are going to use a passage of Lorem Ipsum, you need to be sure there
										isn&#39;t anything embar..
										<Link href="mailto:no-reply@domain.com" class="text-decoration-underline">
											no-reply@domain.com
										</Link>
									</p>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</div>
			</Col>
		</Row>
	</Container>
</section>
