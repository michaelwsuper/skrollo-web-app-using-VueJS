<template>
  <div>
    <FeedNavbar />
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
                :item="post"
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
import { mapMutations } from "vuex";

export default {
  name: "discover_rnd",
  layout: "default",
  scrollToTop: false,
  components: {
    Post,
  },
  data() {
    return {
      isLoading: false,
      posts: [],
      width: 0,
      pageHeight: 0
    };
  },
  created() {
    // Request page
    this.getNextPage()
  },
  mounted() {
  },
  
  updated() {
  },
  computed: {
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
    postLiked(post) {
      if (!this.$store.state.loggedIn) {
        this.dismissCountDown = this.dismissSecs;
      }
    },
    async getNextPage(event) {
      this.infiteState = event;
      this.loading = true;
      // Get the next page
      this.$store.dispatch("posts/fetchPage").then((data) => {
        this.posts = data
        this.loading = false;
      });
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
