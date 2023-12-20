<script>
	import { onMount } from 'svelte';
	import { getChartColorsArray } from '../../../common/ChartColorsArray.svelte';
	export let chartColors;

	chartColors = getChartColorsArray(chartColors);

	const options = {
		series: [
            {
                name: 'New York Temperature',
                data: [
                    {
                        x: 'Jan',
                        y: [-2, 4]
                    },
                    {
                        x: 'Feb',
                        y: [-1, 6]
                    },
                    {
                        x: 'Mar',
                        y: [3, 10]
                    },
                    {
                        x: 'Apr',
                        y: [8, 16]
                    },
                    {
                        x: 'May',
                        y: [13, 22]
                    },
                    {
                        x: 'Jun',
                        y: [18, 26]
                    },
                    {
                        x: 'Jul',
                        y: [21, 29]
                    },
                    {
                        x: 'Aug',
                        y: [21, 28]
                    },
                    {
                        x: 'Sep',
                        y: [17, 24]
                    },
                    {
                        x: 'Oct',
                        y: [11, 18]
                    },
                    {
                        x: 'Nov',
                        y: [6, 12]
                    },
                    {
                        x: 'Dec',
                        y: [1, 7]
                    }
                ]
            }
        ],
        chart: {
            height: 350,
            type: 'rangeArea'
        },
        colors: chartColors,
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'New York Temperature (all year round)'
        },
        markers: {
            hover: {
                sizeOffset: 5
            }
        },
        dataLabels: {
            enabled: false
        },
        yaxis: {
            labels: {
                formatter: function(val) {
                    return val + '°C'
                }
            }
        }
	};

	onMount(() => {
		let chart = new ApexCharts(document.getElementById('rangeAreaChart'), options);
		chart.render();
	});
</script>

<div class="apex-charts" id="rangeAreaChart" />
