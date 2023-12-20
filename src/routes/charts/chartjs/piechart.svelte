<script>
	import { Pie } from 'svelte-chartjs';
	export let dataColors;
	import { getChartColorsArray } from '../../../common/ChartColorsArray.svelte';
	import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

	ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

	var pieChartColors = getChartColorsArray(dataColors);
	var data = {};

	if (pieChartColors) {
		data = {
			height: 300,
			labels: ['Desktops', 'Tablets'],
			datasets: [
				{
					data: [300, 180],
					backgroundColor: pieChartColors,
					hoverBackgroundColor: pieChartColors,
					hoverBorderColor: '#fff'
				}
			]
		};
	}
</script>

<Pie {data} height={300} class="chartjs-chart" />
