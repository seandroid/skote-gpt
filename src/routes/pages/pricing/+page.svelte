<script>
	import { Button, Card, CardBody, Col, Row } from 'sveltestrap';
	import Breadcrumb from '../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';

	const pricings = [
		{
			id: 1,
			title: 'Starter',
			description: 'Neque quis est',
			icon: 'bx-walk',
			price: '19',
			duration: 'Per month',
			link: '',
			features: [
				{ title: 'Free Live Support' },
				{ title: 'Unlimited User' },
				{ title: 'No Time Tracking' },
				{ title: 'Free Setup' }
			]
		},
		{
			id: 2,
			title: 'Professional',
			description: 'Quis autem iure',
			icon: 'bx-run',
			price: '29',
			duration: 'Per month',
			link: '',
			features: [
				{ title: 'Free Live Support' },
				{ title: 'Unlimited User' },
				{ title: 'No Time Tracking' },
				{ title: 'Free Setup' }
			]
		},
		{
			id: 3,
			title: 'Enterprise',
			description: 'Sed ut neque unde',
			icon: 'bx-cycling',
			price: '39',
			duration: 'Per month',
			link: '',
			features: [
				{ title: 'Free Live Support' },
				{ title: 'Unlimited User' },
				{ title: 'No Time Tracking' },
				{ title: 'Free Setup' }
			]
		},
		{
			id: 4,
			title: 'Unlimited',
			description: 'Itaque earum hic',
			icon: 'bx-car',
			price: '49',
			duration: 'Per month',
			link: '',
			features: [
				{ title: 'Free Live Support' },
				{ title: 'Unlimited User' },
				{ title: 'No Time Tracking' },
				{ title: 'Free Setup' }
			]
		}
	];
</script>

<HeadTitle title="Pricing" />
<Breadcrumb pagetitle="Pricing" title="Utility" />

<Row class="justify-content-center">
	<Col lg={6}>
		<div class="text-center mb-5">
			<h4>Choose your Pricing plan</h4>
			<p class="text-muted">
				To achieve this, it would be necessary to have uniform grammar, pronunciation and more
				common words If several languages coalesce
			</p>
		</div>
	</Col>
</Row>

<Row>
	{#each pricings as pricing}
		<Col xl="3" md="6">
			<Card class="plan-box">
				<CardBody class="p-4">
					<div class="d-flex">
						<div class="flex-grow-1">
							<h5>{pricing.title}</h5>
							<p class="text-muted">{pricing.description}</p>
						</div>
						<div class="ms-3">
							<i class={'bx ' + pricing.icon + ' h1 text-primary'} />
						</div>
					</div>
					<div class="py-4">
						<h2>
							<sup>
								<small>$</small>
							</sup>
							{pricing.price}/
							<span class="font-size-13">
								{pricing.duration}
							</span>
						</h2>
					</div>
					<div class="text-center plan-btn">
						<Button color="primary" size="sm" class="waves-effect waves-light">Sign up Now</Button>
					</div>

					<div class="plan-features mt-5">
						{#each pricing.features as feature}
							<p>
								<i class="bx bx-checkbox-square text-primary me-2" />
								{feature.title}
							</p>
						{/each}
					</div>
				</CardBody>
			</Card>
		</Col>
	{/each}
</Row>
