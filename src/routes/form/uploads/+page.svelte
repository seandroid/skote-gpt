<script>
	import { Card, CardBody, CardTitle, Col, Form, FormGroup, Image, Label, Row } from 'sveltestrap';

	import Breadcrumb from './../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
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
</script>

<HeadTitle title="Form File Upload" />

<Breadcrumb title="UI Elements" pagetitle="Form File Upload" />
<Row>
	<Col class="col-12">
		<Card>
			<CardBody>
				<CardTitle class="h4">Dropzone</CardTitle>
				<p class="card-title-desc">
					
					DropzoneJS is an open source library that provides drag’n’drop file uploads with image previews.
				</p>
				<Form>
					<Dropzone on:drop={handleFilesSelect}>
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
				</Form>

				<div class="text-center mt-4">
					<button type="button" class="btn btn-primary"> Send Files </button>
				</div>
			</CardBody>
		</Card>
	</Col>
</Row>
