<script>
	import { onMount } from "svelte";
    export let dataColors;
    import {getChartColorsArray} from "../../common/ChartColorsArray.svelte"

    var ApplicationReveicedTimeColors = getChartColorsArray(dataColors);
    
    var options = {
        chart: {
            type: "line",
            height: 378,
            toolbar: {
                show: false,
            },
        },
        series: [
            {
                name: "Received Application",
                data: [34, 44, 54, 21, 12, 43, 33, 80, 66],
            },
        ],
        stroke: {
            width: 3,
            curve: "smooth",
        },
        labels: [
            "8 PM",
            "9 PM",
            "10 PM",
            "11 PM",
            "12 PM",
            "1 AM",
            "2 AM",
            "3 AM",
            "4 AM",
        ],
        dataLabels: {
            enabled: false,
        },
        colors: ApplicationReveicedTimeColors,
        markers: {
            hover: {
                sizeOffset: 4,
            },
        },
    };

    onMount(()=> {
        let chart = new ApexCharts(document.querySelector('#receivedTimeChart'), options);
		chart.render();
    })

</script>

<div class="" id="receivedTimeChart" />
