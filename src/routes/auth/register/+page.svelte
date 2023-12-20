<script>
	import { createUserWithEmailAndPassword } from 'firebase/auth';
	import { auth } from '$lib/firebase';
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
	import logo from '../../../assets/images/logo.svg';
	import { goto } from '$app/navigation';

	let emailid = '';
	let password = '';
	let isOpen = false;
	let msg = '';
	let status = '';
	async function onSubmit(e) {
		e.preventDefault();
		try {
			// Firebase creates a new user with email and password
			await createUserWithEmailAndPassword(auth, emailid, password);

			// You might want to do additional steps here, like updating the user's profile
			// or sending a verification email

			localStorage.setItem('authUser', JSON.stringify({ email: emailid }));
			isOpen = true;
			msg = 'Registration successful. Redirecting...';
			status = 'success';

			// Redirecting user after successful registration
			setTimeout(() => {
				goto('/auth/login');
			}, 1500);
		} catch (error) {
			console.error('Error:', error);
			isOpen = true;
			msg = error.message; // Firebase error message
			status = 'danger';
		}
	}
</script>

<Headtitle title="Register" />

<div class="account-pages my-5 pt-sm-5">
	<Container>
		<Row class="justify-content-center">
			<Col md={8} lg={8} xl={5}>
				<Card class="overflow-hidden">
					<div class="bg-primary-subtle">
						<Row>
							<Col class="col-7">
								<div class="text-primary p-4">
									<h5 class="text-primary">Free Register</h5>
									<p>Get your free Skote account now.</p>
								</div>
							</Col>
							<Col class="col-5 align-self-end">
								<img src={profileImg} alt="" class="img-fluid" />
							</Col>
						</Row>
					</div>
					<CardBody class="pt-0">
						<div>
							<Link href="/dashboard">
								<div class="avatar-md profile-user-wid mb-4">
									<span class="avatar-title rounded-circle bg-light">
										<img src={logo} alt="" class="rounded-circle" height="34" />
									</span>
								</div>
							</Link>
						</div>
						<div class="p-2">
							<Alert {isOpen} color={status}>{msg}</Alert>
							<Form class="needs-validation" on:submit={onSubmit}>
								<div class="mb-3">
									<Label for="useremail" class="form-label">Email</Label>
									<Input
										type="email"
										class="form-control"
										id="useremail"
										placeholder="Enter email"
										bind:value={emailid}
									/>
									<div class="invalid-feedback">Please Enter Email</div>
								</div>

								<div class="mb-3">
									<Label for="userpassword" class="form-label">Password</Label>
									<Input
										type="password"
										class="form-control"
										id="userpassword"
										placeholder="Enter password"
										bind:value={password}
									/>
									<div class="invalid-feedback">Please Enter Password</div>
								</div>

								<div class="mt-4 d-grid">
									<Button color="primary" class="waves-effect waves-light" type="submit"
										>Register</Button
									>
								</div>

								<div class="mt-4 text-center">
									<h5 class="font-size-14 mb-3">Sign up using</h5>

									<ul class="list-inline">
										<li class="list-inline-item">
											<Link href="#" class="social-list-item bg-primary text-white border-primary">
												<i class="mdi mdi-facebook" />
											</Link>
										</li>
										<li class="list-inline-item">
											<Link href="#" class="social-list-item bg-info text-white border-info">
												<i class="mdi mdi-twitter" />
											</Link>
										</li>
										<li class="list-inline-item">
											<Link href="#" class="social-list-item bg-danger text-white border-danger">
												<i class="mdi mdi-google" />
											</Link>
										</li>
									</ul>
								</div>

								<div class="mt-4 text-center">
									<p class="mb-0">
										By registering you agree to the Skote <Link href="#" class="text-primary"
											>Terms of Use</Link
										>
									</p>
								</div>
							</Form>
						</div>
					</CardBody>
				</Card>
				<div class="mt-5 text-center">
					<p>
						Already have an account ?
						<Link href="/auth/login" class="fw-medium text-primary">Login</Link>
					</p>
					<p>
						© {new Date().getFullYear()} vidoqGPT
					</p>
				</div>
			</Col>
		</Row>
	</Container>
</div>
