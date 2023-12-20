<script>
	import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
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

	const auth = getAuth();
	let email = '';
	let alertMessage = '';
	let alertVisible = false;
	let alertColor = 'danger';

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			await sendPasswordResetEmail(auth, email);
			alertMessage = 'Check your email for the password reset link';
			alertColor = 'success';
		} catch (error) {
			console.error('Error:', error);
			alertMessage = error.message;
			alertColor = 'danger';
		}
		alertVisible = true;
	};
</script>

<Headtitle title="Recover Password" />

<div class="account-pages my-5 pt-sm-5">
	<Container>
		<Row class="justify-content-center">
			<Col md={8} lg={6} xl={5}>
				<Card class="overflow-hidden">
					<div class="bg-primary-subtle">
						<Row>
							<Col xs={7}>
								<div class="text-primary p-4">
									<h5 class="text-primary">Reset Password</h5>
									<p>Reset Password with Skote.</p>
								</div>
							</Col>
							<Col xs={5} class="align-self-end">
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
							{#if alertVisible}
								<Alert color={alertColor} class="text-center mb-4" role="alert">
									{alertMessage}
								</Alert>
							{/if}

							<Form class="form-horizontal" on:submit={onSubmit}>
								<div class="mb-3">
									<Label for="useremail" class="form-label">Email</Label>
									<Input
										type="email"
										class="form-control"
										id="useremail"
										placeholder="Enter email"
										bind:value={email}
									/>
								</div>

								<div class="text-end">
									<Button color="primary" class="w-md waves-effect waves-light" type="submit">
										Reset
									</Button>
								</div>
							</Form>
						</div>
					</CardBody>
				</Card>
				<div class="mt-5 text-center">
					<p>
						Remember It ?
						<Link href="/auth/login" class="fw-medium text-primary">Sign In here</Link>
					</p>
					<p>
						© {new Date().getFullYear()} vidoqGPT
					</p>
				</div>
			</Col>
		</Row>
	</Container>
</div>
