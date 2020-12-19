<template>
  <section class="bg-light" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Follow Us</h2>
          <h3 class="section-subheading text-muted">
            We are not available on any socail media these links don't work.
          </h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-sm-3 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
          </a>
          <div class="portfolio-caption">
            <h4>Facebook</h4>
            <img
              class="img-fluid"
              :src="require('../assets/img/facebook-logo.png')"
              alt="Facebook"
            />
          </div>
        </div>
        <div class="col-md-3 col-sm-3 portfolio-item">
          <div class="portfolio-caption">
            <h4>Youtube</h4>
            <img
              class="img-fluid"
              :src="require('../assets/img/youtube-logo.png')"
              alt="youtube"
            />
          </div>
        </div>
        <div class="col-md-3 col-sm-3 portfolio-item">
          <div class="portfolio-caption">
            <h4>Twitter</h4>
            <img
              class="img-fluid"
              :src="require('../assets/img/twitter-logo.png')"
              alt="Twitter"
            />
           
          </div>
        </div>
        <div class="col-md-3 col-sm-3 portfolio-item">
          <div class="portfolio-caption">
            <h4>Instagram</h4>
            <img
              class="img-fluid"
              :src="require('../assets/img/insta-logo.png')"
              alt="Instagram"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data: () => ({
  }),
};
</script>

<style lang="css">
</style>


