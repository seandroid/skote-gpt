<script>
    import Link from 'svelte-link';
    import { Button, Card, CardBody, Col, Table } from 'sveltestrap';
    import  adobephotoshop from "../../../assets/images/companies/adobe-photoshop.svg"
</script>
<Col xl={3}>
    <Card>
        <CardBody>
            <h5 class="fw-semibold">Overview</h5>

            <div class="table-responsive">
                <Table >
                    <tbody>
                        <tr>
                            <th>Job Title</th>
                            <td>Magento Developer</td>
                        </tr>
                        <tr>
                            <th>Experience:</th>
                            <td>0-2 Years</td>
                        </tr>
                        <tr>
                            <th>Vacancy</th>
                            <td>12</td>
                        </tr>
                        <tr>
                            <th>Job Type</th>
                            <td><span class="badge badge-soft-success">Full Time</span></td>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <td><span class="badge badge-soft-info">New</span></td>
                        </tr>
                        <tr>
                            <th>Posted Date</th>
                            <td>25 June, 2022</td>
                        </tr>
                        <tr>
                            <th>Close Date</th>
                            <td>13 April, 2022</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div class="hstack gap-2">
                <Button class="btn btn-soft-primary w-100">Apply Now</Button>
                <Button class="btn btn-soft-danger w-100">Contact Us</Button>
            </div>
        </CardBody>
    </Card>

    <Card>
        <CardBody>
            <div class="text-center">
                <img src={adobephotoshop} alt="" height="50" class="mx-auto d-block" />
                <h5 class="mt-3 mb-1">Themesbrand</h5>
                <p class="text-muted mb-0">Since July 2017</p>
            </div>

            <ul class="list-unstyled mt-4">
                <li>
                    <div class="d-flex">
                        <i class="bx bx-phone text-primary fs-4"></i>
                        <div class="ms-3">
                            <h6 class="fs-14 mb-2">Phone</h6>
                            <p class="text-muted fs-14 mb-0">+589 560 56555</p>
                        </div>
                    </div>
                </li>
                <li class="mt-3">
                    <div class="d-flex">
                        <i class="bx bx-mail-send text-primary fs-4"></i>
                        <div class="ms-3">
                            <h6 class="fs-14 mb-2">Email</h6>
                            <p class="text-muted fs-14 mb-0">themesbrand@gmail.com</p>
                        </div>
                    </div>
                </li>
                <li class="mt-3">
                    <div class="d-flex">
                        <i class="bx bx-globe text-primary fs-4"></i>
                        <div class="ms-3">
                            <h6 class="fs-14 mb-2">Website</h6>
                            <p class="text-muted fs-14 text-break mb-0">www.themesbrand.com</p>
                        </div>
                    </div>
                </li>
                <li class="mt-3">
                    <div class="d-flex">
                        <i class="bx bx-map text-primary fs-4"></i>
                        <div class="ms-3">
                            <h6 class="fs-14 mb-2">Location</h6>
                            <p class="text-muted fs-14 mb-0">Oakridge Lane Richardson.</p>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="mt-4">
                <Link href="#" class="btn btn-soft-primary btn-hover w-100 rounded"><i class="mdi mdi-eye"></i> View Profile</Link>
            </div>
        </CardBody>
    </Card>
</Col>