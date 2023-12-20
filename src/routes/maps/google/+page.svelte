<script>
	import { Card, CardBody, CardTitle, Col, Row } from 'sveltestrap';

	import Breadcrumb from './../../../common/Breadcrumb.svelte';
	import HeadTitle from './../../../common/HeadTitle.svelte';
    import Gmapmarker from "./Gmapmarker.svelte";
    import Gmapoverlay from './Gmapoverlay.svelte';
    import GmapStreetViewPanorama from './GmapStreetViewPanorama.svelte';
    import GmapType from './GmapType.svelte';
</script>
<svelte:head>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCtSAR45TFgZjOs4nBFFZnII-6mMHLfSYI"></script>
</svelte:head>

<HeadTitle title="Google Maps" />

<Breadcrumb title="Maps" pagetitle="Google Maps" />

<Row>
    <Col lg={6}>
        <Card>
            <CardBody>
                <CardTitle>Google Markers</CardTitle>
                <p class="card-title-dsec">Example of google maps.</p>

                <Gmapmarker />
        </CardBody>
        </Card>
    </Col>
    <Col lg={6}>
        <Card>
            <CardBody>
                <CardTitle>Google Overlays</CardTitle>
                <p class="card-title-dsec">Example of google maps.</p>

                <Gmapoverlay />
        </CardBody>
        </Card>
    </Col>
</Row>
<Row>
    <Col lg={6}>
        <Card>
            <CardBody>
                <CardTitle>Street View Panoramas</CardTitle>
                <p class="card-title-dsec">Example of google maps.</p>

                <GmapStreetViewPanorama />
        </CardBody>
        </Card>
    </Col>
    <Col lg={6}>
        <Card>
            <CardBody>
                <CardTitle>Google Markers</CardTitle>
                <p class="card-title-dsec">Example of google maps.</p>
                <GmapType />
        </CardBody>
        </Card>
    </Col>
</Row>