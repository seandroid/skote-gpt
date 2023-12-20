<script>
	import { onMount } from 'svelte';
	import { getChartColorsArray } from '../../../common/ChartColorsArray.svelte';
	export let chartColors;

	chartColors = getChartColorsArray(chartColors);

	const options = {
		chart: {
			height: 320,
			type: 'pie'
		},
		series: [44, 55, 41, 17, 15],
		labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5'],
		colors: chartColors,
		legend: {
			show: !0,
			position: 'bottom',
			horizontalAlign: 'center',
			verticalAlign: 'middle',
			floating: !1,
			fontSize: '14px',
			offsetX: 0
		},
		responsive: [
			{
				breakpoint: 600,
				options: {
					chart: {
						height: 240
					},
					legend: {
						show: !1
					}
				}
			}
		]
	};

	onMount(() => {
		let chart = new ApexCharts(document.getElementById('piechart'), options);
		chart.render();
	});
</script>

<div class="apex-charts" id="piechart" />
