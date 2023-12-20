<script>
	import Link from "svelte-link";
	import { Button, Card, CardBody, CardTitle, Col, ModalBody, ModalFooter, ModalHeader, Table } from "sveltestrap";
    import Modal from "../../common/Modal.svelte"
    import img7 from "../../assets/images/product/img-7.png"
    import img4 from "../../assets/images/product/img-4.png"
    let open = false

    const toggleModal = () => {
        open = !open
    }
</script>
<Col lg={12}>
    <Card >
        <CardBody>
            <CardTitle class="mb-4">
                Latest Transaction
            </CardTitle>
            <div class="table-responsive">
                <Table class="align-middle table-nowrap mb-0">
                    <thead class="table-light">
                        <tr>
                            <th style="width: 20px;">
                                <div class="form-check font-size-16 align-middle">
                                    <input class="form-check-input" type="checkbox" id="transactionCheck01">
                                    <label class="form-check-label" for="transactionCheck01"></label>
                                </div>
                            </th>
                            <th class="align-middle">Order ID</th>
                            <th class="align-middle">Billing Name</th>
                            <th class="align-middle">Date</th>
                            <th class="align-middle">Total</th>
                            <th class="align-middle">Payment Status</th>
                            <th class="align-middle">Payment Method</th>
                            <th class="align-middle">View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="form-check font-size-16">
                                    <input class="form-check-input" type="checkbox" id="transactionCheck02">
                                    <label class="form-check-label" for="transactionCheck02"></label>
                                </div>
                            </td>
                            <td><Link class="text-body fw-bold">#SK2540</Link> </td>
                            <td>Neal Matthews</td>
                            <td>
                                07 Oct, 2019
                            </td>
                            <td>
                                $400
                            </td>
                            <td>
                                <span class="badge badge-pill badge-soft-success font-size-11">Paid</span>
                            </td>
                            <td>
                                <i class="fab fa-cc-mastercard me-1"></i> Mastercard
                            </td>
                            <td>
                                <Button type="button" color="primary" size="sm" class="btn-rounded waves-effect waves-light" on:click={toggleModal}>
                                    View Details
                                </Button>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div class="form-check font-size-16">
                                    <input class="form-check-input" type="checkbox" id="transactionCheck03">
                                    <label class="form-check-label" for="transactionCheck03"></label>
                                </div>
                            </td>
                            <td><Link class="text-body fw-bold">#SK2541</Link> </td>
                            <td>Jamal Burnett</td>
                            <td>
                                07 Oct, 2019
                            </td>
                            <td>
                                $380
                            </td>
                            <td>
                                <span class="badge badge-pill badge-soft-danger font-size-11">Chargeback</span>
                            </td>
                            <td>
                                <i class="fab fa-cc-visa me-1"></i> Visa
                            </td>
                            <td>
                                <Button type="button" color="primary" size="sm" class="btn-rounded waves-effect waves-light" on:click={toggleModal}>
                                    View Details
                                </Button>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div class="form-check font-size-16">
                                    <input class="form-check-input" type="checkbox" id="transactionCheck04">
                                    <label class="form-check-label" for="transactionCheck04"></label>
                                </div>
                            </td>
                            <td><Link class="text-body fw-bold">#SK2542</Link> </td>
                            <td>Juan Mitchell</td>
                            <td>
                                06 Oct, 2019
                            </td>
                            <td>
                                $384
                            </td>
                            <td>
                                <span class="badge badge-pill badge-soft-success font-size-11">Paid</span>
                            </td>
                            <td>
                                <i class="fab fa-cc-paypal me-1"></i> Paypal
                            </td>
                            <td>
                                <Button type="button" color="primary" size="sm" class="btn-rounded waves-effect waves-light" on:click={toggleModal}>
                                    View Details
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check font-size-16">
                                    <input class="form-check-input" type="checkbox" id="transactionCheck05">
                                    <label class="form-check-label" for="transactionCheck05"></label>
                                </div>
                            </td>
                            <td><Link class="text-body fw-bold">#SK2543</Link> </td>
                            <td>Barry Dick</td>
                            <td>
                                05 Oct, 2019
                            </td>
                            <td>
                                $412
                            </td>
                            <td>
                                <span class="badge badge-pill badge-soft-success font-size-11">Paid</span>
                            </td>
                            <td>
                                <i class="fab fa-cc-mastercard me-1"></i> Mastercard
                            </td>
                            <td>
                                <Button type="button" color="primary" size="sm" class="btn-rounded waves-effect waves-light" on:click={toggleModal}>
                                    View Details
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check font-size-16">
                                    <input class="form-check-input" type="checkbox" id="transactionCheck06">
                                    <label class="form-check-label" for="transactionCheck06"></label>
                                </div>
                            </td>
                            <td><Link class="text-body fw-bold">#SK2544</Link> </td>
                            <td>Ronald Taylor</td>
                            <td>
                                04 Oct, 2019
                            </td>
                            <td>
                                $404
                            </td>
                            <td>
                                <span class="badge badge-pill badge-soft-warning font-size-11">Refund</span>
                            </td>
                            <td>
                                <i class="fab fa-cc-visa me-1"></i> Visa
                            </td>
                            <td>
                                <Button type="button" color="primary" size="sm" class="btn-rounded waves-effect waves-light" on:click={toggleModal}>
                                    View Details
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check font-size-16">
                                    <input class="form-check-input" type="checkbox" id="transactionCheck07">
                                    <label class="form-check-label" for="transactionCheck07"></label>
                                </div>
                            </td>
                            <td><Link class="text-body fw-bold">#SK2545</Link> </td>
                            <td>Jacob Hunter</td>
                            <td>
                                04 Oct, 2019
                            </td>
                            <td>
                                $392
                            </td>
                            <td>
                                <span class="badge badge-pill badge-soft-success font-size-11">Paid</span>
                            </td>
                            <td>
                                <i class="fab fa-cc-paypal me-1"></i> Paypal
                            </td>
                            <td>
                                <Button type="button" color="primary" size="sm" class="btn-rounded waves-effect waves-light" on:click={toggleModal}>
                                    View Details
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </CardBody>
    </Card>
