<script>
import { Card, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, Dropdown } from 'sveltestrap'
import Link from "svelte-link";
import jobsimg from "../../assets/images/jobs.png"
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";

import { register } from 'swiper/element/bundle';
	import { onMount } from 'svelte';
register();

onMount(() => {

  // swiper element
  const swiperEl = document.querySelector('swiper-container');

  // swiper parameters
  const swiperParams = {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
    on: {
      init() {
        // ...
      },
    },
  };

  // now we need to assign all parameters to Swiper element
  Object.assign(swiperEl, swiperParams);

  // and now initialize it
  swiperEl.initialize();
})

</script>

<Col lg={4}>
    <Card>
        <CardBody>
            <div class="d-flex">
                <div>
                    <h4 class="card-title mb-3">Invite your friends to Skote</h4>
                    <p class="text-muted">Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally.</p>
                    <div>
                        <Link href="#" class="btn btn-primary btn-sm"><i class='bx bx-user-plus align-middle'></i> Invite Friends</Link>
                    </div>
                </div>
                <div>
                    <img src={jobsimg} alt="" height="130" />
                </div>
            </div>
        </CardBody>
    </Card>
    <Card>
        <CardBody>
            <h4 class="card-title mb-3">Popular Candidate</h4>
            <swiper-container css-mode="true" init="false" >
                <swiper-slide>
                    <div class="bg-light p-3 d-flex mb-3 rounded">
                        <img src={avatar4} alt="" class="avatar-sm rounded me-3" />
                        <div class="flex-grow-1">
                            <h5 class="font-size-15 mb-2"><a href="candidate-overview" class="text-body">Stephen Hadley</a> <span class="badge badge-soft-info">Freelance</span></h5>
                            <p class="mb-0 text-muted"><i class="bx bx-map text-body align-middle"></i> Germany</p>
                        </div>
                        <div>
                            <Dropdown>
                                <DropdownToggle class="btn btn-soft-primary" type="button" id="dropdownMenuButton11">
                                    <i class='bx bx-dots-vertical-rounded'></i>
                                </DropdownToggle>
                                <DropdownMenu aria-labelledby="dropdownMenuButton11">
                                    <li><DropdownItem href="candidate-overview">View Details</DropdownItem></li>
                                    <li><DropdownItem href="#">Download CV</DropdownItem></li>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                    <div class="bg-light p-3 d-flex">
                        <img src={avatar2} alt="" class="avatar-sm rounded me-3" />
                        <div class="flex-grow-1">
                            <h5 class="font-size-15 mb-2"><a href="candidate-overview" class="text-body">Charles Brown</a> <span class="badge badge-soft-success">Full Time</span></h5>
                            <p class="mb-0 text-muted"><i class="bx bx-map text-body align-middle"></i> Cambodia</p>
                        </div>
                        <div>
                            <Dropdown>
                                <DropdownToggle class="btn btn-soft-primary" type="button" id="dropdownMenuButton11">
                                    <i class='bx bx-dots-vertical-rounded'></i>
                                </DropdownToggle>
                                <DropdownMenu aria-labelledby="dropdownMenuButton11">
                                    <li><DropdownItem href="candidate-overview">View Details</DropdownItem></li>
                                    <li><DropdownItem href="#">Download CV</DropdownItem></li>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="bg-light p-3 d-flex mb-3 rounded">
                        <img src={avatar1} alt="" class="avatar-sm rounded me-3" />
                        <div class="flex-grow-1">
                            <h5 class="font-size-15 mb-2"><a href="candidate-overview" class="text-body">Adam Miller</a> <span class="badge badge-soft-warning">Internship</span></h5>
                            <p class="mb-0 text-muted"><i class="bx bx-map text-body align-middle"></i> Australia</p>
                        </div>
                        <div>
                            <Dropdown>
                                <DropdownToggle class="btn btn-soft-primary" type="button" id="dropdownMenuButton11">
                                    <i class='bx bx-dots-vertical-rounded'></i>
                                </DropdownToggle>
                                <DropdownMenu aria-labelledby="dropdownMenuButton11">
                                    <li><DropdownItem href="candidate-overview">View Details</DropdownItem></li>
                                    <li><DropdownItem href="#">Download CV</DropdownItem></li>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                    <div class="bg-light p-3 d-flex">
                        <img src={avatar3} alt="" class="avatar-sm rounded me-3" />
                        <div class="flex-grow-1">
                            <h5 class="font-size-15 mb-2"><a href="candidate-overview" class="text-body">Keith Gonzales</a> <span class="badge badge-soft-info">Freelance</span></h5>
                            <p class="mb-0 text-muted"><i class="bx bx-map text-body align-middle"></i> Belgium</p>
                        </div>
                        <div>
                            <Dropdown>
                                <DropdownToggle class="btn btn-soft-primary" type="button" id="dropdownMenuButton11">
                                    <i class='bx bx-dots-vertical-rounded'></i>
                                </DropdownToggle>
                                <DropdownMenu aria-labelledby="dropdownMenuButton11">
                                    <li><DropdownItem href="candidate-overview">View Details</DropdownItem></li>
                                    <li><DropdownItem href="#">Download CV</DropdownItem></li>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="bg-light p-3 d-flex mb-3 rounded">
                        <img src={avatar4} alt="" class="avatar-sm rounded me-3" />
                        <div class="flex-grow-1">
                            <h5 class="font-size-15 mb-2"><a href="candidate-overview" class="text-body">Bonnie Harney</a> <span class="badge badge-soft-success">Full Timer</span></h5>
                            <p class="mb-0 text-muted"><i class="bx bx-map text-body align-middle"></i> Syria</p>
                        </div>
                        <div>
                            <Dropdown>
                                <DropdownToggle class="btn btn-soft-primary" type="button" id="dropdownMenuButton11">
                                    <i class='bx bx-dots-vertical-rounded'></i>
                                </DropdownToggle>
                                <DropdownMenu aria-labelledby="dropdownMenuButton11">
                                    <li><DropdownItem href="candidate-overview">View Details</DropdownItem></li>
                                    <li><DropdownItem href="#">Download CV</DropdownItem></li>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                    <div class="bg-light p-3 d-flex">
                        <img src={avatar2} alt="" class="avatar-sm rounded me-3" />
                        <div class="flex-grow-1">
                            <h5 class="font-size-15 mb-2"><a href="candidate-overview" class="text-body">Dolores Minter</a> <span class="badge badge-soft-danger">Part Time</span></h5>
                            <p class="mb-0 text-muted"><i class="bx bx-map text-body align-middle"></i> San Marino</p>
                        </div>
                        <div>
                            <Dropdown>
                                <DropdownToggle class="btn btn-soft-primary" type="button" id="dropdownMenuButton11">
                                    <i class='bx bx-dots-vertical-rounded'></i>
                                </DropdownToggle>
                                <DropdownMenu aria-labelledby="dropdownMenuButton11">
                                    <li><DropdownItem href="candidate-overview">View Details</DropdownItem></li>
                                    <li><DropdownItem href="#">Download CV</DropdownItem></li>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                </swiper-slide>
              </swiper-container>
        </CardBody>
    </Card>
</Col>