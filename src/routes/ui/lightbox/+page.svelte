<script>
	import { Card, CardBody, CardTitle, Col, Row } from 'sveltestrap';
	import Breadcrumb from '../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import img1 from '../../../assets/images/small/img-1.jpg';
	import img2 from '../../../assets/images/small/img-2.jpg';
	import img3 from '../../../assets/images/small/img-3.jpg';
	import img4 from '../../../assets/images/small/img-4.jpg';
	import img5 from '../../../assets/images/small/img-5.jpg';
	import img6 from '../../../assets/images/small/img-6.jpg';

	import { Lightbox, LightboxGallery, GalleryThumbnail, GalleryImage } from 'svelte-lightbox';
	import Link from 'svelte-link/src/Link.svelte';
</script>

<HeadTitle title="Lightbox" />
<Breadcrumb pagetitle="Lightbox" title="UI Elements" />

<Row>
	<Col xl="6">
		<Card>
			<CardBody>
				<h4 class="card-title">Single image lightbox</h4>
				<p class="card-title-desc">Three simple popups with different scaling settings.</p>
				<Row>
					<Col xs="6">
						<div>
							<h5 class="font-size-14">Fits (Horz/Vert)</h5>
							<Link href="#">
								<Lightbox description="Simple lightbox">
									<img src={img2} alt="Simple lightbox" class="img-fluid" width="145" />
								</Lightbox>
							</Link>
						</div>
					</Col>
					<Col xs="6">
						<div>
							<h5 class="font-size-14">Effects</h5>
							<Link href="#">
								<Lightbox description="Simple lightbox" transitionDuration="500">
									<img src={img2} alt="Simple lightbox" class="img-fluid" width="75" />
								</Lightbox>
							</Link>
						</div>
					</Col>
				</Row>
			</CardBody>
		</Card>
	</Col>
	<Col xl="6">
		<Card>
			<CardBody>
				<h4 class="card-title">Lightbox gallery</h4>
				<p class="card-title-desc">
					In this example lazy-loading of images is enabled for the next image based on move
					direction.
				</p>

				<LightboxGallery>
					<svelte:fragment slot="thumbnail">
						<div class="popup-gallery d-flex flex-wrap">
							<GalleryThumbnail>
								<img src={img1} alt="Simple lightbox" width="120" />
							</GalleryThumbnail>
							<GalleryThumbnail>
								<img src={img2} alt="Simple lightbox" width="120" />
							</GalleryThumbnail>
							<GalleryThumbnail>
								<img src={img3} alt="Simple lightbox" width="120" />
							</GalleryThumbnail>
							<GalleryThumbnail>
								<img src={img4} alt="Simple lightbox" width="120" />
							</GalleryThumbnail>
							<GalleryThumbnail>
								<img src={img5} alt="Simple lightbox" width="120" />
							</GalleryThumbnail>
							<GalleryThumbnail>
								<img src={img6} alt="Simple lightbox" width="120" />
							</GalleryThumbnail>
						</div>
					</svelte:fragment>
					<GalleryImage>
						<img src={img1} alt="Simple lightbox" />
					</GalleryImage>
					<GalleryImage>
						<img src={img2} alt="Simple lightbox" />
					</GalleryImage>
					<GalleryImage>
						<img src={img3} alt="Simple lightbox" />
					</GalleryImage>
					<GalleryImage>
						<img src={img4} alt="Simple lightbox" />
					</GalleryImage>
					<GalleryImage>
						<img src={img5} alt="Simple lightbox" />
					</GalleryImage>
					<GalleryImage>
						<img src={img6} alt="Simple lightbox" />
					</GalleryImage>
				</LightboxGallery>
			</CardBody>
		</Card>
	</Col>
</Row>
