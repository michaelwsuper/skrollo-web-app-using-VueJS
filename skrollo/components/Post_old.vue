<template>
  <div
    :id="'post_' + item.id"
    class="card card-post"
    :class="{ 'card--dark': $store.state.dark, hidden: !loaded }"
    @mouseover="onPostHover"
    @mouseleave="onPostLeave"
    v-view="onView"
  >
    <div class="card-header">
      <div class="row">
        <div class="col-sm-12">
          <div class="text-primary">
            <!-- <i style="font-size:20px" class="float-left fab text-yellow" v-bind:class="['fa-'+item.source+'-square']" ></i> -->
            <img
              class="float-left"
              :src="'/images/social/' + item.platform + '-icon.png'"
              height="20px"
              alt
            />
          </div>
          <div class="float-right">
            <div class="text-dark" v-if="!$store.state.dark" @click="id = item.id && (share = !share)">
              <img
                src="/images/social/icons8-connect-50-dark.png"
                class="mb-1"
                height="16px"
                 
              />
              Share
            </div>
            <div class="text-white" v-if="$store.state.dark" @click="id = item.id && (share = !share)">
              <img
                src="/images/social/icons8-connect-51.png"
                class="mb-1"
                height="16px"
              />
              Share
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div v-if="share" class="social-share">
        <div v-if="share"  class="float-right">
          <a
            class="mr-1"
            title="share on facebook"
            :href="
              'https://www.facebook.com/sharer/sharer.php?u=https://skrollo.com/post/' +
                item.id
            "
            target="_blank"
          >
            <img src="/images/social/icons8-facebook-48.png"  v-if="$store.state.dark" height="30px" />
            <img src="/images/social/icons8-facebook-48-dark.png"  v-if="!$store.state.dark" height="30px" />
          </a>
          <a
            class="mr-1"
            title="share on whatsapp"
            :href="'https://wa.me/?text=https://skrollo.com/post/' + item.id"
            target="_blank"
          >
            <img src="/images/social/icons8-whatsapp-100.png"  v-if="$store.state.dark" height="30px" />
            <img src="/images/social/icons8-whatsapp-100-dark.png"  v-if="!$store.state.dark" height="30px" />
          </a>
          <a
            class="mr-1"
            title="share on twitter"
            :href="
              'https://twitter.com/intent/tweet?url=https://skrollo.com/post/' +
                item.id
            "
            target="_blank"
          >
            <img src="/images/social/icons8-twitter-16.png"  v-if="$store.state.dark" height="30px" />
            <img src="/images/social/icons8-twitter-16-dark.png"  v-if="!$store.state.dark" height="30px" />
          </a>
          <a
            class="mr-1"
            title="share on Pinterest"
            :href="
              'http://pinterest.com/pin/create/button/?url=https://skrollo.com/post/' +
                item.id
            "
            target="_blank"
          >
            <img src="/images/social/icons8-pinterest-48.png"  v-if="$store.state.dark" height="30px" />
            <img src="/images/social/icons8-pinterest-48-dark.png"  v-if="!$store.state.dark" height="30px" />
          </a>
          <a
            class="mr-1"
            title="share vie SMS"
            :href="'sms:?&body=http%3A//skrollo.com/post/' + item.id"
            target="_blank"
          >
            <img src="/images/social/icons8-sms-48.png"  v-if="$store.state.dark" height="30px" />
            <img src="/images/social/icons8-sms-48-dark.png"  v-if="!$store.state.dark" height="30px" />
          </a>
          <a
            @click="copyLink"
            class="mr-1 clickable"
            title="copy link"
            target="_blank"
          >
            <img src="/images/social/icons8-link-16.png"  v-if="$store.state.dark" height="30px" />
            <img src="/images/social/icons8-link-16-dark.png"  v-if="!$store.state.dark" height="30px" />
          </a>
        </div>
      </div>
      <div v-touch="selected" class="card-img-top clickable">
        <div
          v-if="
            item.content_type.includes('image') ||
              item.content_type == '' ||
              item.content_type.includes('Photo')
          "
        >
          <!-- this is the changed part by Ivan -->
          <!-- <visual in-viewport-root-margin="10% 0%" width="100%" loop :muted="isMuted" autoplay autopause="visible"
            :image="image" :video="video" @loaded="load"></visual> -->

          <div class="vv-visual vv-loaded vv-image-loaded" style="width: 100%;">
            <div class="vv-transition vv-image-transition">
              <picture>
                <source :src="item.media_location" media="(min-width: 800px)" />
                <img
                  :src="item.media_location"
                  class="vv-asset vv-image vv-has-width"
                />
              </picture>
            </div>
          </div>
          <!-- this is the changed part by Ivan -->
        </div>

        <div v-if="item.platform == 'youtube'">
          <LazyYoutubeVideo :url="item.location" />
        </div>

        <div
          v-if="
            item.content_type.includes('video') ||
              item.content_type.includes('Video')
          "
        >
          <video
            width="100%"
            :src="item.media_location"
            controls
            loop
            :muted="isMuted"
            preload="metadata"
          ></video>
        </div>
      </div>
    </div>
    <!-- special content -->
    <!-- <div class="shop">
      <b-button variant="outline-primary" size="sm">Shop Now</b-button>
    </div>-->
    <div class="card-body pt-1 pb-0">
      <nuxt-link :to="link_location" no-prefetch exact>
        <!-- @click="selected" -->
        <h5 class="card-title clickable">
          <b>{{ post_title }}</b>
        </h5>
      </nuxt-link>

      <div class="row">
        <div class="col-6">
          <div v-if="!$store.state.dark" class="text-dark">
            <h4 class="mb-1">
              <i class="far fa-comment-alt"></i>
              <b>{{ item.comment_count }}</b>
            </h4>
          </div>
          <div v-if="$store.state.dark" class="text-white">
            <h4 class="mb-1">
              <i class="far fa-comment-alt"></i>
              <b>{{ item.comment_count }}</b>
            </h4>
          </div>
        </div>
        <!-- <div class="col-6"></div> -->
        <!-- <div class="col-6">
          <div class="text-center text-grey">Company Name</div>
        </div> -->
        <div class="col-6">
          <div v-if="!$store.state.dark" class="text-dark float-right mb-1" @click="onLike">
            <h4>
              <i
                v-if="!item.user_liked"
                class="far fa-arrow-alt-circle-up "
              ></i>
              <i v-if="item.user_liked" class="fas fa-arrow-alt-circle-up"></i>
              <b>{{ nFormatter(item.score + item.like_count, 2) }}</b>
            </h4>
            <!-- <img
              src="/images/social/icons8-up-arrow-24.png"
              class=""
              height="20px"
            /> -->
          </div>
          <div v-if="$store.state.dark" class="text-white float-right mb-1" @click="onLike">
            <h4>
              <i
                v-if="!item.user_liked"
                class="far fa-arrow-alt-circle-up "
              ></i>
              <i v-if="item.user_liked" class="fas fa-arrow-alt-circle-up"></i>
              <b>{{ nFormatter(item.score + item.like_count, 2) }}</b>
            </h4>
            <!-- <img
              src="/images/social/icons8-up-arrow-24.png"
              class=""
              height="20px"
            /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Vue from "vue";
