<script>
	import Link from "svelte-link";
	import { Card, CardBody, CardFooter, CardTitle, Col, Nav, NavItem, NavLink, Table } from "sveltestrap";
    import { OverlayScrollbarsComponent } from "overlayscrollbars-svelte";
</script>

<Col xl="4">
    <Card>
        <CardBody>
            <CardTitle class="mb-4">
                Tasks
            </CardTitle>
            <Nav pills class="bg-light rounded">
                <NavItem>
                    <NavLink active>In Process</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink >Upcoming</NavLink>
                </NavItem>
            </Nav>

            <div class="mt-4">
                <OverlayScrollbarsComponent options={{ scrollbars: { autoHide: 'move',autoHideDelay: 100, } }} defer>
                <div style="max-height: 250px;" id="tasklist">
                    <div class="table-responsive">
                        <Table class="table-nowrap align-middle mb-0" hover>
                            <tbody>
                                <tr>
                                    <td style="width: 50px;">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="tasklistCheck01">
                                            <label class="form-check-label" for="tasklistCheck01"></label>
                                        </div>
                                    </td>
                                    <td>
                                        <h5 class="text-truncate font-size-14 mb-1">
                                            <Link href="#" class="text-dark">Skote Saas Dashboard</Link>
                                        </h5>
                                        <p class="text-muted mb-0">Assigned to Mark</p>
                                    </td>
                                    <td style="width: 90px;">
                                        <div>
                                            <ul class="list-inline mb-0 font-size-16">
                                                <li class="list-inline-item">
                                                    <Link href="#" class="text-success p-1"><i class="bx bxs-edit-alt"></i></Link>
                                                </li>
                                                <li class="list-inline-item">
                                                    <Link href="#" class="text-danger p-1"><i class="bx bxs-trash"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="tasklistCheck02">
                                            <label class="form-check-label" for="tasklistCheck02"></label>
                                        </div>
                                    </td>
                                    <td>
                                        <h5 class="text-truncate font-size-14 mb-1"><Link href="#" class="text-dark">New Landing UI</Link></h5>
                                        <p class="text-muted mb-0">Assigned to Team A</p>
                                    </td>
                                    <td>
                                        <div>
                                            <ul class="list-inline mb-0 font-size-16">
                                                <li class="list-inline-item">
                                                    <Link href="#" class="text-success p-1"><i class="bx bxs-edit-alt"></i></Link>
                                                </li>
                                                <li class="list-inline-item">
                                                    <Link href="#" class="text-danger p-1"><i class="bx bxs-trash"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="tasklistCheck02">
                                            <label class="form-check-label" for="tasklistCheck02"></label>
                                        </div>
                                    </td>
                                    <td>
                                        <h5 class="text-truncate font-size-14 mb-1"><Link href="#" class="text-dark">Brand logo design</Link></h5>
                                        <p class="text-muted mb-0">Assigned to Janis</p>
                                    </td>
                                    <td>
                                        <div>
                                            <ul class="list-inline mb-0 font-size-16">
                                                <li class="list-inline-item">
                                                    <Link href="#" class="text-success p-1"><i class="bx bxs-edit-alt"></i></Link>
                                                </li>
                                                <li class="list-inline-item">
                                                    <Link href="#" class="text-danger p-1"><i class="bx bxs-trash"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="tasklistCheck04">
                                            <label class="form-check-label" for="tasklistCheck04"></label>
                                        </div>
                                    </td>
                                    <td>
                                        <h5 class="text-truncate font-size-14 mb-1"><Link href="#" class="text-dark">Blog Template UI</Link></h5>
                                        <p class="text-muted mb-0">Assigned to Dianna</p>
                                    </td>
                                    <td>
                                        <div>
                                            <ul class="list-inline mb-0 font-size-16">
                                                <li class="list-inline-item">
                                                    <Link href="#" class="text-success p-1"><i class="bx bxs-edit-alt"></i></Link>
                                                </li>
                                                <li class="list-inline-item">
                                                    <Link href="#" class="text-danger p-1"><i class="bx bxs-trash"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="tasklistCheck05">
                                            <label class="form-check-label" for="tasklistCheck05"></label>
                                        </div>
                                    </td>
                                    <td>
                                        <h5 class="text-truncate font-size-14 mb-1"><Link href="#" class="text-dark">Multipurpose Landing</Link></h5>
                                        <p class="text-muted mb-0">Assigned to Team B</p>
                                    </td>
                                    <td>
                                        <div>
                                            <ul class="list-inline mb-0 font-size-16">
                                                <li class="list-inline-item">
                                                    <Link href="#" class="text-success p-1"><i class="bx bxs-edit-alt"></i></Link>
                                                </li>
                                                <li class="list-inline-item">
                                                    <Link href="#" class="text-danger p-1"><i class="bx bxs-trash"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="tasklistCheck06">
                                            <label class="form-check-label" for="tasklistCheck06"></label>
                                        </div>
                                    </td>
                                    <td>
                                        <h5 class="text-truncate font-size-14 mb-1"><Link href="#" class="text-dark">Redesign - Landing page</Link></h5>
                                        <p class="text-muted mb-0">Assigned to Jerry</p>
                                    </td>
                                    <td>
                                        <div>
                                            <ul class="list-inline mb-0 font-size-16">
                                                <li class="list-inline-item">
                                                    <Link href="#" class="text-success p-1"><i class="bx bxs-edit-alt"></i></Link>
                                                </li>
                                                <li class="list-inline-item">
                                                    <Link href="#" class="text-danger p-1"><i class="bx bxs-trash"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="tasklistCheck07">
                                            <label class="form-check-label" for="tasklistCheck07"></label>
                                        </div>
                                    </td>
                                    <td>
                                        <h5 class="text-truncate font-size-14 mb-1"><Link href="#" class="text-dark">Skote Crypto Dashboard</Link></h5>
                                        <p class="text-muted mb-0">Assigned to Eric</p>
                                    </td>
                                    <td>
                                        <div>
                                            <ul class="list-inline mb-0 font-size-16">
                                                <li class="list-inline-item">
                                                    <Link href="#" class="text-success p-1"><i class="bx bxs-edit-alt"></i></Link>
                                                </li>
                                                <li class="list-inline-item">
                                                    <Link href="#" class="text-danger p-1"><i class="bx bxs-trash"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </OverlayScrollbarsComponent>
            </div>
        </CardBody>
        <CardFooter class="bg-transparent border-top">
            <div class="text-center">
                <Link href="#" class="btn btn-primary waves-effect waves-light"> Add new Task</Link>
            </div>
        </CardFooter>
    </Card>
</Col>