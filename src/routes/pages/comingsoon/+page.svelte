<script>
  import {browser} from "$app/environment"
  import Link from "svelte-link";
  import { Container, Row, Col } from "sveltestrap";
  import logodark from "../../../assets/images/logo-dark.png"
	import logolight from "../../../assets/images/logo-light.png"
	import comingsoon from "../../../assets/images/coming-soon.svg"
	import HeadTitle from "../../../common/HeadTitle.svelte";
  // import Countdown from "svelte-countdown";
  const countdown = () => {
    if(browser){
    // Set the date we're counting down to
    var countDownDate = new Date("Dec 30, 2024").getTime();

    // Update the count down every 1 second
    var countDown = setInterval(function () {
      // Get today's date and time
      var currentTime = new Date().getTime();

      // Find the distance between currentTime and the count down date
      var distance = countDownDate - currentTime;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      var countDownBlock =
        '<div class="coming-box">' +
        days +
        "<span>Days</span></div>" +
        '<div class="coming-box">' +
        hours +
        "<span>Hours</span>" +
        "</div>" +
        '<div class="coming-box">' +
        minutes +
        "<span>Minutes</span>" +
        "</div>" +
        '<div class="coming-box">' +
        seconds +
        "<span>Seconds</span>" +
        "</div>";

      // Output the result in an element with id="countDownBlock"
      document.getElementById("countdown").innerHTML = countDownBlock;

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(countDown);
        document.getElementById("countdown").innerHTML =
          '<div class="countdown-endtxt">The countdown has ended!</div>';
      }
    }, 1000);
  }
  };
    countdown();
</script>

<HeadTitle title="Coming Soon" />

<div class="home-btn d-none d-sm-block">
  <Link href="/" class="text-dark"><i class="fas fa-home h2"></i></Link>
</div>

<div class="home-btn d-none d-sm-block">
	<Link href="/" class="text-white">
		<i class="fas fa-home h2" />
	</Link>
</div>

<div class="my-5 pt-sm-5">
	<Container>
		<Row>
			<Col lg="12">
				<div class="text-center">
					<Link href="/dashboard" class="d-block auth-logo">
            <img
              src={logodark}
              alt="logo"
              height="20"
              class="auth-logo-dark mx-auto"
            />
            <img
              src={logolight}
              alt="logo"
              height="20"
              class="auth-logo-light mx-auto"
            />
          </Link>
					<Row class="justify-content-center mt-5">
						<Col sm="4">
							<div class="maintenance-img">
								<img src={comingsoon} alt="" class="img-fluid mx-auto d-block" />
							</div>
						</Col>
					</Row>
					<h4 class="mt-5">Let&#39;s get started with Skote</h4>
					<p class="text-muted">
						It will be as simple as Occidental in fact it will be Occidental.
					</p>

					<Row class="justify-content-center mt-5">
						<Col md="8">
							<div id="countdown" class="counter-number" />
						</Col>
					</Row>
				</div>
			</Col>
		</Row>
	</Container>
</div>
