<script>
	import { onMount } from 'svelte';
	import { getChartColorsArray } from '../../common/ChartColorsArray.svelte';
	export let chartColor;

	const linechartBasicColors = getChartColorsArray(chartColor);

	const options = {
		series: [{
            name: 'series1',
            data: [31, 40, 36, 51, 49, 72, 69, 56, 68, 82, 68, 76]
        }],
        chart: {
            height: 320,
            type: 'line',
            toolbar: 'false',
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 8,
                opacity: 0.2
            },
        },
        dataLabels: {
            enabled: false
        },
        colors: linechartBasicColors,

        stroke: {
            curve: 'smooth',
            width: 3,
        },
	};

	onMount(() => {
		const chart = new ApexCharts(document.querySelector('#linechart'), options);
		chart.render();
	});
</script>

<div id="linechart" class="apex-charts" dir="ltr" />
