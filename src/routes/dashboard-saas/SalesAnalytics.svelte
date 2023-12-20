<script>
	import { Card, CardBody, CardTitle, Col, Row } from "sveltestrap";
	import SalesAnalyticsChart from "./SalesAnalyticsChart.svelte";

</script>
<Col xl="4">
    <Card>
        <CardBody>
            <CardTitle class="mb-4">
                Sales Analytics
            </CardTitle>
            <div>
                <SalesAnalyticsChart chartColor={["--bs-primary", "--bs-success", "--bs-danger"]}/>
            </div>
            <div class="text-center text-muted">
                <Row>
                    <Col xs="4">
                        <div class="mt-4">
                            <p class="mb-2 text-truncate"><i class="mdi mdi-circle text-primary me-1"></i> Product A</p>
                            <h5>$ 2,132</h5>
                        </div>
                    </Col>
                    <Col xs="4">
                        <div class="mt-4">
                            <p class="mb-2 text-truncate"><i class="mdi mdi-circle text-success me-1"></i> Product B</p>
                            <h5>$ 1,763</h5>
                        </div>
                    </Col>
                    <Col xs="4">
                        <div class="mt-4">
                            <p class="mb-2 text-truncate"><i class="mdi mdi-circle text-danger me-1"></i> Product C</p>
                            <h5>$ 973</h5>
                        </div>
                    </Col>
                </Row>
            </div>
        </CardBody>
    </Card>
</Col>