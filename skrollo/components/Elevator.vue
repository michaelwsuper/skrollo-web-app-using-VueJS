<template>
  <div id="topUp">
    <div class="position">
      <div class="icon" @click="scrollUp">
        <img src="/images/social/icons8-sort-up-96.png" />
      </div>
      <div class="icon" @click="scrollHome">
        <img src="/images/social/icons8-home-96.png" />
      </div>
      <div class="icon" @click="scrollDown">
        <img src="/images/social/icons8-sort-down-96.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    scrollDown() {
      window.scrollBy({
        top: 1200,
        left: 0,
        behavior: "smooth"
      });
    },
    scrollUp() {
      window.scrollBy({
        top: -1200,
        left: 0,
        behavior: "smooth"
      });
    },
    scrollHome() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss">
#topUp {
  position: fixed;
  right: 15px;
  bottom: -0px;
  z-index: 99;

  .position {
    .icon {
      background-color: #dfcd9b;
      border-radius: 3px;
      margin: 5px 0;
      padding: 2px;
      cursor: pointer;

      img {
        width: 40px;
      }
    }
  }

  .none {
    opacity: 0;
    z-index: 999999;
    position: relative;
    bottom: 95px;
  }
}
</style>
