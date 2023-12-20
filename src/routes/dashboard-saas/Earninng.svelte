<script>
	import Link from 'svelte-link';
	import { Card, CardBody, Col, Label, Row } from 'sveltestrap';
	import EarningChart from './EarningChart.svelte';
</script>

<Col xl="8">
	<Card>
		<CardBody>
			<div class="clearfix">
				<div class="float-end">
					<div class="input-group input-group-sm">
						<select class="form-select form-select-sm">
							<option value="JA" selected>Jan</option>
							<option value="DE">Dec</option>
							<option value="NO">Nov</option>
							<option value="OC">Oct</option>
						</select>
						<Label class="input-group-text">Month</Label>
					</div>
				</div>
				<h4 class="card-title mb-4">Earning</h4>
			</div>
			<Row>
				<Col lg="4">
					<div class="text-muted">
						<div class="mb-4">
							<p>This month</p>
							<h4>$2453.35</h4>
							<div>
								<span class="badge badge-soft-success font-size-12 me-1"> + 0.2% </span> From previous
								period
							</div>
						</div>
						<div>
							<Link href="#" class="btn btn-primary waves-effect waves-light btn-sm">
								View Details <i class="mdi mdi-chevron-right ms-1" />
							</Link>
						</div>
						<div class="mt-4">
							<p class="mb-2">Last month</p>
							<h5>$2281.04</h5>
						</div>
					</div>
				</Col>
				<Col lg="8">
					<EarningChart chartColor={['--bs-primary']} />
				</Col>
			</Row>
		</CardBody>
	</Card>
</Col>
