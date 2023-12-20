<script>
    import { onMount } from "svelte";

    onMount(() => {
        setTimeout(() => {
            const myLatLng = { lat: -12.043333, lng: -77.028333 };
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 15,
                center: myLatLng,
            });

            // marker
            new google.maps.Marker({
                position: myLatLng,
                map,
                title: "Hello World!",
            });
        }, 500);
    });
</script>

<div id="map" class="gmaps" />
