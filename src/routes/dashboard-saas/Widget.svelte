<script>
	import { Card, CardBody, Col, Image, Row, Badge } from "sveltestrap";
    import profileImg from "../../assets/images/profile-img.png"
</script>
<Col xl={4}>
    <Card color="primary" class="bg-primary-subtle">
        <Row>
            <Col xs="7">
                <div class="text-primary p-3">
                    <h5 class="text-primary">Welcome Back !</h5>
                    <p>Skote Saas Dashboard</p>

                    <ul class="ps-3 mb-0">
                        <li class="py-1">7 + Layouts</li>
                        <li class="py-1">Multiple apps</li>
                    </ul>
                </div>
            </Col>
            <Col xs="5" class="align-self-end">
                <Image src={profileImg} class="img-fluid" />
            </Col>
        </Row>
    </Card>
</Col>
<Col xl={8}>
<Row>
    <Col sm="4">
        <Card>
            <CardBody>
                <div class="d-flex align-items-center mb-3">
                    <div class="avatar-xs me-3">
                        <span class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-18">
                            <i class="bx bx-copy-alt"></i>
                        </span>
                    </div>
                    <h5 class="font-size-14 mb-0">Orders</h5>
                </div>
                <div class="text-muted mt-4">
                    <h4>1,452 <i class="mdi mdi-chevron-up ms-1 text-success"></i></h4>
                    <div class="d-flex">
                        <span class="badge badge-soft-success font-size-12"> + 0.2% </span> <span class="ms-2 text-truncate">From previous period</span>
                    </div>
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col sm="4">
        <Card>
            <CardBody>
                <div class="d-flex align-items-center mb-3">
                    <div class="avatar-xs me-3">
                        <span class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-18">
                            <i class="bx bx-archive-in"></i>
                        </span>
                    </div>
                    <h5 class="font-size-14 mb-0">Revenue</h5>
                </div>
                <div class="text-muted mt-4">
                    <h4>$ 28,452 <i class="mdi mdi-chevron-up ms-1 text-success"></i></h4>
                    <div class="d-flex">
                        <span class="badge badge-soft-success font-size-12"> + 0.2% </span> <span class="ms-2 text-truncate">From previous period</span>
                    </div>
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col sm="4">
        <Card>
            <CardBody>
                <div class="d-flex align-items-center mb-3">
                    <div class="avatar-xs me-3">
                        <span class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-18">
                            <i class="bx bx-purchase-tag-alt"></i>
                        </span>
                    </div>
                    <h5 class="font-size-14 mb-0">Average Price</h5>
                </div>
                <div class="text-muted mt-4">
                    <h4>$ 16.2 <i class="mdi mdi-chevron-up ms-1 text-success"></i></h4>
                    <div class="d-flex">
                        <span class="badge badge-soft-warning font-size-12"> 0% </span> <span class="ms-2 text-truncate">From previous period</span>
                    </div>
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>
</Col>