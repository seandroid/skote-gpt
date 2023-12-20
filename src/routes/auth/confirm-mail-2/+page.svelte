<script>
	import Link from 'svelte-link';
	import {browser} from "$app/environment"
	import {  Col, Container, Row } from 'sveltestrap';
    import logodark from '../../../assets/images/logo-dark.png';
	import logolight from '../../../assets/images/logo-light.png';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import { onMount } from 'svelte';
	import CarouselPage from '../CarouselPage.svelte';

	onMount(() => {
		if (browser) {
			document.body.classList.add('auth-body-bg');
		}
	});
</script>

<HeadTitle title="Confirm Mail" />

<div>
    <Container fluid class="p-0">
      <Row class="row g-0">
        <CarouselPage />

        <Col xl={3}>
          <div class="auth-full-page-content p-md-5 p-4">
            <div class="w-100">
              <div class="d-flex flex-column h-100">
                <div class="mb-4 mb-md-5">
                  <Link href="/" class="d-block auth-logo">
                    <img
                      src={logodark}
                      alt=""
                      height="18"
                      class="auth-logo-dark"
                    />
                    <img
                      src={logolight}
                      alt=""
                      height="18"
                      class="auth-logo-light"
                    />
                  </Link>
                </div>
                <div class="my-auto">
                  <div class="text-center">
                    <div class="avatar-md mx-auto">
                      <div class="avatar-title rounded-circle bg-light">
                        <i class="bx bx-mail-send h1 mb-0 text-primary"></i>
                      </div>
                    </div>
                    <div class="p-2 mt-4">
                      <h4>Success !</h4>
                      <p class="text-muted">
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum
                        deleniti atque corrupti quos dolores et
                      </p>
                      <div class="mt-4">
                        <Link href="/dashboard" class="btn btn-success">
                          Back to Home
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-4 mt-md-5 text-center">
                  <p class="mb-0">
                    © {new Date().getFullYear()} Skote. Crafted with{" "}
                    <i class="mdi mdi-heart text-danger"></i> by
                    Themesbrand
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
