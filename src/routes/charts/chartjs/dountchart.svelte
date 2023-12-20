<script>
	import { Doughnut } from 'svelte-chartjs';
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
		Filler,
		RadialLinearScale
	} from 'chart.js';

	ChartJS.register(
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale,
		Filler,
		RadialLinearScale
	);

	var doughnutChartColors = getChartColorsArray(dataColors);
	var data = {};
	if (doughnutChartColors) {
		data = {
			width: 751,
			height: 300,
			labels: ['Desktops', 'Tablets'],
			datasets: [
				{
					data: [300, 210],
					backgroundColor: doughnutChartColors,
					hoverBackgroundColor: doughnutChartColors,
					hoverBorderColor: '#fff'
				}
			]
		};
	}
</script>

<Doughnut {data} option={{ responsive: true }} width={751} height={300} class="chartjs-chart" />
