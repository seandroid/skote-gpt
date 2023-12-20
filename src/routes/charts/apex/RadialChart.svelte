<script>
	import { onMount } from 'svelte';
	import { getChartColorsArray } from '../../../common/ChartColorsArray.svelte';
	export let chartColors;

	chartColors = getChartColorsArray(chartColors);

  const options = {
    chart: {
      height: 370,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: !0,
            label: "Total",
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249;
            },
          },
        },
      },
    },
    series: [44, 55, 67, 83],
    labels: ["Computer", "Tablet", "Laptop", "Mobile"],
    colors: chartColors,
  };

  onMount(() => {
		let chart = new ApexCharts(document.getElementById('radialchart'), options);
		chart.render();
	});
</script>

<div class="apex-charts" id="radialchart" />
