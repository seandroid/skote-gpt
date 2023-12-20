<script>
	import { Card, CardBody, CardTitle, Col, Row } from 'sveltestrap';

	import Breadcrumb from './../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
</script>

<HeadTitle title="Video" />

<Breadcrumb title="UI Elements" pagetitle="Video" />

<Row>
	<Col lg={6}>
		<Card>
			<CardBody>
				<CardTitle class="h4">Responsive embed video 16:9</CardTitle>
				<p class="card-title-desc">Aspect ratios can be customized with modifier class.</p>

				<div class="ratio ratio-16x9">
					<iframe title="test" allowFullScreen src="https://www.youtube.com/embed/1y_kfWUCFDQ" />
				</div>
			</CardBody>
		</Card>
	</Col>

	<Col lg={6}>
		<Card>
			<CardBody>
				<CardTitle class="h4">Responsive embed video 21:9</CardTitle>
				<p class="card-title-desc">Aspect ratios can be customized with modifier class.</p>

				<div class="ratio ratio-21x9">
					<iframe title="test1" allowFullScreen src="https://www.youtube.com/embed/1y_kfWUCFDQ" />
				</div>
			</CardBody>
		</Card>
	</Col>
</Row>

<Row>
	<Col xl={6}>
		<Card>
			<CardBody>
				<CardTitle class="h4">Responsive embed video 4:3</CardTitle>
				<p class="card-title-desc">Aspect ratios can be customized with modifier class.</p>

				<div class="ratio ratio-4x3">
					<iframe title="tes2" allowFullScreen src="https://www.youtube.com/embed/1y_kfWUCFDQ" />
				</div>
			</CardBody>
		</Card>
	</Col>

	<Col lg={6}>
		<Card>
			<CardBody>
				<CardTitle class="h4">Responsive embed video 1:1</CardTitle>
				<p class="card-title-desc">Aspect ratios can be customized with modifier class.</p>

				<div class="ratio ratio-1x1">
					<iframe title="test3" src="https://www.youtube.com/embed/1y_kfWUCFDQ" allowFullScreen />
				</div>
			</CardBody>
		</Card>
	</Col>
</Row>
