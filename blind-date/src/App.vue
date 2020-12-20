<template>
  <div id="app">
    <div id="nav">
      <nav
        class="navbar navbar-expand-lg navbar-dark fixed-top"
        :class="{ scrolling: scrollPosition > 600 }"
        id="mainNav"
        v-if="!isloggedOn"
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
                <a class="nav-link js-scroll-trigger" href="#portfolio"
                  >Follow</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#team">Team</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#contact"
                  >Connect</a
                >
              </li>
              <li class="nav-item login-display-nav">
                <router-link to="/about">
                  <a
                    class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                    href="#services"
                    style="margin-top: 4px; margin-bottom: 4px"
                    >Login</a
                  >
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ResponsiveNavigation
        v-if="isloggedOn"
        :nav-links="navLinks"
        :image-path="require('./assets/logo.png')"
        background="#212529"
        link-color="#fff"
        hoverBackground="#6c5ce7"
      />
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<script>
import ResponsiveNavigation from "./components/ResponsiveNavigation";

export default {
  components: {
    ResponsiveNavigation,
  },
  data() {
    return {
      scrollPosition: 0,
      isloggedOn: false,
      navLinks: [
        {
          text: "Home",
          path: "/",
          icon: "ion-ios-home",
        },
        {
          text: "Profile",
          path: "/about",
          icon: "ion-md-person",
        },
        {
          text: "Matches",
          path: "/matches",
          icon: "ion-md-heart-empty",
        },
        {
          text: "Settings",
          path: "/Settings",
          icon: "ion-ios-settings",
        },
      ],
    };
  },
  methods: {
    handleTopBar() {
      this.scrollPosition = window.scrollY;
      console.log(this.scrollPosition);
    },
  },
  created() {
    this.isloggedOn = localStorage.getItem("isloggedOn");
    console.log(this.isloggedOn);
  },
updated(){
console.log("Updated")
this.isloggedOn = localStorage.getItem("isloggedOn");
    console.log("Yo" + this.isloggedOn);
},
  mounted() {
    window.addEventListener("scroll", this.handleTopBar);

    this.isloggedOn = localStorage.getItem("isloggedOn");
    console.log("mounted" + this.isloggedOn);
  },
  destroy() {
    window.removeEventListener("scroll", this.handleTopBar);
  },
};
</script>
<style>
@import "https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.scrolling {
  background: #212529 !important;
}
</style>
