<script>
	import { Line } from 'svelte-chartjs';
	export let dataColors;
	import { getChartColorsArray } from '../../../common/ChartColorsArray.svelte';

	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale,
		Filler
	} from 'chart.js';

	ChartJS.register(
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale,
		Filler
	);

	var lineChartColor = getChartColorsArray(dataColors);
	var data = {};
	if (lineChartColor) {
		data = {
			labels: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October'
			],
			datasets: [
				{
					label: 'Sales Analytics',
					fill: true,
					lineTension: 0.5,
					backgroundColor: lineChartColor[0],
					borderColor: lineChartColor[1],
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: lineChartColor[1],
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: lineChartColor[1],
					pointHoverBorderColor: '#fff',
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: [65, 59, 80, 81, 56, 55, 40, 55, 30, 80]
				},
				{
					label: 'Monthly Earnings',
					fill: true,
					lineTension: 0.5,
					backgroundColor: lineChartColor[2],
					borderColor: lineChartColor[3],
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: lineChartColor[3],
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: lineChartColor[3],
					pointHoverBorderColor: '#eef0f2',
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: [80, 23, 56, 65, 23, 35, 85, 25, 92, 36]
				}
			]
		};
	}
</script>

<Line class="chartjs-chart" {data} option={{ responsive: true }} />
