<script>
	import { onMount } from 'svelte';
	import { getChartColorsArray } from '../../../common/ChartColorsArray.svelte';
	export let chartColors;

	chartColors = getChartColorsArray(chartColors);

	const options = {
		chart: {
			height: 350,
			type: 'bar',
			toolbar: {
				show: false
			}
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '45%',
				endingShape: 'rounded'
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2,
			colors: ['transparent']
		},
		series: [
			{
				name: 'Net Profit',
				data: [46, 57, 59, 54, 62, 58, 64, 60, 66]
			},
			{
				name: 'Revenue',
				data: [74, 83, 102, 97, 86, 106, 93, 114, 94]
			},
			{
				name: 'Free Cash Flow',
				data: [37, 42, 38, 26, 47, 50, 54, 55, 43]
			}
		],
		colors: chartColors,
		xaxis: {
			categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
		},
		yaxis: {
			title: {
				text: '$ (thousands)',
				style: {
					fontWeight: '500'
				}
			}
		},
		grid: {
			borderColor: '#f1f1f1'
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			y: {
				formatter: function (val) {
					return '$ ' + val + ' thousands';
				}
			}
		}
	};

	onMount(() => {
		let chart = new ApexCharts(document.getElementById('columnChart'), options);
		chart.render();
	});
</script>

<div class="apex-charts" id="columnChart" />
