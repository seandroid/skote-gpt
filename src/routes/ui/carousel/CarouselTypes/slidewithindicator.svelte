<script>
  import {browser} from "$app/environment"
  import Carousel from "svelte-carousel";
	import Link from "svelte-link";
	import { Button } from "sveltestrap";
  let pagesCount;
  let currentPageIndex;
  let showPage;
  export let items;
  let carousel; // for calling methods of the carousel instance
  const handleNextClick = () => {
    carousel.goToNext()
  }
  
  const handleBackClick = () => {
    carousel.goToPrev()
  }

  let activeIndex = 0;

function handleSlideChange(index) {
  activeIndex = index.detail;
}
</script>

{#if browser}
<Carousel
particlesToShow={1}
arrows={false}
particlesToScroll={1}
bind:this={carousel}
let:currentPageIndex
  let:pagesCount
  let:showPage
  on:pageChange={handleSlideChange}
>
<div slot="dots" class="custom-dots">
  <div class="carousel-indicators">
    {#each Array.from({ length: 3 }) as _, i}
    <Button color="" data-bs-target=""
      class={` ${i === activeIndex ? 'active' : ''}`}
      on:click={() => (activeIndex = i)}
    ></Button>
  {/each}
    
  </div>
</div>
{#each items as item}
    <div class="item">
      <img src={item.src} class="d-block img-fluid" alt={item.altText} />
    </div>
  {/each}
</Carousel>
<Link class="carousel-control-prev" href="#" role="button" on:click={handleBackClick}>
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</Link>
<Link class="carousel-control-next" href="#" role="button" on:click={handleNextClick}>
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</Link>
{/if}