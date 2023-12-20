<script>
	import { Bar } from 'svelte-chartjs';
	import { getChartColorsArray } from '../../../common/ChartColorsArray.svelte';
	export let dataColors;

	import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale } from 'chart.js';

	Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale);

	var barChartColor = getChartColorsArray(dataColors);
	var data = {};
	if (barChartColor) {
		data = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [
				{
					label: 'Sales Analytics',
					backgroundColor: barChartColor[0],
					borderColor: barChartColor[0],
					borderWidth: 1,
					hoverBackgroundColor: barChartColor[1],
					hoverBorderColor: barChartColor[1],
					data: [65, 59, 81, 45, 56, 80, 50, 20]
				}
			]
		};
	}
</script>

<Bar {data} option={{ responsive: true }} height="120" />
