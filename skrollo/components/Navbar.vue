<template>
  <b-navbar :style="[$store.state.dark ? {'background-color': '#1d1d1b', 'transition': '1s'} : {'background-color': '#ffffff', 'transition': '1s',}]" sticky toggleable="lg" :class="[!$store.state.dark ? 'navbar-light' : 'navbar-dark', !showNavbar ? 'navbar--hidden' : '']">
    <b-navbar-brand to="/">
      <img v-if="window.width > 990 && !$store.state.dark" width="135px" src="/assets/img/static_assets_img_logo.png" />
      <img v-if="window.width > 990 && $store.state.dark" width="135px" src="/assets/img/static_assets_img_logo_light.png" />
      <img v-if="window.width <= 990 && !$store.state.dark" width="90px" src="/assets/img/static_assets_img_logo.png" />
      <img v-if="window.width <= 990 && $store.state.dark" width="90px" src="/assets/img/static_assets_img_logo_light.png" />
    </b-navbar-brand>

    <div class="input mx-auto" v-if="this.$route.path == '/new' && window.width > 990">
      <b-input type="text" placeholder="Search" v-model="searchTerm" class="background mb-2 mr-sm-2 mb-sm-0"
        :class="{ 'background--dark': $store.state.dark }"></b-input>
      <img src="/images/social/icons8-search-50.png" v-if="!$store.state.dark" height="20px" />
      <img src="/images/social/icons8-search-50-white.png" v-if="$store.state.dark" height="20px" />
      <!-- <button v-if="this.$store.state.posts.search != '' " height="20px">
        <i class="fas fa-fw fa-2x fa-sync-alt fa-fw"></i>
      </button> -->
    </div>

    <div class="input-mobile" v-else-if="this.$route.path == '/'">
      <b-input type="text" v-model="searchTerm" class="background mr-sm-2 mb-sm-0"
        :class="{ 'background--dark': $store.state.dark }"></b-input>
      <img src="/images/social/icons8-search-50.png" height="20px" class="black-display" />
      <img src="/images/social/icons8-search-50-white.png" height="20px" class="white-display" />
    </div>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse  class="" id="nav-collapse" is-nav >
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav class="ml-auto text-right" v-if="$store.getters.isLoggedIn">
          <b-nav-item absolute :to="'/'+$store.state.user.username">Personal Feed
          </b-nav-item>
          <b-nav-item-dropdown right :text="$store.state.user.username">
            <b-dropdown-item href="/account/changeUsername">Change My Username</b-dropdown-item>
            <b-dropdown-item href="/account/changePassword">Change My Password</b-dropdown-item>
            <b-dropdown-item @click.prevent="logout()">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
          <!-- <b-nav-item to="/account">{{ $store.state.user.username }}</b-nav-item>
          <b-nav-item @click.prevent="logout()">Logout</b-nav-item> -->
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" v-if="!$store.getters.isLoggedIn && !$store.state.dark">
          <b-nav-item  class="text-white" to="/login">Login</b-nav-item>
          <b-nav-item  class="text-white" to="/signup">Signup</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-if="!$store.getters.isLoggedIn && $store.state.dark">
          <b-nav-item  class="text-dark" to="/login">Login</b-nav-item>
          <b-nav-item  class="text-dark" to="/signup">Signup</b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  import Sources from "./Sources.vue";
  import FeedNavbar from "~/components/FeedNavbar.vue";

  export default {
    components: {
      Sources,
      FeedNavbar
    },
    data() {
      return {
        window: {
          width: 0
        },
        filter_open: false,
        search_timer: undefined,
        showNavbar: true,
        lastScrollPosition: 0
      };
    },
    computed: {
      searchTerm: {
        get: function () {
          return this.$store.state.posts.search;
        },
        set: function (term) {
          clearTimeout(this.search_timer);
          this.search_timer = setTimeout(() => {

            this.$store.commit("posts/setPage", 0);
            this.$store.commit("posts/setPosts", []);
            this.$store.dispatch("posts/fetchPage");
          }, 800);
          this.$router.push({ path: '/', query: { q: term } });
        }
      }
    },

    mounted() {
      this.$nextTick(function () {
        window.addEventListener("resize", this.getWindowWidth);
        //Init
        this.getWindowWidth();
      });
      window.addEventListener("scroll", this.onScroll);

    },

    methods: {
      getWindowWidth(event) {
        this.window.width = document.documentElement.clientWidth;
      },
      onOutSideClick() {
        this.filter_open = false;
      },
      search() { },
      logout() {
        this.$store.dispatch("logout");
        this.$router.push("/");
      },
      onScroll() {
        const currentScrollPosition =
          window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollPosition < 0) {
          return;
        }
        // Stop executing this function if the difference between
        // current scroll position and last scroll position is less than some offset
        if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 100) {
          return;
        }
        this.showNavbar = currentScrollPosition < this.lastScrollPosition;
        this.lastScrollPosition = currentScrollPosition;
      }
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.getWindowWidth);
      window.removeEventListener("scroll", this.onScroll);
    }
  };
</script>

<style lang="scss">

  .navbar {
    transform: translate3d(0, 0, 0);
    transition: 0.2s all ease-out;
    
  }
  .nav-dark {
    transform: translate3d(0, 0, 0);
    transition: 0.2s all ease-out;
    background-color: #000000 !important;
  }

  .navbar--hidden {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
  }



  .navbar {

    margin: 0 !important;
    //z-index: 9999;

    .input {
      width: 60% !important;
      margin-left: 10vw !important;
      margin-right: auto !important;

      position: relative;

      img {
        position: absolute;
        top: 10px;
        right: 15px;
        opacity: 0.6;
      }

      .background {
        background-color: #ececec;
      }

      .background--dark {
        background-color: #1d1d1b;
        color: rgba($color: #fff, $alpha: 0.8);
        border: #292929;
      }
    }

    .input-mobile {
      position: relative;
      width: 50% !important;

      img {
        position: absolute;
        top: 10px;
        right: 15px;
        opacity: 0.6;
      }

      .background {
        background-color: transparent;
        border: 0;
      }

      .background:focus {
        background-color: #ececec;
        border: #fff;
        box-shadow: 0 0 0 0;
        color: rgba($color: #000, $alpha: 0.8);
        border-radius: 3px;
        transition: 2s;
      }

      .background:focus+.white-display {
        display: none !important;
      }

      .background--dark:focus {
        background-color: #1d1d1b;
        border: #292929;
        color: rgba($color: #fff, $alpha: 0.8);
      }

      .background--dark:focus+.black-display {
        display: none !important;
      }

      .background--dark:focus+.white-display {
        display: inherit !important;
      }

      .black-display {
        z-index: 99;
      }
    }

    .filter-button {
      background-color: #ececec !important;
      border: 0;
      color: #949494;
      margin-top: 0 !important;
      height: calc(1.5em + 0.75rem + 2px);
      padding-right: 24px;
      padding-left: 24px;
      transition: 2s;
    }

    .filter-button--dark {
      background-color: #1d1d1b !important;
      color: rgba(255, 255, 255, 0.8);
    }

    .filter-button:hover {
      color: #fed04d;
    }
  }

  .text-white{
    color: #ffffff !important;
    cursor: pointer;
    font-size: 15px;
  }

  .text-dark{
    color: #000000 !important;
    cursor: pointer;
    font-size: 15px;
  }
</style>
