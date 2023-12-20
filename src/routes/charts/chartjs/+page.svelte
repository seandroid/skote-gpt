<script>
	import { Card, CardBody, CardTitle, Col, Row } from 'sveltestrap';

	import Breadcrumb from './../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import Linechart from './linechart.svelte';
	import Barchart from './barchart.svelte';
	import Piechart from './piechart.svelte';
	import Dountchart from './dountchart.svelte';
	import Polarchart from './polarchart.svelte';
	import Radarchart from './radarchart.svelte';
</script>

<HeadTitle title="Chartjs Charts" />

<Breadcrumb title="Charts" pagetitle="Chartjs Charts" />

<Row>
	<Col md="6">
		<Card>
			<CardBody>
				<CardTitle>Line Chart</CardTitle>
                <Row class=" text-center">
                    <div class="col-4">
                        <h5 class="mb-0">86541</h5>
                        <p class="text-muted text-truncate">Activated</p>
                    </div>
                    <div class="col-4">
                        <h5 class="mb-0">2541</h5>
                        <p class="text-muted text-truncate">Pending</p>
                    </div>
                    <div class="col-4">
                        <h5 class="mb-0">102030</h5>
                        <p class="text-muted text-truncate">Deactivated</p>
                    </div>
                </Row>
                <Linechart dataColors={["--bs-primary-rgb,0.2", "--bs-primary", "--bs-light-rgb,0.2", "--bs-light"]} />
			</CardBody>
		</Card>
	</Col>
	<Col md="6">
		<Card>
			<CardBody>
				<CardTitle>Bar Chart</CardTitle>
                <Row class=" text-center">
                    <div class="col-4">
                        <h5 class="mb-0">2541</h5>
                        <p class="text-muted text-truncate">Activated</p>
                    </div>
                    <div class="col-4">
                        <h5 class="mb-0">84845</h5>
                        <p class="text-muted text-truncate">Pending</p>
                    </div>
                    <div class="col-4">
                        <h5 class="mb-0">12001</h5>
                        <p class="text-muted text-truncate">Deactivated</p>
                    </div>
                </Row>
                <Barchart dataColors={["--bs-success-rgb, 0.8", "--bs-success"]} />
			</CardBody>
		</Card>
	</Col>
	<Col md="6">
		<Card>
			<CardBody>
				<CardTitle>Pie Chart</CardTitle>
                <Row class=" text-center">
                    <div class="col-4">
                        <h5 class="mb-0">2536</h5>
                        <p class="text-muted text-truncate">Activated</p>
                    </div>
                    <div class="col-4">
                        <h5 class="mb-0">96421</h5>
                        <p class="text-muted text-truncate">Pending</p>
                    </div>
                    <div class="col-4">
                        <h5 class="mb-0">89854</h5>
                        <p class="text-muted text-truncate">Deactivated</p>
                    </div>
                </Row>
                <Piechart dataColors={["--bs-success", "#ebeff2"]} />
			</CardBody>
		</Card>
	</Col>
	<Col md="6">
		<Card>
			<CardBody>
				<CardTitle>Donut Chart</CardTitle>
                <Row class=" text-center">
                    <div class="col-4">
                        <h5 class="mb-0">2536</h5>
                        <p class="text-muted text-truncate">Activated</p>
                    </div>
                    <div class="col-4">
                        <h5 class="mb-0">96421</h5>
                        <p class="text-muted text-truncate">Pending</p>
                    </div>
                    <div class="col-4">
                        <h5 class="mb-0">89854</h5>
                        <p class="text-muted text-truncate">Deactivated</p>
                    </div>
                </Row>
                <Dountchart dataColors={["--bs-primary", "#ebeff2"]} />
			</CardBody>
		</Card>
	</Col>
	<Col md="6">
		<Card>
			<CardBody>
				<CardTitle>Polar Chart</CardTitle>
                <Row class=" text-center">
                    <div class="col-4">
                        <h5 class="mb-0">2536</h5>
                        <p class="text-muted text-truncate">Activated</p>
                    </div>
                    <div class="col-4">
                        <h5 class="mb-0">96421</h5>
                        <p class="text-muted text-truncate">Pending</p>
                    </div>
                    <div class="col-4">
                        <h5 class="mb-0">89854</h5>
                        <p class="text-muted text-truncate">Deactivated</p>
                    </div>
                </Row>
                <Polarchart dataColors={["--bs-danger", "--bs-success", "--bs-warning", "--bs-primary"]} />
			</CardBody>
		</Card>
	</Col>
	<Col md="6">
		<Card>
			<CardBody>
				<CardTitle>Radar Chart</CardTitle>
                <Row class=" text-center">
                    <div class="col-4">
                        <h5 class="mb-0">2536</h5>
                        <p class="text-muted text-truncate">Activated</p>
                    </div>
                    <div class="col-4">
                        <h5 class="mb-0">96421</h5>
                        <p class="text-muted text-truncate">Pending</p>
                    </div>
                    <div class="col-4">
                        <h5 class="mb-0">89854</h5>
                        <p class="text-muted text-truncate">Deactivated</p>
                    </div>
                </Row>
                <Radarchart dataColors={["--bs-success-rgb, 0.2", "--bs-success", "--bs-primary-rgb, 0.2", "--bs-primary"]} />
			</CardBody>
		</Card>
	</Col>
</Row>
