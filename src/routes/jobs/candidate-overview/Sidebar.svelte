<script>
    import { Card, CardBody, Col } from 'sveltestrap';
    import Link from 'svelte-link';
</script>
<Col lg={3}>
    <Card>
        <CardBody>
            <ul class="list-unstyled vstack gap-3 mb-0">
                <li>
                    <div class="d-flex">
                        <i class='bx bx-calendar font-size-18 text-primary'></i>
                        <div class="ms-3">
                            <h6 class="mb-1 fw-semibold">Experience:</h6>
                            <span class="text-muted">2+ Years</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="d-flex">
                        <i class='bx bx-money font-size-18 text-primary'></i>
                        <div class="ms-3">
                            <h6 class="mb-1 fw-semibold">Current Salary:</h6>
                            <span class="text-muted">$ 3451</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="d-flex">
                        <i class='bx bx-money font-size-18 text-primary'></i>
                        <div class="ms-3">
                            <h6 class="mb-1 fw-semibold">Expected Salary:</h6>
                            <span class="text-muted">$ 4000+</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="d-flex">
                        <i class='bx bx-user font-size-18 text-primary'></i>
                        <div class="ms-3">
                            <h6 class="mb-1 fw-semibold">Gender:</h6>
                            Male
                        </div>
                    </div>
                </li>
                <li>
                    <div class="d-flex">
                        <i class='mdi mdi-book-education font-size-18 text-primary'></i>
                        <div class="ms-3">
                            <h6 class="mb-1 fw-semibold">Qualification:</h6>
                            <span class="text-muted">Master Degree</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="d-flex">
                        <i class='mdi mdi-google-translate font-size-18 text-primary'></i>
                        <div class="ms-3">
                            <h6 class="mb-1 fw-semibold">Languages:</h6>
                            <span class="text-muted">English, France</span>
                        </div>
                    </div>
                </li>
                <li class="hstack gap-2 mt-3">
                    <Link href="#" class="btn btn-soft-primary w-100">Hire Now</Link>
                    <Link href="#" class="btn btn-soft-danger w-100">Contact Us</Link>
                </li>
            </ul>
        </CardBody>
    </Card>
</Col>