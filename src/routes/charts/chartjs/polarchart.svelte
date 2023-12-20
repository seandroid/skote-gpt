<script>
	import {PolarArea} from 'svelte-chartjs';
	export let dataColors;
	import { getChartColorsArray } from '../../../common/ChartColorsArray.svelte';

	var polarAreaChartColors = getChartColorsArray(dataColors);

	var data = {};
	if (polarAreaChartColors) {
		data = {
			height: 300,
			datasets: [
				{
					data: [11, 16, 7, 18],
					backgroundColor: polarAreaChartColors,
					label: 'My dataset', // for legend
					hoverBorderColor: '#fff'
				}
			],
			labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4']
		};
	}
</script>

<PolarArea {data} height={300} class="chartjs-chart" />
