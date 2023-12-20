<script>
	import { Card, CardBody, CardTitle, Col, Row } from 'sveltestrap';
	import StarRating from '@ernane/svelte-star-rating';

	import Breadcrumb from './../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	const config = {
		readOnly: false,
		countStars: 5,
		range: {
			min: 0,
			max: 5,
			step: 1
		},
		score: 0,
		showScore: true,
		scoreFormat: function () {
			// return `(${this.score.toFixed(0)}/${this.countStars})`;
			return '';
		},
		name: '',
		starConfig: {
			size: 20,
			fillColor: '#556ee6',
			strokeColor: '#BB8511',
			unfilledColor: '#FFF',
			strokeUnfilledColor: '#000'
		}
	};
	const halfRate = {
		readOnly: false,
		countStars: 5,
		range: {
			min: 0,
			max: 5,
			step: 0.5
		},
		score: 2.5,
		showScore: true,
		scoreFormat: function () {
			return `(${this.score}/${this.countStars})`;
		},
		name: '',
		starConfig: {
			size: 24,
			fillColor: '#556ee6',
			strokeColor: '#BB8511',
			unfilledColor: '#FFF',
			strokeUnfilledColor: '#000'
		}
	};

	const readOnlyRate = {
		readOnly: true,
		countStars: 5,
		range: {
			min: 0,
			max: 5,
			step: 0.5
		},
		score: 2.5,
		showScore: true,
		scoreFormat: function () {
			return ``;
		},
		name: '',
		starConfig: {
			size: 24,
			fillColor: '#556ee6',
			strokeColor: '#BB8511',
			unfilledColor: '#FFF',
			strokeUnfilledColor: '#000'
		}
	};

	const readOnlyRatewithvalue = {
		readOnly: true,
		countStars: 5,
		range: {
			min: 0,
			max: 5,
			step: 0.5
		},
		score: 3,
		showScore: true,
		scoreFormat: function () {
			return `(${this.score}/${this.countStars})`;
		},
		name: '',
		starConfig: {
			size: 24,
			fillColor: '#556ee6',
			strokeColor: '#BB8511',
			unfilledColor: '#FFF',
			strokeUnfilledColor: '#000'
		}
	};

	const startStopRatewithtwoStep = {
		readOnly: false,
		countStars: 5,
		range: {
			min: 0,
			max: 10,
			step: 1
		},
		score: 0,
		showScore: true,
		scoreFormat: function () {
			return `(${this.score * 2})`;
		},
		name: '',
		starConfig: {
			size: 24,
			fillColor: '#556ee6',
			strokeColor: '#BB8511',
			unfilledColor: '#FFF',
			strokeUnfilledColor: '#000'
		}
	};

	const customcssrate = {
		readOnly: false,
		countStars: 5,
		range: {
			min: 0,
			max: 5,
			step: 1
		},
		score: 0,
		showScore: true,
		scoreFormat: function () {
			return ``;
		},
		name: '',
		starConfig: {
			size: 24,
			fillColor: '#000',
			strokeColor: '#BB8511',
			unfilledColor: '#FFF',
			strokeUnfilledColor: '#000'
		}
	};
</script>

<HeadTitle title="Rating" />

<Breadcrumb title="UI Elements" pagetitle="Rating" />

<Row>
	<Col xs="">
		<Card>
			<CardBody>
                <Row>
                    <Col xl="3" md="4" sm="6">
                        <div class="p-4 text-center">
                            <h5 class="font-size-15">Default rating</h5>
                            <StarRating {config} />
                        </div>
                    </Col>
                    <Col xl="3" md="4" sm="6">
                        <div class="p-4 text-center">
                            <h5 class="font-size-15">Half rating</h5>
                            <StarRating config={halfRate}/>
                        </div>
                    </Col>
                    <Col xl="3" md="4" sm="6">
                        <div class="p-4 text-center">
                            <h5 class="font-size-15">Disabled rating</h5>
                            <StarRating config={readOnlyRate}/>
                        </div>
                    </Col>
                    <Col xl="3" md="4" sm="6">
                        <div class="p-4 text-center">
                            <h5 class="font-size-15">Readonly rating with a value</h5>
                            <StarRating config={readOnlyRatewithvalue}/>
                        </div>
                    </Col>
                    <Col xl="3" md="4" sm="6">
                        <div class="p-4 text-center">
                            <h5 class="font-size-15">Set start and stop rate [2..10] with step 2</h5>
                            <StarRating config={startStopRatewithtwoStep}/>
                        </div>
                    </Col>
                    <Col xl="3" md="4" sm="6">
                        <div class="p-4 text-center">
                            <h5 class="font-size-15">Custom CSS icons</h5>
                            <StarRating config={customcssrate}/>
                        </div>
                    </Col>
				</Row>
			</CardBody>
		</Card>
	</Col>
</Row>
