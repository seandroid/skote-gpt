<script>
	import Link from 'svelte-link';
	import { Button, Input, ModalBody, ModalFooter, ModalHeader, Form } from 'sveltestrap';
	import Modal from "../../common/Modal.svelte"
	import avatar2 from "../../assets/images/users/avatar-2.jpg"
	import avatar3 from "../../assets/images/users/avatar-3.jpg"
	import avatar4 from "../../assets/images/users/avatar-4.jpg"
	import avatar6 from "../../assets/images/users/avatar-6.jpg"

	let open = false;
	const toggle = () => (open = !open);
</script>

<div class="email-leftbar card">
	<Button color="danger" on:click={toggle} class="btn btn-danger btn-block waves-effect waves-light">Compose</Button>
	<div class="mail-list mt-4">
		<Link href="#" active><i class="mdi mdi-email-outline me-2" /> Inbox
			<span class="ms-1 float-end">(18)</span></Link
		>
		<Link href="#"><i class="mdi mdi-star-outline me-2" />Starred</Link>
		<Link href="#"><i class="mdi mdi-diamond-stone me-2" />Important</Link>
		<Link href="#"><i class="mdi mdi-file-outline me-2" />Draft</Link>
		<Link href="#"><i class="mdi mdi-email-check-outline me-2" />Sent Mail</Link>
		<Link href="#"><i class="mdi mdi-trash-can-outline me-2" />Trash</Link>
	</div>

	<h6 class="mt-4">Labels</h6>

	<div class="mail-list mt-1">
		<Link href="#"><span class="mdi mdi-arrow-right-drop-circle text-info float-end" />Theme Support</Link>
		<Link href="#"><span class="mdi mdi-arrow-right-drop-circle text-warning float-end" />Freelance</Link>
		<Link href="#"><span class="mdi mdi-arrow-right-drop-circle text-primary float-end" />Social</Link>
		<Link href="#"><span class="mdi mdi-arrow-right-drop-circle text-danger float-end" />Friends</Link>
		<Link href="#"><span class="mdi mdi-arrow-right-drop-circle text-success float-end" />Family</Link>
	</div>

	<h6 class="mt-4">Chat</h6>

	<div class="mt-2">
		<Link to="/" class="d-flex">
			<div class="flex-shrink-0 me-3">
				<img class="rounded-circle" src={avatar2} alt="Generic placeholder image1" height="36" />
			</div>
			<div class="flex-grow-1 chat-user-box">
				<p class="user-title m-0">Scott Median</p>
				<p class="text-muted">Hello</p>
			</div>
		</Link>

		<Link to="/" class="d-flex">
			<div class="flex-shrink-0 me-3">
				<img class="rounded-circle" src={avatar3} alt="Generic placeholder image2" height="36" />
			</div>
			<div class="flex-grow-1 chat-user-box">
				<p class="user-title m-0">Julian Rosa</p>
				<p class="text-muted">What about our next..</p>
			</div>
		</Link>

		<Link to="/" class="d-flex">
			<div class="flex-shrink-0 me-3">
				<img class="rounded-circle" src={avatar4} alt="Generic placeholder image3" height="36" />
			</div>
			<div class="flex-grow-1 chat-user-box">
				<p class="user-title m-0">David Medina</p>
				<p class="text-muted">Yeah everything is fine</p>
			</div>
		</Link>

		<Link to="/" class="d-flex">
			<div class="flex-shrink-0 me-3">
				<img class="rounded-circle" src={avatar6} alt="Generic placeholder image4" height="36" />
			</div>
			<div class="flex-grow-1 chat-user-box">
				<p class="user-title m-0">Jay Baker</p>
				<p class="text-muted">Wow that's great</p>
			</div>
		</Link>

	</div>
</div>

<Modal isOpen={open} className="modal-dialog-centered" >
	<div class="modal-content">
		<ModalHeader {toggle}>New Message</ModalHeader>
		<ModalBody>
			<div>
				<div class="mb-3">
					<Input type="email" class="form-control" placeholder="To" />
				</div>

				<div class="mb-3">
					<Input type="text" class="form-control" placeholder="Subject" />
				</div>
				<div class="mb-3">
					<Input type="textarea" class="form-control" name="text" id="exampleText" rows="5" />
				</div>
			</div>
		</ModalBody>
		<ModalFooter>
			<button type="button" class="btn btn-light" on:click={toggle}>Close</button>
			<button type="button" class="btn btn-primary">Send <i class="fab fa-telegram-plane ms-1" /></button>
		</ModalFooter>
	</div>
</Modal>