</Col>

<Modal isOpen={open} className="modal-dialog-centered">
    
    <div class="modal-header">
        <h5 class="modal-title" id="transaction-detailModalLabel">Order Details</h5>
        <Button type="button" class="btn-close" on:click={toggleModal}></Button>
    </div>
    <ModalBody>
        <p class="mb-2">Product id: <span class="text-primary">#SK2540</span></p>
        <p class="mb-4">Billing Name: <span class="text-primary">Neal Matthews</span></p>

        <div class="table-responsive">
            <Table class="align-middle table-nowrap">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            <div>
                                <img src={img7} alt="" class="avatar-sm">
                            </div>
                        </th>
                        <td>
                            <div>
                                <h5 class="text-truncate font-size-14">Wireless Headphone (Black)</h5>
                                <p class="text-muted mb-0">$ 225 x 1</p>
                            </div>
                        </td>
                        <td>$ 255</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <div>
                                <img src={img4} alt="" class="avatar-sm">
                            </div>
                        </th>
                        <td>
                            <div>
                                <h5 class="text-truncate font-size-14">Phone patterned cases</h5>
                                <p class="text-muted mb-0">$ 145 x 1</p>
                            </div>
                        </td>
                        <td>$ 145</td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <h6 class="m-0 text-right">Sub Total:</h6>
                        </td>
                        <td>
                            $ 400
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <h6 class="m-0 text-right">Shipping:</h6>
                        </td>
                        <td>
                            Free
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <h6 class="m-0 text-right">Total:</h6>
                        </td>
                        <td>
                            $ 400
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </ModalBody>
    <ModalFooter>
        <Button type="button" color="secondary" on:click={toggleModal}>Close</Button>
    </ModalFooter>
</Modal>