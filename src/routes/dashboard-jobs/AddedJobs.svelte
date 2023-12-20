<script>
    import { DropdownItem, DropdownMenu, DropdownToggle, Dropdown } from 'sveltestrap';

    import { OverlayScrollbars } from 'overlayscrollbars';
	import { onMount } from 'svelte';

    import wechat from "../../assets/images/companies/wechat.svg"
    import adobe from "../../assets/images/companies/adobe.svg"
    import sass from "../../assets/images/companies/sass.svg"
    import airbnb from "../../assets/images/companies/airbnb.svg"
    import flutter from "../../assets/images/companies/flutter.svg"
    import mailchimp from "../../assets/images/companies/mailchimp.svg"
    import reddit from "../../assets/images/companies/reddit.svg"
    import spotify from "../../assets/images/companies/spotify.svg"

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
<div class="col-lg-4">
    <div class="card">
        <div class="card-body">
            <h4 class="card-title mb-4">Recent Added Jobs</h4>
            <div class="scrollbar" style="max-height: 376px">
                <div class="vstack gap-4">
                    <div class="d-flex">
                        <img src={wechat} alt="" height="40" class="rounded" />
                        <div class="ms-2 flex-grow-1">
                            <h6 class="mb-1 font-size-15">
                                <a href="/job-details" class="text-body">Marketing Director</a></h6>
                            <p class="text-muted mb-0">Themesbrand, USA - <b>53</b> sec ago</p>
                        </div>
                        <Dropdown>
                            <DropdownToggle class="btn btn-light" type="button" id="dropdownMenuButton1">
                                <i class="bx bx-dots-vertical-rounded"></i>
                            </DropdownToggle>
                            <DropdownMenu class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <DropdownItem href="job-details">View Details</DropdownItem>
                                <DropdownItem href="#">Apply Now</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>

                    <div class="d-flex">
                        <img src={sass} alt="" height="40" class="rounded" />
                        <div class="ms-2 flex-grow-1">
                            <h6 class="mb-1 font-size-15"><a href="job-details.html" class="text-body">Frontend Developer</a></h6>
                            <p class="text-muted mb-0">Themesbrand, Hong-Kong - <b>47</b> min ago</p>
                        </div>
                        <Dropdown>
                            <DropdownToggle class="btn btn-light" type="button" id="dropdownMenuButton1">
                                <i class="bx bx-dots-vertical-rounded"></i>
                            </DropdownToggle>
                            <DropdownMenu class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <DropdownItem href="job-details">View Details</DropdownItem>
                                <DropdownItem href="#">Apply Now</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>

                    <div class="d-flex">
                        <img src={adobe} alt="" height="40" class="rounded" />
                        <div class="ms-2 flex-grow-1">
                            <h6 class="mb-1 font-size-15"><a href="job-details.html" class="text-body">React Developer</a></h6>
                            <p class="text-muted mb-0">Creative Agency, Danemark - <b>1</b> hrs ago</p>
                        </div>
                        <Dropdown>
                            <DropdownToggle class="btn btn-light" type="button" id="dropdownMenuButton1">
                                <i class="bx bx-dots-vertical-rounded"></i>
                            </DropdownToggle>
                            <DropdownMenu class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <DropdownItem href="job-details">View Details</DropdownItem>
                                <DropdownItem href="#">Apply Now</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <div class="d-flex">
                        <img src={airbnb} alt="" height="40" class="rounded" />
                        <div class="ms-2 flex-grow-1">
                            <h6 class="mb-1 font-size-15"><a href="job-details.html" class="text-body">NodeJs Developer</a></h6>
                            <p class="text-muted mb-0">Skote Themes, Louisiana - <b>2</b> hrs ago</p>
                        </div>
                        <Dropdown>
                            <DropdownToggle class="btn btn-light" type="button" id="dropdownMenuButton1">
                                <i class="bx bx-dots-vertical-rounded"></i>
                            </DropdownToggle>
                            <DropdownMenu class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <DropdownItem href="job-details">View Details</DropdownItem>
                                <DropdownItem href="#">Apply Now</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <div class="d-flex">
                        <img src={flutter} alt="" height="40" class="rounded" />
                        <div class="ms-2 flex-grow-1">
                            <h6 class="mb-1 font-size-15"><a href="job-details.html" class="text-body">Digital Marketing</a></h6>
                            <p class="text-muted mb-0">Web Technology pvt.Ltd, Danemark - <b>8</b> hrs ago</p>
                        </div>
                        <Dropdown>
                            <DropdownToggle class="btn btn-light" type="button" id="dropdownMenuButton1">
                                <i class="bx bx-dots-vertical-rounded"></i>
                            </DropdownToggle>
                            <DropdownMenu class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <DropdownItem href="job-details">View Details</DropdownItem>
                                <DropdownItem href="#">Apply Now</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <div class="d-flex">
                        <img src={mailchimp} alt="" height="40" class="rounded" />
                        <div class="ms-2 flex-grow-1">
                            <h6 class="mb-1 font-size-15"><a href="job-details.html" class="text-body">Marketing Director</a></h6>
                            <p class="text-muted mb-0">Skote Technology, Dominica - <b>1</b> days ago</p>
                        </div>
                        <Dropdown>
                            <DropdownToggle class="btn btn-light" type="button" id="dropdownMenuButton1">
                                <i class="bx bx-dots-vertical-rounded"></i>
                            </DropdownToggle>
                            <DropdownMenu class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <DropdownItem href="job-details">View Details</DropdownItem>
                                <DropdownItem href="#">Apply Now</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <div class="d-flex">
                        <img src={spotify} alt="" height="40" class="rounded" />
                        <div class="ms-2 flex-grow-1">
                            <h6 class="mb-1 font-size-15"><a href="job-details.html" class="text-body">Business Associate</a></h6>
                            <p class="text-muted mb-0">Themesbrand, Russia - <b>2</b> days ago</p>
                        </div>
                        <Dropdown>
                            <DropdownToggle class="btn btn-light" type="button" id="dropdownMenuButton1">
                                <i class="bx bx-dots-vertical-rounded"></i>
                            </DropdownToggle>
                            <DropdownMenu class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <DropdownItem href="job-details">View Details</DropdownItem>
                                <DropdownItem href="#">Apply Now</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <div class="d-flex">
                        <img src={reddit} alt="" height="40" class="rounded" />
                        <div class="ms-2 flex-grow-1">
                            <h6 class="mb-1 font-size-15"><a href="job-details.html" class="text-body">Backend Developer</a></h6>
                            <p class="text-muted mb-0">Adobe Agency, Malaysia - <b>3</b> days ago</p>
                        </div>
                        <Dropdown>
                            <DropdownToggle class="btn btn-light" type="button" id="dropdownMenuButton1">
                                <i class="bx bx-dots-vertical-rounded"></i>
                            </DropdownToggle>
                            <DropdownMenu class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <DropdownItem href="job-details">View Details</DropdownItem>
                                <DropdownItem href="#">Apply Now</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>