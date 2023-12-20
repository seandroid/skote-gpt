<script>
	import { auth } from '$lib/firebase';
	import { signInWithEmailAndPassword } from 'firebase/auth';
	import Link from 'svelte-link';
	import {
		Row,
		Col,
		CardBody,
		Card,
		Container,
		Form,
		Label,
		Input,
		Button,
		Alert
	} from 'sveltestrap';
	import Headtitle from '../../../common/HeadTitle.svelte';
	import profileImg from '../../../assets/images/profile-img.png';
	import logolight from '../../../assets/images/logo-light.svg';
	import logo from '../../../assets/images/logo.svg';
	import { goto } from '$app/navigation';

	let email = '';
	let password = '';
	let isOpen = false;
	let msg = '';
	let status = '';

	async function onSubmit(e) {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, email, password);
			localStorage.setItem('authUser', JSON.stringify({ email }));
			isOpen = true;
			msg = 'Authentication success';
			status = 'success';
			goto('/dashboard');
		} catch (error) {
			console.error('Error:', error);
			isOpen = true;
			msg = error.message;
			status = 'danger';
		}
	}
</script>

<Headtitle title="Login" />
<div class="account-pages my-5 pt-sm-5">
	<Container>
		<Row class="justify-content-center">
			<Col md={8} lg={6} xl={5}>
				<Card class="overflow-hidden">
					<div class="bg-primary-subtle">
						<Row>
							<Col class="col-7">
								<div class="text-primary p-4">
									<h5 class="text-primary">Welcome Back !</h5>
									<p>Sign in to continue to Skote.</p>
								</div>
							</Col>
							<Col class="col-5 align-self-end">
								<img src={profileImg} alt="" class="img-fluid" />
							</Col>
						</Row>
					</div>
					<CardBody class="pt-0">
						<div class="auth-logo">
							<Link href="/" class="auth-logo-light">
								<div class="avatar-md profile-user-wid mb-4">
									<span class="avatar-title rounded-circle bg-light">
										<img src={logolight} alt="" class="rounded-circle" height="34" />
									</span>
								</div>
							</Link>
							<Link href="/" class="auth-logo-dark">
								<div class="avatar-md profile-user-wid mb-4">
									<span class="avatar-title rounded-circle bg-light">
										<img src={logo} alt="" class="rounded-circle" height="34" />
									</span>
								</div>
							</Link>
						</div>
						<div class="p-2">
							<Alert {isOpen} color={status}>{msg}</Alert>
							<Form class="form-horizontal" on:submit={onSubmit}>
								<div class="mb-3">
									<Label for="email" class="form-label">Email</Label>
									<Input
										type="email"
										class="form-control"
										id="email"
										placeholder="Enter email"
										bind:value={email}
									/>
								</div>

								<div class="mb-3">
									<Label class="form-label" for="user-password">Password</Label>
									<div class="input-group auth-pass-inputgroup">
										<Input
											type="password"
											class="form-control"
											id="user-password"
											placeholder="Enter password"
											bind:value={password}
										/>
										<!-- Password visibility toggle button (if needed) -->
									</div>
								</div>

								<div class="form-check">
									<input class="form-check-input" type="checkbox" id="remember-check" />
									<Label class="form-check-label" for="remember-check">Remember me</Label>
								</div>

								<div class="mt-3 d-grid">
									<Button color="primary" class="waves-effect waves-light" type="submit"
										>Log In</Button
									>
								</div>

								<div class="mt-4 text-center">
									<h5 class="font-size-14 mb-3">Sign in with</h5>

									<ul class="list-inline">
										<li class="list-inline-item">
											<a href={'#'} class="social-list-item bg-primary text-white border-primary">
												<i class="mdi mdi-facebook" />
											</a>
										</li>
										<li class="list-inline-item">
											<a href={'#'} class="social-list-item bg-info text-white border-info">
												<i class="mdi mdi-twitter" />
											</a>
										</li>
										<li class="list-inline-item">
											<a href={'#'} class="social-list-item bg-danger text-white border-danger">
												<i class="mdi mdi-google" />
											</a>
										</li>
									</ul>
								</div>

								<div class="mt-4 text-center">
									<Link href="/auth/recoverpw" class="text-muted"
										><i class="mdi mdi-lock me-1" /> Forgot your password?</Link
									>
								</div>
							</Form>
						</div>
					</CardBody>
				</Card>
				<div class="mt-5 text-center">
					<p>
						Don&apos;t have an account ?
						<Link href="/auth/register" class="fw-medium text-primary">Signup now</Link>
					</p>
					<p>
						© {new Date().getFullYear()} vidoqGPT
					</p>
				</div>
			</Col>
		</Row>
	</Container>
</div>