import Vue2TouchEvents from "vue2-touch-events";
import VueClipboard from "vue-clipboard2";
Vue.use(Vue2TouchEvents);
Vue.use(VueClipboard);
const Entities = require('html-entities').AllHtmlEntities;

export default {
  name: "Post",
  props: {
    item: {},
    link: {
      type: String
    }
  },
  data() {
    return {
      hover: false,
      image: "",
      video: "",
      cover: "",
      message: null,
      id: null,
      share: false,
      loaded: false,
      isMuted: true,
      youtube: null,
      clicks: 0,
      delay: 300,
      result: []
    };
  },
  methods: {
    selected: function(event) {
      this.clicks++;
      if (this.clicks === 1) {
        var video_tag = this.$el.getElementsByTagName("VIDEO")[0];
        var self = this;
        this.timer = setTimeout(function() {
          self.result.push(event.type);
          self.clicks = 0;
          if (
            window.innerWidth < 800 &&
            self.item.content_type.includes("video")
          )
            video_tag.paused ? self.onPostHover() : self.onPostLeave();
          else if (self.result.length == 1) self.$emit("selected", self.item);
        }, this.delay);
      } else {
        clearTimeout(this.timer);
        this.onLike();
        this.clicks = 0;
        console.log("double clicked");
      }
    },
    onCopy: function(e) {
      alert("Failed to copy texts");
    },
    onError: function(e) {
      alert("Failed to copy texts");
    },
    copyLink() {
      this.$copyText("https://skrollo.com/post/" + this.item.id);
      this.$bvToast.toast("https://skrollo.com/post/" + this.item.id, {
        title: "Link Copied! Share around :)",
        autoHideDelay: 5000,
        appendToast: true,
        variant: "success",
      });
    },
    load() {
      if (this.item.content_type == "y") {
        console.log("YT loaded");
      }
      this.loaded = true;
    },
    onPostHover() {
      //Un mute
      this.isMuted = false;
      // this is coded by Ivan
      if (this.item.content_type.includes("video")) {
        this.$el.getElementsByTagName("VIDEO")[0].play();
      }

      // this is coded by Ivan
    },
    onPostLeave() {
      this.isMuted = true;
      if (this.item.content_type.includes("video")) {
        this.$el.getElementsByTagName("VIDEO")[0].pause();
      }
    },
    onView(e) {
      
    },
    onLike() {
      this.$emit("liked", this.item);
      if (this.$store.state.loggedIn) {
        if (this.item.user_liked) {
          // this.item.user_liked = false;
          this.$store.commit("posts/decrementPost", this.item);
        } else {
          this.$store.commit("posts/incrementPost", this.item);
        }
        this.$store.commit("posts/likePost", this.item);
        this.$store.dispatch("posts/likePost", this.item);
      }
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
    }



    
  },
  mounted() {
    // if (this.item.media.content_type) {
    //   if (this.item.media.content_type.includes("video")) {
    //     this.video = this.item.media.location;
    //     //If its a relative url its ours
    //     if (this.video[0] == "/") {
    //       this.video = process.env.STORAGE_URL + this.video;
    //     }
    //   } else {
    //     this.image = this.item.media.location;
    //     if (this.image[0] === "/") {
    //       this.image = process.env.STORAGE_URL + this.image;
    //     }
    //   }
    // }
    if (this.item.platform == "youtube") {
      this.youtube = this.item.location;
      this.loaded = true;
    }
    if (this.item.content_type.includes("video")) {
      // this.cover = this.item.cover_image;
      this.video = this.item.location;
      this.loaded = true;
      this._vnode.elm.classList.remove("hidden");
    }
    if (this.item.content_type.includes("image")) {
      // this.cover = this.item.cover_image;
      this.image = this.item.location;
      this._vnode.elm.classList.remove("hidden");
    }

    if (this.item.content_type == "") {
      this.image = this.item.location;
      this._vnode.elm.classList.remove("hidden");
    }
  },
  computed: {
    link_location() {
      return this.link || "/post/" + this.item.id;
    },
    post_title() {
      const entities = new Entities();
      return entities.decode(this.item.title);
    }
  }
};
</script>

