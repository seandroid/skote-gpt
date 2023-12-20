<script>
	import { getChartColorsArray } from '../../common/ChartColorsArray.svelte';
	import { onMount } from 'svelte';
	export let dataColors;
	export let series;
	export let id;

	var areacharteathereumColors = getChartColorsArray(dataColors);

	var options = {
		chart: {
			width: 130,
			height: 46,
			type: 'area',
			sparkline: {
				enabled: true
			},
			toolbar: {
				show: false
			}
		},
		series: series,
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'smooth',
			width: 1.5
		},
		fill: {
			type: 'gradient',
			gradient: {
				shadeIntensity: 1,
				inverseColors: false,
				opacityFrom: 0.45,
				opacityTo: 0.05,
				stops: [50, 100, 100, 100]
			}
		},
		tooltip: {
			fixed: {
				enabled: false
			},
			x: {
				show: false
			},
			y: {
				title: {
					formatter: function (seriesName) {
						return '';
					}
				}
			},
			marker: {
				show: false
			}
		},
		colors: areacharteathereumColors
	};

    onMount(() => {
		let chart = new ApexCharts(document.querySelector('#jobchart'+id), options);
		chart.render();
	});
</script>


	<div class="apex-charts" id={"jobchart"+id} /> 
