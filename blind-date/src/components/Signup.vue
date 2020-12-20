<template>
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
                                type="tel"
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
                                type="text"
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
</template>

<script>
import firebase from "firebase";
import { db } from "../firebase";

export default {
  data() {
    return {
      password: "",
      signUpData: {
        email: "",
        name: "",
        detailsFilled: false,
        uid: "",
      },
      signUpPassword: "",
      confirmPassword: "",
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
        this.$router.replace({
            name: "Home",
          });
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style lang="css">
</style>


