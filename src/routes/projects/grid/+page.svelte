<script>
	import { Col, Row } from 'sveltestrap';
	import Breadcrumb from '../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import CardProject from './card-project.svelte';
	import data from '../../../common/data/projects';
</script>

<HeadTitle title="Projects Grid" />

<Breadcrumb title="Projects" pagetitle="Projects Grid" />

<Row>
	<CardProject projects={data.projects} />
</Row>

<Row>
	<Col lg={12}>
		<ul class="pagination pagination-rounded justify-content-center mt-2 mb-5">
			<li class="page-item disabled">
				<a href={'#'} class="page-link"><i class="mdi mdi-chevron-left" /></a>
			</li>
			<li class="page-item">
				<a href={'#'} class="page-link">1</a>
			</li>
			<li class="page-item active">
				<a href={'#'} class="page-link">2</a>
			</li>
			<li class="page-item">
				<a href={'#'} class="page-link">3</a>
			</li>
			<li class="page-item">
				<a href={'#'} class="page-link">4</a>
			</li>
			<li class="page-item">
				<a href={'#'} class="page-link">5</a>
			</li>
			<li class="page-item">
				<a href={'#'} class="page-link"><i class="mdi mdi-chevron-right" /></a>
			</li>
		</ul>
	</Col>
</Row>
