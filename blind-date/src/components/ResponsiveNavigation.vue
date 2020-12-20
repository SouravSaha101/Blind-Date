<template>
  <nav :style="{ background: background || '#333' }">
    <ul :style="{ background: background || '#333' }" ref="nav">
      <figure class="image-logo" @click="toggleNav">
        <!-- <img :src="imagePath" height="40px" width="40px" /> -->
        <a class="navbar-brand" style="color: white">TBD</a>
      </figure>
      <li
        v-for="(link, index) in navLinks"
        :key="index"
        @mouseenter="
          $event.currentTarget.style.background = hoverBackground || '#999'
        "
        @mouseleave="
          $event.currentTarget.style.background = background || '#333'
        "
        v-bind:class="{ ml_auto: index == 0 }"
      >
        <router-link :to="link.path" :style="{ color: linkColor || '#DDD' }">
          {{ link.text }}
          <i :class="link.icon" />
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about">
          <a
            class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
            href="#services"
            style="margin-top: 4px; margin-bottom: 4px"
@click="signOut"
            >Logout</a
          >
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import firebase from "firebase";
import { db } from "./../firebase";

export default {
  props: [
    "navLinks",
    "background",
    "linkColor",
    "hoverBackground",
    "imagePath",
  ],
  methods: {
    toggleNav() {
      const nav = this.$refs.nav.classList;
      nav.contains("active") ? nav.remove("active") : nav.add("active");
    },
    async signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
localStorage.removeItem("isloggedOn");
          this.$router.replace({
            name: "Home",
          });
        });
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  height: 60px;
  width: 100%;
  box-shadow: 2px 2px 2px #ccc;
  ul {
    display: flex;
    height: 100%;
    align-items: center;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    box-shadow: 2px 2px 2px #ccc;

    figure {
      cursor: pointer;
      margin-right: 10px;
    }

    a {
      text-decoration: none;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
    }

    i {
      margin-right: 10px;
      font-size: 22px;
    }

    li {
      list-style-type: none;
      padding: 10px 20px;
    }
  }
}

@media screen and (max-width: 759px) {
  nav {
    ul {
      position: absolute;
      width: 300px;
      flex-direction: column;
      left: -240px;
      transition: 300ms ease all;
      top: 60px;

      &.active {
        left: 0px;
      }

      figure {
        position: fixed;
        z-index: 1;
        top: 10px;
        left: 2px;
      }

      li {
        width: 100%;
        padding-left: 0;
        padding-right: 0;
      }

      a {
        flex-direction: row;
        margin-left: 20px;
        justify-content: space-between;
        margin-right: 13px;
      }
    }
  }
}
</style>
