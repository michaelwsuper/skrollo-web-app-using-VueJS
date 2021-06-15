<template>
  <div>
    <b-overlay :id="item.id" :show="!isReady" :variant="$store.state.dark ? 'dark' : 'light'" opacity="1">
      <b-card @mouseover="onPostHover" @mouseleave="onPostLeave" v-view="onView" :data-id="item.id"
        :bg-variant="$store.state.dark ? 'dark' : 'light'" img-alt="Image" no-body img-top
        :class="{ 'text-light': $store.state.dark }">
        <template v-slot:header>
          <div class="d-flex justify-content-between">

            <div class="float-left d-flex align-items-center">
              <div class="text-primary">
                <!-- <i style="font-size:20px" class="float-left fab text-yellow" v-bind:class="['fa-'+item.source+'-square']" ></i> -->
                <img class="float-left d-flex" :src="'/images/social/' + item.platform + '-icon.png'" height="20px"
                  alt />
              </div>
            </div>

            <div class="float-right">
              <div class="float-right">
                <div class="text-white" @click="onLoad">
                  <b-dropdown class="btn-share" size="sm" :variant="$store.state.dark ? 'dark' : 'light'" right
                    toggle-class="text-decoration-none" no-caret>
                    <template v-slot:button-content>
                      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                        clip-rule="evenodd" class="share-image">
                        <path
                          d="M16.272 5.451c-.176-.45-.272-.939-.272-1.451 0-2.208 1.792-4 4-4s4 1.792 4 4-1.792 4-4 4c-1.339 0-2.525-.659-3.251-1.67l-7.131 3.751c.246.591.382 1.239.382 1.919 0 .681-.136 1.33-.384 1.922l7.131 3.751c.726-1.013 1.913-1.673 3.253-1.673 2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4c0-.51.096-.999.27-1.447l-7.129-3.751c-.9 1.326-2.419 2.198-4.141 2.198-2.76 0-5-2.24-5-5s2.24-5 5-5c1.723 0 3.243.873 4.143 2.201l7.129-3.75zm3.728 11.549c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm-15-9c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm15-7c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z" />
                      </svg>
                      Share
                    </template>
                    <b-dropdown-item :href="
                        'https://www.facebook.com/sharer/sharer.php?u=https://skrollo.com/post/' +
                          item.id
                      " target="_blank">
                      <i class="fab fa-facebook-square"></i> Facebook
                    </b-dropdown-item>
                    <b-dropdown-item :href="
                        'https://wa.me/?text=https://skrollo.com/post/' +
                          item.id
                      " target="_blank">
                      <i class="fab fa-whatsapp-square"></i> Whatsapp
                    </b-dropdown-item>
                    <b-dropdown-item :href="
                        'https://www.facebook.com/sharer/sharer.php?u=https://skrollo.com/post/' +
                          item.id
                      " target="_blank">
                      <i class="fab fa-twitter-square"></i> Twitter
                    </b-dropdown-item>
                    <b-dropdown-item :href="
                        'https://www.facebook.com/sharer/sharer.php?u=https://skrollo.com/post/' +
                          item.id
                      " target="_blank">
                      <i class="fab fa-pinterest-square"></i> Pinterest
                    </b-dropdown-item>
                    <b-dropdown-item target="_blank">
                      <nuxt-link to="/sms">                        
                        <i class="fas fa-phone-square-alt"></i> SMS
                      </nuxt-link>
                    </b-dropdown-item>
                    <b-dropdown-item @click="copyLink" target="_blank">
                      <i class="fas fa-link"></i> Link
                    </b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
            </div>
          </div>
        </template>

        <div v-if="item.content_type.includes('video')">
          <video v-show="isReady" ref="media" width="100%" controls autoplay :src="item.media_location" loop
            :muted="isMuted" @canplay="onLoad" preload="auto" v-on="mediaListeners"></video>
        </div>

        <img ref="media" :src="item.media_location" class="card-img-top" v-if="
            item.content_type.includes('image') ||
              this.item.content_type.includes('Photo') ||
              this.item.content_type.includes('Animated')
          " :alt="item.title" v-on="mediaListeners" />

        <div v-if="
            item.content_type.includes('youtube') ||
              item.media_location.includes('youtube.com')
          ">
          <LazyYoutubeVideo v-show="isReady" thumbnailListeners="{'jpg', onLoad}" :url="item.media_location" autoplay />
        </div>

        <b-card-body>
          <nuxt-link :to="'post/' + item.id" no-prefetch exact>
            <b-card-title>{{ post_title }}</b-card-title>
          </nuxt-link>
        </b-card-body>

        <template v-slot:footer>
          <b-row>
            <b-col sm="12">
              <h4 :class="{
                  'text-light': $store.state.dark,
                  'float-left': true,
                  'mb-1': true
                }" class="post-info cursor-point" @click="handleCommentClick()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                  class="post-info__image post-info__image--comments">
                  <path
                    d="M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.145 7.961-9.91 7.961-1.937 0-3.383-.397-4.394-.644-1 .613-1.595 1.037-4.272 1.82.535-1.373.723-2.748.602-4.265-.838-1-2.025-2.4-2.025-4.872-.001-4.415 4.485-8.007 9.999-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.418.345 2.775.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006zm-3.5 10c0 .829-.671 1.5-1.5 1.5-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5c.829 0 1.5-.671 1.5-1.5s-.671-1.5-1.5-1.5zm5 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5c.829 0 1.5-.671 1.5-1.5s-.671-1.5-1.5-1.5z" />
                </svg>
                <b class="post-info__number">{{ item.comment_count }}</b>
              </h4>
              <h4 @click="onLike" :class="{
                  'text-light': $store.state.dark,
                  'float-right': true,
                  'mb-1': true
                }" class="post-info">
                <b class="post-info__number">{{
                  nFormatter(item.score + item.like_count, 2)
                }}</b>
                <svg v-if="!item.user_liked" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" class="post-info__image post-info__image--no-like">
                  <path
                    d="M18 11h-4v7h-4v-7h-4l6-6 6 6zm-16 1c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10-10-4.486-10-10zm-2 0c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12z" />
                </svg>
                <svg class="post-info__image post-info__image--has-like" v-else xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm18-1h-4v7h-4v-7h-4l6-6 6 6z" />
                </svg>
              </h4>
            </b-col>
          </b-row>
        </template>
      </b-card>
    </b-overlay>
  </div>
