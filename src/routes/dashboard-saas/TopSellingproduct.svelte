<script>
	import { Card, CardBody, Col, Label, Table } from 'sveltestrap';
	import Radialchart from './Radialchart.svelte';
</script>

<Col xl="4">
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
				<h4 class="card-title mb-4">Top Selling product</h4>
			</div>
			<div class="text-muted text-center">
				<p class="mb-2">Product A</p>
				<h4>$ 6385</h4>
				<p class="mt-4 mb-0">
					<span class="badge badge-soft-success font-size-11 me-2">
						0.6% <i class="mdi mdi-arrow-up" />
					</span> From previous period
				</p>
			</div>
            <div class="table-responsive mt-4">
                <Table class="align-middle mb-0">
                    <tbody>
                        <tr>
                            <td>
                                <h5 class="font-size-14 mb-1">Product A</h5>
                                <p class="text-muted mb-0">Neque quis est</p>
                            </td>

                            <td>
                                <Radialchart chartColor={["--bs-primary"]} series={[37]} id="radialchat1" />
                            </td>
                            <td>
                                <p class="text-muted mb-1">Sales</p>
                                <h5 class="mb-0">37 %</h5>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 class="font-size-14 mb-1">Product B</h5>
                                <p class="text-muted mb-0">Quis autem iure</p>
                            </td>

                            <td>
                                <Radialchart chartColor={["--bs-success"]} series={[72]} id="radialchat2"/>
                            </td>
                            <td>
                                <p class="text-muted mb-1">Sales</p>
                                <h5 class="mb-0">72 %</h5>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 class="font-size-14 mb-1">Product C</h5>
                                <p class="text-muted mb-0">Sed aliquam mauris.</p>
                            </td>

                            <td>
                                <Radialchart chartColor={["--bs-danger"]} series={[54]} id="radialchat3"/>

                            </td>
                            <td>
                                <p class="text-muted mb-1">Sales</p>
                                <h5 class="mb-0">54 %</h5>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
		</CardBody>
	</Card>
</Col>
