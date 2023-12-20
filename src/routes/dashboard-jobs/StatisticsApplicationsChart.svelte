<script>
	import { onMount } from "svelte";
	import { getChartColorsArray } from '../../common/ChartColorsArray.svelte';
    export let dataColors;


    var statisticsApplicationColors = getChartColorsArray(dataColors);

    var options = {
        chart: {
            height: 350,
            type: 'line',
            stacked: false,
            toolbar: {
                show: false,
            },
        },
        series : [{
            name: 'Companay',
            type: 'column',
            data: [30, 48, 28, 74, 39, 87, 54, 36, 50, 87, 84]
        }, {
            name: 'New Jobs',
            type: 'column',
            data: [20, 50, 42, 10, 24, 28, 60, 35, 47, 64, 78]
        }, {
            name: 'Total Jobs',
            type: 'area',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        }, {
            name: 'Job View',
            type: 'line',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        }],
        legend: {
            show: true,
            offsetY: 10,
        },
        stroke: {
            width: [0, 0, 2, 2],
            curve: 'smooth'
        },  
        plotOptions: {
            bar: {
                columnWidth: '30%'
            }
        },
        fill: {
            opacity: [1, 1, 0.1, 1],
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
            }
        },
        labels: ['01/01/2022', '02/01/2022', '03/01/2022', '04/01/2022', '05/01/2022', '06/01/2022', '07/01/2022',
            '08/01/2022', '09/01/2022', '10/01/2022', '11/01/2022'
        ],
        colors: statisticsApplicationColors,
        markers: {
            size: 0
        },
        xaxis: {
            type: 'datetime'
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function (y) {
                    if (typeof y !== "undefined") {
                        return y.toFixed(0) + " points";
                    }
                    return y;

                }
            }
        }
    };

    onMount(() => {
		let chart = new ApexCharts(document.querySelector('#staticAppchart'), options);
		chart.render();
	});
</script>
<div class="" id="staticAppchart"/>