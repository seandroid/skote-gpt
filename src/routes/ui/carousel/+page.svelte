<script>
	import { Card, CardBody, CardTitle, Col, Row } from 'sveltestrap';
	import Breadcrumb from '../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import Slide from './CarouselTypes/slide.svelte';
	import Slidewithcontrol from './CarouselTypes/slidewithcontrol.svelte';
	import Slidewithindicator from './CarouselTypes/slidewithindicator.svelte';
	import Slidewithcaption from './CarouselTypes/slidewithcaption.svelte';
    import img1 from "../../../assets/images/small/img-1.jpg"
    import img2 from "../../../assets/images/small/img-2.jpg"
    import img3 from "../../../assets/images/small/img-3.jpg"

	const items = [
		{
			src: img1,
			altText: 'Slide 1',
			caption: "First slide label",
		},
		{
			src: img2,
			altText: 'Slide 2',
			caption: "Second slide label",
		},
		{
			src: img3,
			altText: 'Slide 3',
			caption: "Third slide label",
		}
	];
</script>

<HeadTitle title="Carousel" />
<Breadcrumb pagetitle="Carousel" title="UI Elements" />

<Row>
	<Col lg={6}>
		<Card>
			<CardBody>
				<CardTitle class="h4">Slides Only</CardTitle>
				<p class="card-title-desc">
					Here’s a carousel with slides only. Note the presence of the <code>.d-block</code>
					and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.
				</p>
				<div dir="ltr">
					<Slide {items} />
				</div>
			</CardBody>
		</Card>
	</Col>
	<Col lg={6}>
		<Card>
			<CardBody>
				<CardTitle class="h4">With controls</CardTitle>
				<p class="card-title-desc">Adding in the previous and next controls:</p>
				<div dir="ltr">
					<Slidewithcontrol {items} />
				</div>
			</CardBody>
		</Card>
	</Col>
</Row>
<Row>
	<Col lg={6}>
		<Card>
			<CardBody>
				<CardTitle class="h4">With indicators</CardTitle>
				<p class="card-title-desc">
					You can also add the indicators to the carousel, alongside the controls, too.
				</p>
				<div dir="ltr">
					<Slidewithindicator {items}/>
				</div>
			</CardBody>
		</Card>
	</Col>
	<Col lg={6}>
		<Card>
			<CardBody>
				<CardTitle class="h4">With captions</CardTitle>
				<p class="card-title-desc">
					Add captions to your slides easily with the{' '}
					<code>.carousel-caption</code> element within any{' '}
					<code>item</code>.
				</p>
				<div dir="ltr">
					<Slidewithcaption {items}/>
				</div>
			</CardBody>
		</Card>
	</Col>
</Row>