<style lang="scss">
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}

.hidden {
  display: none;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.clickable:hover {
  cursor: pointer;
}

.card {
  border-radius: 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: 0;

  animation-name: fade-in;
  animation-fill-mode: both;
  animation-duration: 0.5s;

  .text-grey {
    color: #949494;
    font-size: 12px;
    margin-top: 7px;
  }

  .shop {
    background-color: #dee2e6;
    padding: 5px 10px;
    text-align: right !important;
    margin-top: -6px;
    z-index: 9;
  }

  .card-header {
    background-color: #fff;
    border: 0;

    a {
      color: #1d1d1b !important;
      text-decoration: none !important;
      transition: 1s;
    }

    a:hover {
      color: #f7c22d !important;
    }
  }

  .card-title {
    b {
      color: #1d1d1b !important;
      text-decoration: none !important;
      transition: 1s;
    }

    b:hover {
      color: #f7c22d !important;
    }
  }
}

.card--dark {
  background-color: #292929;

  .card-header {
    background-color: #292929;

    b {
      color: #fff !important;
    }

    b:hover {
      color: #f7c22d !important;
    }
  }

  .card-title {
    b {
      color: #fff !important;
    }

    b:hover {
      color: #f7c22d !important;
    }
  }
}

/*
.text-yellow {
  color: #f7c22d;
  cursor: pointer;
  font-size: 15px;
}
*/
.text-white{
  color: #ffffff;
  cursor: pointer;
  font-size: 15px;
  transition: 1s;
}
.text-dark{
  color: #000000;
  cursor: pointer;
  font-size: 15px;
  transition: 1s;
}
.social-share {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px;
  z-index: 99;
  width: 100%;
}



.relat {
  position: relative;
}

.card-title {
  color: black;
}

.card-title:hover {
  color: #0056b3;
}

.card-header a:hover {
  background-color: white;
}

.margin-right-5 {
  margin-right: 5px;
}

.margin-right-10 {
  margin-right: 10px;
}

.margin-right-15 {
  margin-right: 15px;
}
</style>
