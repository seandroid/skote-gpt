<script>
	import {
		Button,
		Card,
		CardBody,
		CardTitle,
		Col,
		Form,
		FormGroup,
		Input,
		Label,
		Row, Image
	} from 'sveltestrap';
	import Breadcrumb from '../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import Select from 'svelte-select';
	import Dropzone from 'svelte-file-dropzone/Dropzone.svelte';

	let files = {
		accepted: [],
		rejected: [],
		preview: []
	};

	function handleFilesSelect(e) {
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = [...files.rejected, ...fileRejections];
		
		const uploadedfiles = event.target.files;
		
		for (var i = 0; i < uploadedfiles.length; i++) {
			const file = uploadedfiles[i];
			if (file) {
				const reader = new FileReader();
				
				reader.onload = (e) => {
					files.preview = [...files.preview, e.target.result];
				};
				
				reader.readAsDataURL(file);
			}
		}
	}

	function handleRemoveFile(e, index) {
			files.accepted.splice(index, 1);
			files.preview.splice(index, 1);
			files.accepted = [...files.accepted];
	}

	const options = [
		{ value: 'WI', label: 'Wireless' },
		{ value: 'BE', label: 'Battery life' },
		{ value: 'BA', label: 'Bass' }
	];

	const itemscategory = [
		{ value: 'Select', label: 'Select' },
		{ value: 'FA', label: 'Fashion' },
		{ value: 'EL', label: 'Electronic' }
	];
</script>

<HeadTitle title="Add Product" />

<Breadcrumb title="Ecommerce" pagetitle="Add Product" />

<Row>
	<Col xs="12">
		<Card>
			<CardBody>
				<CardTitle class="h4">Basic Information</CardTitle>
				<p class="card-title-desc">Fill all information below</p>

				<Form>
					<Row>
						<Col sm="6">
							<FormGroup class="mb-3">
								<Label for="productname">Product Name</Label>
								<Input id="productname" name="productname" type="text" class="form-control" />
							</FormGroup>
							<FormGroup class="mb-3">
								<Label for="manufacturername">Manufacturer Name</Label>
								<Input
									id="manufacturername"
									name="manufacturername"
									type="text"
									class="form-control"
								/>
							</FormGroup>
							<FormGroup class="mb-3">
								<Label for="manufacturerbrand">Manufacturer Brand</Label>
								<Input
									id="manufacturerbrand"
									name="manufacturerbrand"
									type="text"
									class="form-control"
								/>
							</FormGroup>
							<FormGroup class="mb-3">
								<Label for="price">Price</Label>
								<Input id="price" name="price" type="text" class="form-control" />
							</FormGroup>
						</Col>

						<Col sm="6">
							<FormGroup class="mb-3">
								<Label class="control-label">Category</Label>
								<Select items={itemscategory} />
							</FormGroup>
							<FormGroup class="select2-container mb-3">
								<Label class="control-label">Features</Label>
								<Select placeholder="Choose ..." title="features" items={options} isMulti={true} />
							</FormGroup>
							<FormGroup class="mb-3">
								<Label for="productdesc">Product Description</Label>
								<textarea class="form-control" id="productdesc" rows="5" />
							</FormGroup>
						</Col>
					</Row>
					<div class="d-flex flex-wrap gap-2">
						<Button type="submit" color="primary">Save Changes</Button>
						<Button type="submit" color="secondary">Cancel</Button>
					</div>
				</Form>
			</CardBody>
		</Card>

		<Card>
			<CardBody>
				<CardTitle class="mb-3 h4">Product Images</CardTitle>
				<Dropzone on:drop={handleFilesSelect} class="dropzone">
						<div class="dz-message needsclick">
							<div class="mb-3">
								<i class="display-4 text-muted bx bxs-cloud-upload" />
							</div>

							<h4>Drop files here or click to upload.</h4>
						</div>
				</Dropzone>
				<ul class="list-unstyled mb-0" id="dropzone-preview">
					{#each files.accepted as item,index}
					<li class="mt-2" id="dropzone-preview-list">
						<!-- This is used as the file preview template -->
						<div class="border rounded">
							<div class="d-flex p-2">
								<div class="flex-shrink-0 me-3">
									<div class="avatar-sm bg-light rounded">
										<Image class="img-fluid rounded d-block" src={files.preview[index]}
											alt="Product-Image" style="height: 100%;" />
									</div>
								</div>
								<div class="flex-grow-1">
									<div class="pt-1">
										<h5 class="fs-14 mb-1">{item.name}</h5>
										<p class="fs-13 text-muted mb-0">{item.size}</p>
										<strong class="error text-danger"></strong>
									</div>
								</div>
								<div class="flex-shrink-0 ms-3">
									<button class="btn btn-sm btn-danger" on:click={(e)=>
										handleRemoveFile(e, index)}>Delete</button>
								</div>
							</div>
						</div>
					</li>
					{/each}
				</ul>
			</CardBody>
		</Card>

		<Card>
			<CardBody>
				<CardTitle class="h4">Meta Data</CardTitle>
				<p class="card-title-desc">Fill all information below</p>

				<Form>
					<Row>
						<Col sm={6}>
							<div class="mb-3">
								<Label for="metatitle">Meta title</Label>
								<Input id="metatitle" name="productname" type="text" class="form-control" />
							</div>
							<div class="mb-3">
								<Label for="metakeywords">Meta Keywords</Label>
								<Input id="metakeywords" name="manufacturername" type="text" class="form-control" />
							</div>
						</Col>

						<Col sm={6}>
							<div class="mb-3">
								<Label for="metadescription">Meta Description</Label>
								<textarea class="form-control" id="metadescription" rows="5" />
							</div>
						</Col>
					</Row>

					<div class="d-flex flex-wrap gap-2">
						<Button type="submit" color="primary" class="waves-effect waves-light">
							Save Changes
						</Button>{' '}
						<Button type="submit" color="secondary" class="waves-effect waves-light">Cancel</Button>
					</div>
				</Form>
			</CardBody>
		</Card>
	</Col>
</Row>
