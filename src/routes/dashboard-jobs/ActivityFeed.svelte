<script>
    import { Card, CardBody, Col } from 'sveltestrap';
    import Link from "svelte-link";
    import avatar5 from "../../assets/images/users/avatar-5.jpg"
    import avatar2 from "../../assets/images/users/avatar-2.jpg"

    import { OverlayScrollbars } from 'overlayscrollbars';
	import { onMount } from 'svelte';

    const options = {
		scrollbars: {
			visibility: 'auto',
			autoHide: 'move',
			autoHideDelay: 100,
			dragScroll: true,
			clickScroll: false,
			theme: 'os-theme-dark',
			pointers: ['mouse', 'touch', 'pen']
		}
	};

  onMount(() => {
		const menuElement = document.querySelectorAll('.scrollbar');
		menuElement.forEach((item) => {
			let scrollbar = OverlayScrollbars(item, options);
		});
	});
</script>
<Col lg={4}>
    <Card>
        <CardBody>
            <h4 class="card-title mb-4">Activity Feed</h4>
            <div class="scrollbar" style="max-height: 376px">
                <ul class="verti-timeline list-unstyled">
                    <li class="event-list">
                        <div class="event-timeline-dot">
                            <i class="bx bx-right-arrow-circle font-size-18"></i>
                        </div>
                        <div class="d-flex">
                            <div class="flex-shrink-0 me-3">
                                <img src={avatar5} alt="" class="avatar-xs rounded-circle" />
                            </div>
                            <div class="flex-grow-1">
                                <div>
                                    <b>Charles Brown</b> applied for the job <b>Sr.frontend Developer</b>
                                    <p class="mb-0 text-muted">3 min ago</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="event-list">
                        <div class="event-timeline-dot">
                            <i class="bx bx-right-arrow-circle font-size-18"></i>
                        </div>
                        <div class="d-flex">
                            <div class="flex-shrink-0 me-3">
                                <div class="avatar-xs">
                                    <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                        <i class='bx bx-revision font-size-14'></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <div>
                                    Your subscription expires today <Link href="#">Renew Now</Link>
                                    <p class="text-muted mb-0">53 min ago</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="event-list">
                        <div class="event-timeline-dot">
                            <i class="bx bx-right-arrow-circle font-size-18"></i>
                        </div>
                        <div class="d-flex">
                            <div class="flex-shrink-0 me-3">
                                <div class="avatar-xs">
                                    <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                        JA
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <div>
                                    <b>Jennifer Alexandar</b> created a new account as a <b>Freelance</b>. 
                                    <p class="text-muted mb-0">1 hrs ago</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="event-list">
                        <div class="event-timeline-dot">
                            <i class="bx bx-right-arrow-circle font-size-18"></i>
                        </div>
                        <div class="d-flex">
                            <div class="flex-shrink-0 me-3">
                                <img src={avatar2} alt="" class="avatar-xs rounded-circle" />
                            </div>
                            <div class="flex-grow-1">
                                <div>
                                    <b>Mark Ellison</b> applied for the job <b>Project Manager</b>
                                    <p class="mb-0 text-muted">3 hrs ago</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="event-list">
                        <div class="event-timeline-dot">
                            <i class="bx bx-right-arrow-circle font-size-18"></i>
                        </div>
                        <div class="d-flex">
                            <div class="flex-shrink-0 me-3">
                                <div class="avatar-xs">
                                    <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                        AZ
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <div>
                                    <b>Acolin Zelton</b> created a new account as a <b>Freelance</b>.
                                    <p class="text-muted mb-0">1 hrs ago</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="text-center mt-4">
                    <Link href="#" class="btn btn-primary waves-effect waves-light btn-sm">View More <i class="mdi mdi-arrow-right ms-1"></i></Link>
                </div>
            </div>
        </CardBody>
    </Card>
</Col>