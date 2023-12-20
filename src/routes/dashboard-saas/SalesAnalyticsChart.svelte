<script>
	import { onMount } from 'svelte';
	import { getChartColorsArray } from '../../common/ChartColorsArray.svelte';
	export let chartColor;

	const SalesAnalyticsChartColors = getChartColorsArray(chartColor);

	const options = {
        series: [56, 38, 26],
        chart: {
            type: 'donut',
            height: 262,
        },
        labels: ['Series A', 'Series B', 'Series C'],
        colors: SalesAnalyticsChartColors,
        legend: {
            show: false,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '70%',
                }
            }
        }
	};

	onMount(() => {
		const chart = new ApexCharts(document.querySelector('#salesAnalyticsChart'), options);
		chart.render();
	});
</script>

<div id="salesAnalyticsChart" class="apex-charts" dir="ltr" />
