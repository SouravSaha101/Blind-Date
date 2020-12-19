<template>
  <div id="app">
    <!-- Navigation -->
    <nav
      class="navbar navbar-expand-lg navbar-dark fixed-top"
      :class="{ scrolling: scrollPosition > 600 }"
      id="mainNav"
    >
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">TBD</a>
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#services"
                >How it works</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#portfolio">Follow</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#team">Team</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#contact">Connect</a>
            </li>
            <li class="nav-item login-display-nav">
              <a
                class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                href="#services"
                style="margin-top: 4px; margin-bottom: 4px;"
                >Login</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Header -->
    <header class="masthead">
      <div class="container">
        <div class="intro-text">
          <div class="intro-lead-in">Love is blind....literally</div>
          <div class="intro-heading text-uppercase">Sign Up to know more</div>

          <div>
            <a
              class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
              data-toggle="modal"
              href="#portfolioModal2"
              style="width: 30%;    margin-bottom: 5%;" 
              >Sign Up</a
            >
          </div>
          <div class="login-display">
            <a
              class="btn btn-secondary btn-xl text-uppercase js-scroll-trigger"
              href="#services"
              style="width: 30%"
              >Login</a
            >
          </div>
        </div>
      </div>
    </header>

    <!-- Services -->
    <section id="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">How it works?</h2>
            <h3 class="section-subheading text-muted">
              Just do these 3 steps and leave the rest
            </h3>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">1. Sign up</h4>
            <p class="text-muted">
              Sign up to our secure server using your google account or your
              email id.
            </p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">2. Fill Details</h4>
            <p class="text-muted">
              Fill your details with your personal interests.
            </p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">3. Good to go</h4>
            <p class="text-muted">
              Our Patented AI will match you with the best matches available.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <Portfolio></Portfolio>
    <Signup></Signup>
    <!-- Team -->
    <section class="bg-light" id="team">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">The Team</h2>
            <h3 class="section-subheading text-muted">
              No ones is getting paid and also John Cena works for us but you
              can't see him
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <div class="team-member">
              <img
                class="mx-auto rounded-circle"
                src="./assets/img/michael-scott.jpg"
                alt=""
              />
              <h4>Michael Scott</h4>
              <p class="text-muted">Regional Manager</p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="team-member">
              <img
                class="mx-auto rounded-circle"
                src="./assets/img/walter-white.jpg"
                alt=""
              />
              <h4>Walter White</h4>
              <p class="text-muted">UX Designer (Blue is his speciality)</p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="team-member">
              <img
                class="mx-auto rounded-circle"
                src="./assets/img/veep.jpg"
                alt=""
              />
              <h4>Selina Meyer</h4>
              <p class="text-muted">President</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-3"></div>
          <div class="col-lg-6 text-center">
            <h2
              class="section-heading text-uppercase"
              style="background-color: #212529"
            >
              Connect with Us
            </h2>
            <h3 class="section-subheading text-muted">
              All your queries will not be answered
            </h3>
          </div>
          <div class="col-lg-3"></div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <form id="contactForm" name="sentMessage" novalidate="novalidate">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      id="name"
                      type="text"
                      placeholder="Your Name *"
                      required="required"
                      data-validation-required-message="Please enter your name."
                    />
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      id="email"
                      type="email"
                      placeholder="Your Email *"
                      required="required"
                      data-validation-required-message="Please enter your email address."
                    />
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      id="phone"
                      type="tel"
                      placeholder="Your Phone *"
                      required="required"
                      data-validation-required-message="Please enter your phone number."
                    />
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      id="message"
                      placeholder="Your Message Which No One Cares"
                      required="required"
                      data-validation-required-message="Please enter a message."
                    ></textarea>
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="clearfix"></div>
                <div class="col-lg-12 text-center">
                  <div id="success"></div>
                  <button
                    id="sendMessageButton"
                    class="btn btn-primary btn-xl text-uppercase"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <span class="copyright">Copyright &copy; Sourav Saha</span>
          </div>
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <ul class="list-inline quicklinks">
              <li class="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    <!-- Modal 2 -->
  </div>
</template>

<script>
import Portfolio from "./components/Portfolio";
import Signup from "./components/Signup";

export default {
  name: "app",
  components: {
    Portfolio,
    Signup,
  },
  data() {
    return {
      scrollPosition: 0,
    };
  },
  methods: {
    handleTopBar() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleTopBar);
  },
  destroy() {
    window.removeEventListener("scroll", this.handleTopBar);
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background: black;
}
.scrolling {
  background: #212529 !important;
}
</style>
