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
                                placeholder="Password*"
                                required="required"
                                data-validation-required-message="Please enter the password."
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
                    >
                      <i class="fas fa-times"></i>
                      Continue
                    </button>
                  </div>
                  <div class="col-6">
                    <button
                      class="btn btn-primary"
                      data-dismiss="modal"
                      type="button"
                    >
                      <i class="fas fa-times"></i>
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
export default {
  data: () => ({}),
};
</script>

<style lang="css">
</style>


