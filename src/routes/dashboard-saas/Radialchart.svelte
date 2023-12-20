<script>
	import { onMount } from 'svelte';
	import { getChartColorsArray } from '../../common/ChartColorsArray.svelte';
	export let chartColor;
	export let series;
	export let id;

	const radialChartColors = getChartColorsArray(chartColor);

	const options = {
        series: series,
        chart: {
            type: 'radialBar',
            width: 60,
            height: 60,
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: radialChartColors,
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: '60%'
                },
                track: {
                    margin: 0
                },
                dataLabels: {
                    show: false
                }
            }
        }
	};

	onMount(() => {
		const chart = new ApexCharts(document.querySelector('#'+id), options);
		chart.render();
	});
</script>

<div {id} class="apex-charts" dir="ltr" />