</template>

<script>
  import Vue from "vue";
  import Vue2TouchEvents from "vue2-touch-events";
  import VueClipboard from "vue-clipboard2";
  Vue.use(Vue2TouchEvents);
  Vue.use(VueClipboard);
  const Entities = require("html-entities").AllHtmlEntities;

  export default {
    name: "Post",
    props: {
      item: {},
      mediaListeners: {
        type: Object
      }
    },
    components: {},
    data() {
      return {
        isMuted: true,
        isReady: false,
        hover: false,
        isPaused: true
      };
    },
    mounted() {
      //this.isReady = this.$refs.media.complete;
      if (
        this.item.content_type.includes("youtube") ||
        this.item.media_location.includes("youtube.com")
      ) {
        this.onLoad();
      }
      if (
        this.item.content_type.includes("image") ||
        this.item.content_type.includes("Photo") ||
        this.item.content_type.includes("Animated")
      ) {
        this.$refs.media.onload = this.onLoad;
      } else if (this.item.content_type == "") {
        let rules = [".png", ".gif", ".jpg"];
        let matches = rules.filter(rule => {
          return this.item.media_location.includes(rule);
        });
        if (matches.length > 0) {
          this.item.content_type = "image";
          this.$nextTick(() => {
            this.$refs.media.onload = this.onLoad;
          });
        } else {
          this.onLoad();
        }
      }
    },
    methods: {
      copyLink() {
        this.$copyText("https://skrollo.com/post/" + this.item.id);
        this.$bvToast.toast("https://skrollo.com/post/" + this.item.id, {
          title: "Link Copied! Share around :)",
          autoHideDelay: 5000,
          appendToast: true,
          variant: "success"
        });
      },
      onPostHover(e) {
        this.isMuted = false;
      },
      onPostLeave(e) {
        this.isMuted = true;
      },
      onView(e) {
        this.$emit("view", e);
        if (e.percentInView >= 0 && this.content_type.includes('video')) {
          this.$refs.media.pause()
        } else {
          this.$refs.media.play()
        }
      },
      onLoad() {
        this.isReady = true;
        this.$emit("load", { id: this.item.id });
      },
      nFormatter(num, digits) {
        var si = [
          { value: 1, symbol: "" },
          { value: 1e3, symbol: "k" },
          { value: 1e6, symbol: "M" },
          { value: 1e9, symbol: "G" },
          { value: 1e12, symbol: "T" },
          { value: 1e15, symbol: "P" },
          { value: 1e18, symbol: "E" }
        ];
        var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var i;
        for (i = si.length - 1; i > 0; i--) {
          if (num >= si[i].value) {
            break;
          }
        }
        return (
          (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol
        );
      },
      height() {
        return this.$el.getBoundingClientRect();
      },
      copyLink() {
        this.$copyText("https://skrollo.com/post/" + this.item.id);
        this.$bvToast.toast("https://skrollo.com/post/" + this.item.id, {
          title: "Link Copied! Share around :)",
          autoHideDelay: 5000,
          appendToast: true,
          variant: "success"
        });
      },
      handleCommentClick() {
        if (this.$route.path === "/") this.$router.push(`post/${this.item.id}#comments`);
      },
      onLike() {
        this.$emit("liked", this.item);
        if (this.$store.getters.isLoggedIn) {
          this.$axios.setToken(
            this.$store.state.token,
            this.$store.state.token_type
          );
          if (!this.item.user_liked) {
            this.item.user_liked = true;
            this.item.like_count += 1;
            return this.$axios.$post("/api/posts/" + this.item.id + "/like/");
          } else {
            this.item.user_liked = false;
            this.item.like_count -= 1;
            return this.$axios.$delete("/api/posts/" + this.item.id + "/like/");
          }
        }
      }
    },
    computed: {
      post_title() {
        const entities = new Entities();
        return entities.decode(this.item.title);
      }
    },
    created() { },
    destroyed() { }
  };
</script>

<style lang="scss">
  .card {
    a {
      color: inherit !important;
      text-decoration: none !important;
      transition: 1s;
    }

    a:hover {
      color: #f7c22d !important;
    }
  }

  .card-header {
    padding: 0.25rem 1rem;
  }

  .card-title {
    font-family: Roboto, Arial, sans-serif !important;
    margin-bottom: 0.1rem;
    font-size: 1.4rem;
  }

  .card-body {
    padding: 0.25rem 0.75rem;
  }

  .card-footer {
    border-top: none;
    background-color: inherit;
  }

  .post-info {
    display: flex;
    align-items: center;

    &__number {
      line-height: 1;
      color: #000;
    }

    &__image {
      fill: #FED04D;

      &--comments {
        margin-right: 5px;
      }

      &--has-like,
      &--no-like {
        margin-left: 5px;
      }
    }
  }

  .btn-share {
    button {
      display: flex;
      align-items: center;

      .share-image {
        fill: #fed04d;
        transform: scale(0.67);
      }

      span {
        line-height: 1;
      }
    }
  }

  .cursor-point {
    cursor: pointer;
  }

  .app--dark {
    .post-info__number {
      color: #fff;
    }
  }

  .card-post {
    .post-info__number {
      color: #000;
    }

    &.card.card--dark {
      .post-info__number {
        color: #000;
      }
    }
  }
</style>