<template>
  <div class="home">
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
              style="width: 30%; margin-bottom: 5%"
              >Sign Up</a
            >
          </div>
          <div class="login-display">
            <a
              class="btn btn-secondary btn-xl text-uppercase js-scroll-trigger"
              href="#signInModal"
              style="width: 30%"
              data-toggle="modal"
              >Login</a
            >
          </div>
        </div>
      </div>
    </header>
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
    <Portfolio></Portfolio>

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
                src="../assets/img/michael-scott.jpg"
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
                src="../assets/img/walter-white.jpg"
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
                src="../assets/img/veep.jpg"
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

    <!-- Sign up modal -->
    <div
      class="portfolio-modal modal fade"
      id="portfolioModal2"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2 class="text-uppercase">Sign Up</h2>

                  <div class="container">
                    <div class="row">
                      <div class="col-lg-12">
                        <form
                          id="contactForm"
                          name="sentMessage"
                          novalidate="novalidate"
                        >
                          <div class="row">
                            <div class="col-lg-12 text-center">
                              <div class="form-group">
                                <input
                                  class="form-control"
                                  id="name"
                                  type="text"
                                  placeholder="Your Name *"
                                  required="required"
                                  data-validation-required-message="Please enter your name."
                                  v-model="signUpData.name"
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
                                  v-model="signUpData.email"
                                />
                                <p class="help-block text-danger"></p>
                              </div>
                              <div class="form-group">
                                <input
                                  class="form-control"
                                  id="phone"
                                  type="password"
                                  placeholder="Password*"
                                  required="required"
                                  data-validation-required-message="Please enter the password."
                                  v-model="signUpPassword"
                                />
                                <p class="help-block text-danger"></p>
                              </div>
                              <div class="form-group">
                                <input
                                  class="form-control"
                                  id="name"
                                  type="password"
                                  placeholder="Confirm Password*"
                                  required="required"
                                  data-validation-required-message="Please enter confirm password ."
                                  v-model="confirmPassword"
                                />
                                <p class="help-block text-danger"></p>
                              </div>
                            </div>

                            <div class="clearfix"></div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <button
                        class="btn btn-primary"
                        data-dismiss="modal"
                        type="button"
                        @click="signUp"
                      >
                        Continue
                      </button>
                    </div>
                    <div class="col-6">
                      <button
                        class="btn btn-primary"
                        data-dismiss="modal"
                        type="button"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sign IN modal -->
    <div
      class="portfolio-modal modal fade"
      id="signInModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2 class="text-uppercase">Sign IN</h2>

                  <div class="container">
                    <div class="row">
                      <div class="col-lg-12">
                        <form
                          id="contactForm"
                          name="sentMessage"
                          novalidate="novalidate"
                        >
                          <div class="row">
                            <div class="col-lg-12 text-center">
                              <div class="form-group">
                                <input
                                  class="form-control"
                                  id="email"
                                  type="email"
                                  placeholder="Your Email *"
                                  required="required"
                                  data-validation-required-message="Please enter your email address."
                                  v-model="signInEmail"
                                />
                                <p class="help-block text-danger"></p>
                              </div>
                              <div class="form-group">
                                <input
                                  class="form-control"
                                  id="password"
                                  type="password"
                                  placeholder="Password*"
                                  required="required"
                                  data-validation-required-message="Please enter the password."
                                  v-model="signInPassword"
                                />
                                <p class="help-block text-danger"></p>
                              </div>
                            </div>

                            <div class="clearfix"></div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <button
                        class="btn btn-primary"
                        data-dismiss="modal"
                        type="button"
                        @click="login"
                      >
                        Login In
                      </button>
                    </div>
                    <div class="col-6">
                      <button
                        class="btn btn-primary"
                        data-dismiss="modal"
                        type="button"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import { Component, Vue } from "vue-property-decorator";
import Portfolio from "./../components/Portfolio.vue";
import firebase from "firebase";
import { db } from "../firebase";

export default {
  components: {
    Portfolio: Portfolio,
  },
  data() {
    return {
      signUpModal: false,
      password: "",
      signUpData: {
        email: "",
        name: "",
        detailsFilled: false,
        uid: "",
      },
      signUpPassword: "",
      confirmPassword: "",
      signInPassword: "",
      signInEmail: "",
    };
  },
  methods: {
    async signUp() {
      if (this.signUpPassword !== this.confirmPassword) {
        alert("Passwords don't match");
        return;
      }

      if (
        !this.signUpData &&
        !this.signUpData.name &&
        !this.signUpData.email &&
        this.signUpPassword &&
        this.confirmPassword
      ) {
        alert("Enter All Fields");
        return;
      }
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(
            this.signUpData.email,
            this.signUpPassword
          );
        this.signUpData.uid = firebase.auth().currentUser.uid;
        const documentPath = "login-details/" + this.signUpData.uid.toString();
        const docRef = db.doc(documentPath);
        const data = (await docRef.get()).data();
        if (!data) {
          docRef.set(this.signUpData);
        } else {
          alert("Data Exist");
        }
        alert("Created");
        console.log("Signup Data  " + JSON.stringify(this.signUpData));
        localStorage.setItem("isloggedOn", JSON.stringify(this.signUpData));
        this.$router.replace({
          name: "About",
        });
      } catch (error) {
        alert(error);
      }
    },
    async login() {
      console.log("2");
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.signInEmail, this.signInPassword);
        let uid = firebase.auth().currentUser.uid;
        let signInData = { uid: uid, email: this.signInEmail };
        console.log("oo" + uid);
        console.log("this.signInEmail" + this.signInEmail);
        console.log("Signup Data  " + this.signInData);

        localStorage.setItem("isloggedOn", JSON.stringify(this.signInData));
        alert("success");
        this.$router.push({
          path: "/about",
        });
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>
