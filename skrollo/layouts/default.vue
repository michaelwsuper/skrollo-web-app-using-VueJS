<template>
  <div id="app" class="app" :class="{ 'app--dark': $store.state.dark }">
    <Navbar id="navbar" />
    <nuxt />
  </div>
</template>
<script>
import Navbar from "./../components/Navbar.vue";

export default {
  components: {
    Navbar
  },
  data() {
    return {
      faviconDark: `<link data-n-head="1" rel="icon" type="image/png" id="favicon-tag" href="/icon_dark_mode.png">`,
      faviconLight: `<link data-n-head="1" rel="icon" type="image/png" id="favicon-tag" href="/icon.png">`
    };
  },
  mounted() {
    this.$store.commit("initialiseStore");
    // link is rendered after "mounted" hook, so have to wait,
    // I know it`s better to use "$nextTick", but it doesn't work here, idk why
    setTimeout(() => this.boundFaviconToColorMode(), 0);

    // Also vue watcher cant handle this changes, so had to use native event  listener
      // this.darkModeObj.addEventListener("change", () => this.boundFaviconToColorMode());
  },
  computed: {
    darkModeObj() {
      return window
      .matchMedia("(prefers-color-scheme: dark)");
    }
  },
  methods: {
    boundFaviconToColorMode() {
      document.getElementById("favicon-tag").remove();
      if (this.darkModeObj.matches) {
        document.head.insertAdjacentHTML("beforeend", this.faviconDark);
      } else {
        document.head.insertAdjacentHTML("beforeend", this.faviconLight);
      }
    }
  }
};
</script>
<style lang="scss">
.app {
  background-color: #ececec;
}
.app--dark {
  background-color: #1d1d1b;
}
body {
  background-color: #1d1d1b !important;
}
.btn,
button {
  &-primary {
    background-color: #21a6ff !important;
  }
}
</style>
