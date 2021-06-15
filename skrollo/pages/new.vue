<template>
  <div>
    <FeedNavbar />
    <client-only>
      <!-- :style="{ 'max-height': maxScrollHeight + 'px' }" -->
      <div id="scroll-wrapper" v-if="posts.length != 0">
        <div>
          <masonry
            :cols="{ default: 5, 1800: 4, 1500: 3, 1000: 2, 800: 1, 300: 1 }"
            :gutter="{ default: '5px', 700: '0px' }"
            class="mt-1"
          >
            <div v-for="post of posts" :key="post.id">
              <Post
                @selected="postSelected"
                :item="post"
                :class="window.width < 790 ? 'mt-2' : 'm-3'"
                @liked="postLiked"
              />
            </div>
          </masonry>
          <infinite-loading @infinite="getNextPage" :status="loading">
            <div slot="spinner">
              <div class="text-center">
                <b-spinner
                  style="width: 9rem; height: 9rem; "
                  v-if="posts.length != 0"
                  variant="warning"
                  key="warning"
                  type="grow"
                ></b-spinner>
              </div>
            </div>
          </infinite-loading>
        </div>
      </div>
      <div v-else>
        <div class="loading">
          <img src="/assets/img/logo2.png" />
        </div>
      </div>
      <Elevator />
    </client-only>
    <b-alert
      class="position-fixed fixed-bottom m-0 rounded-0"
      style="z-index: 2000;"
      variant="secondary"
      dismissible
      :show="dismissCountDown"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      <p class="text-center text-dark">
        When you like an item it will be stored in your personal feed forever!
        Please sign up to use this feature:
        <nuxt-link to="/signup">Signup Here!</nuxt-link>
      </p>
    </b-alert>
  </div>
</template>

<script>
import Vue from "vue";
import Post from "~/components/Post.vue";
import Sources from "~/components/Sources.vue";
import Elevator from "~/components/Elevator.vue";
import { mapMutations } from "vuex";
import FeedNavbar from "~/components/FeedNavbar.vue";

export default {
  name: "page_index",
  layout: "default",
  scrollToTop: false,
  // We want to update the page everytime the url param Q gets changed
  watchQuery: ["q"],
  components: {
    Post,
    Sources,
    FeedNavbar,
    Elevator
  },
  data() {
    return {
      loading: 0,
      window: {
        width: 0
      },
      pageHeight: 0,
      maxScrollHeight: 0,
      infiteState: null,
      word: "",
      duration: 1000,
      mainAudio: "",
      endAudio: "",
      showLikeCta: false,
      dismissSecs: 5,
      dismissCountDown: 0,
      posts: []
    };
  },

  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.onResize);
      this.onResize();
    });

    this.$store.commit("posts/updateSearch", this.$route.query.q || "");
    this.$store.commit("posts/setLoading", true);
    this.$store.dispatch("posts/fetchPage", this.$store.getters["posts/pageRequest"])
      .then(data => {
        this.posts = data;
        this.$store.commit("posts/setLoading", false);
      });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
  },
  created() {
    setTimeout(() => {
      this.loading = false;
      // this.$refs.up.$el.childNodes[0].childNodes[0].style.display = "none"
    }, 300);
  },
  updated() {
    this.maxScrollHeight =
      this.pageHeight - document.getElementById("navbar").scrollHeight;
    this.$nextTick(() => {
      if (this.$store.state.scrollLocation != undefined) {
        // If we have a saved location in the store, dont download a new page keep it the same
        console.log("Created");
        document.getElementById(
          "scroll-wrapper"
        ).scrollTop = this.$store.state.scrollLocation;
        this.$store.commit("saveScrollLocation", undefined);
      }
    });
  },
  computed: {
    // posts() {
    //   return this.$store.state.posts.list;
    // },
    page() {
      return this.$store.state.posts.page;
    },
    isLoading() {
      return this.$store.state.posts.isLoading;
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    postSelected(post) {
      // Save the scroll location so we know where we need to come back to
      this.$store.commit(
        "saveScrollLocation",
        document.getElementById("scroll-wrapper").scrollTop
      );
      this.$router.push({
        path: "/post/" + post.id
      });
    },
    postLiked(post) {
      if (!this.$store.state.loggedIn) {
        this.dismissCountDown = this.dismissSecs;
      }
    },
    async getNextPage(event) {
      this.infiteState = event;
      console.log("Get next page");
      this.loading = true;
      // Get the next page
      this.$store.dispatch("posts/fetchPage").then(() => {
        // Increment the page we want after we get the page
        this.loading = false;
        // this.$store.commit("posts/incrementPage");
        event.loaded();
        // event.complete();
      });
    },
    onResize(event) {
      this.$store.commit("windowwidth", document.documentElement.clientWidth);
      this.window.width = document.documentElement.clientWidth;
      this.pageHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      );
    },
    infiteTest(event) {
      console.log(event);
    }
  }
};
</script>

<style lang="scss">
.card-post {
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(254, 208, 77, 0.3);
  }
}

.loading {
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  position: fixed;

  img {
    width: 300px;
    -webkit-animation-name: fade;
    -webkit-animation-duration: 2s;
    animation-name: fade;
    animation-duration: 2s;
    animation-iteration-count: 3;
  }

  @-webkit-keyframes fade {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  @keyframes fade {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
}

.loadin {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 999999999;
  background-color: #000;

  .spiner {
    width: 12rem;
    height: 12rem;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    position: absolute;
  }
}
</style>
