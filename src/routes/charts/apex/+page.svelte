<script>
	import { Card, CardBody, CardTitle, Col, Row } from 'sveltestrap';

	import Breadcrumb from './../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import ColumnWithDataLabels from './ColumnWithDataLabels.svelte';
	import LineWithDataLabels from './LineWithDataLabels.svelte';
	import DashedLine from './DashedLine.svelte';
	import SplineArea from './SplineArea.svelte';
	import ColumnChart from './ColumnChart.svelte';
	import DumbbellColumnChart from './DumbbellColumnChart.svelte';
	import FunnelChart from './FunnelChart.svelte';
	import RangeAreaChart from './RangeAreaChart.svelte';
	import DumbbellColumnhoriChart from './DumbbellColumnhoriChart.svelte';
	import Barchart from './Barchart.svelte';
	import LineColumnArea from './LineColumnArea.svelte';
	import RadialChart from './RadialChart.svelte';
	import PieChart from './PieChart.svelte';
	import Donutchart from './Donutchart.svelte';
</script>

<HeadTitle title="Apex Charts" />

<Breadcrumb title="Charts" pagetitle="Apex Charts" />

<Row>
	<Col md={6}>
		<Card>
			<CardBody>
				<CardTitle>Line with Data Labels</CardTitle>
				<LineWithDataLabels chartColors={['--bs-primary', '--bs-success']} />
			</CardBody>
		</Card>
	</Col>
	<Col md={6}>
		<Card>
			<CardBody>
				<CardTitle>Dashed Line</CardTitle>
				<DashedLine />
			</CardBody>
		</Card>
	</Col>
	<Col md={6}>
		<Card>
			<CardBody>
				<CardTitle>Spline Area</CardTitle>
				<SplineArea />
			</CardBody>
		</Card>
	</Col>
	<Col md={6}>
		<Card>
			<CardBody>
				<CardTitle>Column Chart</CardTitle>
				<ColumnChart chartColors={["--bs-success","--bs-primary", "--bs-danger"]} />
			</CardBody>
		</Card>
	</Col>
	<Col md={6}>
		<Card>
			<CardBody>
				<CardTitle>Dumbbell Column Chart</CardTitle>
				<DumbbellColumnChart chartColors={["--bs-primary", "--bs-success"]} />
			</CardBody>
		</Card>
	</Col>
	<Col md={6}>
		<Card>
			<CardBody>
				<CardTitle>Range Area Charts</CardTitle>
				<RangeAreaChart chartColors={["--bs-primary"]} />
			</CardBody>
		</Card>
	</Col>
	<Col md={6}>
		<Card>
			<CardBody>
				<CardTitle>Dumbbell Timeline Chart (Horizontal)</CardTitle>
				<DumbbellColumnhoriChart chartColors={["--bs-primary", "--bs-success"]} />
			</CardBody>
		</Card>
	</Col>
	<Col md={6}>
		<Card>
			<CardBody>
				<CardTitle>Funnel Charts</CardTitle>
				<FunnelChart chartColors={["--bs-primary"]} />
			</CardBody>
		</Card>
	</Col>
	<Col md={6}>
		<Card>
			<CardBody>
				<CardTitle>Column with Data Labels</CardTitle>
				<ColumnWithDataLabels chartColors={["--bs-primary"]} />
			</CardBody>
		</Card>
	</Col>
	<Col md={6}>
		<Card>
			<CardBody>
				<CardTitle>Bar Chart</CardTitle>
				<Barchart chartColors={["--bs-success"]} />
			</CardBody>
		</Card>
	</Col>
	<Col md={6}>
		<Card>
			<CardBody>
				<CardTitle>Line, Column & Area Chart</CardTitle>
				<LineColumnArea/>
			</CardBody>
		</Card>
	</Col>
	<Col md={6}>
		<Card>
			<CardBody>
				<CardTitle>Radial Chart</CardTitle>
				<RadialChart chartColors={["--bs-primary","--bs-success", "--bs-danger", "--bs-warning"]}/>
			</CardBody>
		</Card>
	</Col>
	<Col md={6}>
		<Card>
			<CardBody>
				<CardTitle>Pie Chart</CardTitle>
				<PieChart chartColors={["--bs-success","--bs-primary", "--bs-danger","--bs-info", "--bs-warning"]}/>
			</CardBody>
		</Card>
	</Col>
	<Col md={6}>
		<Card>
			<CardBody>
				<CardTitle>Donut Chart</CardTitle>
				<Donutchart chartColors={["--bs-success","--bs-primary", "--bs-danger","--bs-info", "--bs-warning"]}/>
			</CardBody>
		</Card>
	</Col>
</Row>
