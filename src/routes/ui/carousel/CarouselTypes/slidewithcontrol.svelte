<script>
	import { Carousel, CarouselControl, CarouselItem } from 'sveltestrap';
	export let items;
	let activeIndex;
</script>

<Carousel {items} bind:activeIndex>
	<div class="carousel-inner">
		{#each items as item, index}
			<CarouselItem bind:activeIndex itemIndex={index}>
				<img src={item.src} class="d-block w-100" alt={`${item} ${index + 1}`} />
			</CarouselItem>
		{/each}
	</div>

	<CarouselControl direction="prev" bind:activeIndex {items} />
	<CarouselControl direction="next" bind:activeIndex {items} />
</Carousel>
