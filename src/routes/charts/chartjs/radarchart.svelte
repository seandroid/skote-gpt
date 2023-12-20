<script>
	import { Radar } from 'svelte-chartjs';
	export let dataColors;
	import { getChartColorsArray } from '../../../common/ChartColorsArray.svelte';

	var radarChartColors = getChartColorsArray(dataColors);

	var data = {};
	if (radarChartColors) {
		data = {
			height: 300,
			labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
			datasets: [
				{
					label: 'Desktops',
					backgroundColor: radarChartColors[0],
					borderColor: radarChartColors[1],
					pointBackgroundColor: radarChartColors[1],
					pointBorderColor: '#fff',
					pointHoverBackgroundColor: '#fff',
					pointHoverBorderColor: radarChartColors[1],
					data: [65, 59, 90, 81, 56, 55, 40]
				},
				{
					label: 'Tablets',
					backgroundColor: radarChartColors[2],
					borderColor: radarChartColors[3],
					pointBackgroundColor: radarChartColors[3],
					pointBorderColor: '#fff',
					pointHoverBackgroundColor: '#fff',
					pointHoverBorderColor: radarChartColors[3],
					data: [28, 48, 40, 19, 96, 27, 100]
				}
			]
		};
	}
</script>

<Radar {data} height={300} class="chartjs-chart" />
