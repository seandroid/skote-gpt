<script>
	import { onMount } from 'svelte';
	import { getChartColorsArray } from '../../../common/ChartColorsArray.svelte';
	export let chartColors;

	chartColors = getChartColorsArray(chartColors);

  const options = {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: !1,
      },
    },
    plotOptions: {
      bar: {
        horizontal: !0,
      },
    },
    dataLabels: {
      enabled: !1,
    },
    series: [
      {
        data: [380, 430, 450, 475, 550, 584, 780, 1100, 1220, 1365],
      },
    ],
    colors: chartColors,
    grid: {
      borderColor: "#f1f1f1",
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
    },
  };

  onMount(() => {
		let chart = new ApexCharts(document.getElementById('bar_charts'), options);
		chart.render();
	});
</script>

<div class="apex-charts" id='bar_charts'></div>