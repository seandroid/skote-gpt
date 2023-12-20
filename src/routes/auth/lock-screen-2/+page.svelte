<script>
	import Link from 'svelte-link';
	import {browser} from "$app/environment"
	import { Row, Col, Container, Form, Label, Input, Button } from 'sveltestrap';
	import Headtitle from '../../../common/HeadTitle.svelte';
	import logodark from '../../../assets/images/logo-dark.png';
	import logolight from '../../../assets/images/logo-light.png';
	import avatar1 from '../../../assets/images/users/avatar-1.jpg';
	import { onMount } from 'svelte';
	import CarouselPage from '../CarouselPage.svelte';

	onMount(() => {
		if (browser) {
			document.body.classList.add('auth-body-bg');
		}
	});
</script>

<Headtitle title="Lock Screen 2" />
<Container fluid class="p-0">
	<Row class="g-0">
		<CarouselPage />

		<Col xl={3}>
			<div class="auth-full-page-content p-md-5 p-4">
				<div class="w-100">
					<div class="d-flex flex-column h-100">
						<div class="mb-4 mb-md-5">
							<Link href="/dashboard" class="d-block auth-logo">
								<img src={logodark} alt="" height="18" class="auth-logo-dark" />
								<img src={logolight} alt="" height="18" class="auth-logo-light" />
							</Link>
						</div>
						<div class="my-auto">
							<div>
								<h5 class="text-primary">Lock screen</h5>
								<p class="text-muted">Enter your password to unlock the screen!</p>
							</div>

							<div class="mt-4">
								<Form class="form-horizontal" action="/">
									<div class="user-thumb text-center mb-4">
										<img
											src={avatar1}
											class="rounded-circle img-thumbnail avatar-md"
											alt="thumbnail"
										/>
										<h5 class="font-size-15 mt-3">Maria Laird</h5>
									</div>

									<div class="mb-3">
										<Label for="userpassword">Password</Label>
										<Input
											type="password"
											class="form-control"
											id="userpassword"
											placeholder="Enter password"
										/>
									</div>

									<div class="text-end">
										<Button color="primary" class="w-md waves-effect waves-light" type="submit"
											>Unlock</Button
										>
									</div>
								</Form>

								<div class="mt-5 text-center">
									<p>
										Not you ? return
										<Link href="/auth/login-2" class="fw-medium text-primary">Sign In</Link>
									</p>
								</div>
							</div>
						</div>

						<div class="mt-4 mt-md-5 text-center">
							<p class="mb-0">
								©
								{new Date().getFullYear()}
								Skote. Crafted with
								<i class="mdi mdi-heart text-danger" /> by Themesbrand
							</p>
						</div>
					</div>
				</div>
			</div>
		</Col>
	</Row>
</Container>
