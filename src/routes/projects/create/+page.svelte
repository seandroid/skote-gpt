<script>
	import { Button, Card, CardBody, CardTitle, Col, Label, Row, Image } from 'sveltestrap';
	import Breadcrumb from '../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import Link from 'svelte-link/src/Link.svelte';
	import Dropzone from 'svelte-file-dropzone/Dropzone.svelte';

	let selectedImage;

	function handleFileChange(event) {
		const file = event.target.files[0];

		if (file) {
			const reader = new FileReader();

			reader.onload = () => {
				selectedImage = reader.result;
			};

			reader.readAsDataURL(file);
		}
	}
</script>

<HeadTitle title="Create New Project" />

<Breadcrumb title="Projects" pagetitle="Create New" />

<Row>
	<Col lg="8">
		<Card>
			<CardBody>
				<form>
					<div class="mb-3">
						<Label for="projectname" class="col-form-label col-lg-2">Project Name</Label>

						<input
							id="projectname"
							name="projectname"
							type="text"
							class="form-control"
							placeholder="Enter Project Name..."
						/>
					</div>
					<div class="mb-3">
						<Label class="form-label">Project Image</Label>

						<div class="text-center">
							<div class="position-relative d-inline-block">
								<div class="position-absolute bottom-0 end-0">
									<label for="project-image-input" class="mb-0">
										<div class="avatar-xs">
											<div
												class="avatar-title bg-light border rounded-circle text-muted cursor-pointer shadow font-size-16"
											>
												<i class="bx bxs-image-alt" />
											</div>
										</div>
									</label>
									<input
										class="form-control d-none"
										value=""
										id="project-image-input"
										type="file"
										accept="image/png, image/gif, image/jpeg"
										on:change={handleFileChange}
									/>
								</div>
								<div class="avatar-lg">
									<div class="avatar-title bg-light rounded-circle">
										{#if selectedImage}
											<Image
												src={selectedImage}
												id="projectlogo-img"
												class="avatar-md h-auto rounded-circle"
											/>
										{/if}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="mb-3">
						<Label for="projectdesc" class="col-form-label col-lg-2">Project Description</Label>

						<textarea
							class="form-control"
							id="projectdesc"
							rows="3"
							placeholder="Enter Project Description..."
						/>
					</div>
					<div class="mb-4">
						<Label class="col-form-label col-lg-2">Attached Files</Label>

						<Dropzone accept="image/png, image/gif, image/jpeg">
							<div>
								<div class="dz-message needsclick">
									<div class="dz-message needsclick">
										<div class="mb-3">
											<i class="display-4 text-muted bx bxs-cloud-upload" />
										</div>
										<h4>Drop files here or click to upload.</h4>
									</div>
								</div>
							</div>
						</Dropzone>
					</div>
				</form>
			</CardBody>
		</Card>
	</Col>
	<Col lg="4">
		<Card>
			<CardBody>
				<h5 class="card-title mb-3">Publish</h5>

				<div class="mb-3">
					<label class="form-label" for="project-status-input">Status</label>
					<select class="form-select" id="project-status-input">
						<option value="Completed">Completed</option>
						<option value="Inprogress" selected>Inprogress</option>
						<option value="Delay">Delay</option>
					</select>
					<div class="invalid-feedback">Please select project status.</div>
				</div>

				<div>
					<label class="form-label" for="project-visibility-input">Visibility</label>
					<select class="form-select" id="project-visibility-input">
						<option value="Private">Private</option>
						<option value="Public">Public</option>
						<option value="Team">Team</option>
					</select>
				</div>
			</CardBody>
			<!-- end card body -->
		</Card>
		<!-- end card -->

		<Card>
			<CardBody>
				<h5 class="card-title mb-3">Due Date</h5>
				
				<input type="date" id="duedate-input" class="form-control" placeholder="Select due date" name="due date" required />
				<div class="invalid-feedback">Please select due date.</div>
			</CardBody>
			<!-- end card body -->
		</Card>
		<!-- end card -->
	</Col>

	<Col lg="8">
		<div class="text-end mb-4">
			<Button type="submit" color="primary">Create Project</Button>
		</div>
	</Col>
</Row>
