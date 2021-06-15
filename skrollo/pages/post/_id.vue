<template>
  <!-- :style="{ 'max-height': maxScrollHeight + 'px', 'top': top + 'px' }" -->
  <div class="container px-0">
    <!-- <b-row style="margin: auto">
      <b-col lg="2" class="my-1">
        <b-button
          style="background:#FED04D !important;"
          @click="handleBack()"
          block
          variant="primary"
        >
          Go Back
        </b-button>
      <b-button :variant="btnColor">
        Next
      </b-button>
      </b-col>
    </b-row>-->
  
  <!-- Coded by Selyatin Ismet -->
    <div class="my-1">
      <b-button @click="handleBack()">
        <svg style="transform: rotateZ(180deg); margin-right: 0.5rem;" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50">
          <path d="M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40
	        c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20
	        c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z" />
        </svg>
      </b-button>
      <b-button @click="handleForward()">
        <svg style="margin-left: 0.5rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
          <path d="M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40
	        c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20
	        c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z" />
        </svg>
      </b-button>
    </div>
    <div class="my-1-mobile-info">
      <span style="float:left;">
        <svg xmlns="http://www.w3.org/2000/svg" style="transform: rotateZ(180deg)" viewBox="0 0 350 100">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" 
          refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" />
          </marker>
        </defs>
        <line x1="0" y1="50" x2="125" y2="50" 
        stroke-width="8" marker-end="url(#arrowhead)" />
        </svg>

        Swipe Back
      </span>
      <span style="float: right;">
        Swipe Forward

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100">
          <defs>
            <marker id="arrowhead2" markerWidth="10" markerHeight="7" 
            refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" />
            </marker>
          </defs>
          <line x1="0" y1="50" x2="125" y2="50" 
          stroke-width="8" marker-end="url(#arrowhead2)" />
        </svg>
      </span>
    </div>
    <!------------------------>
    <div class="row justify-content-center" :class="{ ' m-0': window.width < 760 }">
      <div class="col-md-8 col-lg-6 mb-4" :class="{ ' p-0': window.width < 760 }">
        <!-- <Post @click="onPostSelected" v-if="$store.state.posts.selected" :item="$store.state.posts.selected" :link="$store.state.posts.selected.location" /> -->

        <div :id="'post_' + post.id" class="card card-post mb-3" :class="{ 'bg-dark text-light': $store.state.dark }">

          <div class="card-header">
            <div class="d-flex justify-content-between">

              <div class="float-left d-flex align-items-center">
                <div class="text-primary">
                  <!-- <i style="font-size:20px" class="float-left fab text-yellow" v-bind:class="['fa-'+item.source+'-square']" ></i> -->
                  <img class="float-left d-flex" :src="'/images/social/' + post.platform + '-icon.png'" height="20px"
                    alt />
                </div>
              </div>

              <div class="float-right">
                <div class="float-right">
                  <div class="text-white">
                    <b-dropdown class="btn-share" size="sm" :variant="$store.state.dark ? 'dark' : 'light'" right
                      toggle-class="text-decoration-none" no-caret>
                      <template v-slot:button-content>
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                          clip-rule="evenodd" class="share-image">
                          <path
                            d="M16.272 5.451c-.176-.45-.272-.939-.272-1.451 0-2.208 1.792-4 4-4s4 1.792 4 4-1.792 4-4 4c-1.339 0-2.525-.659-3.251-1.67l-7.131 3.751c.246.591.382 1.239.382 1.919 0 .681-.136 1.33-.384 1.922l7.131 3.751c.726-1.013 1.913-1.673 3.253-1.673 2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4c0-.51.096-.999.27-1.447l-7.129-3.751c-.9 1.326-2.419 2.198-4.141 2.198-2.76 0-5-2.24-5-5s2.24-5 5-5c1.723 0 3.243.873 4.143 2.201l7.129-3.75zm3.728 11.549c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm-15-9c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm15-7c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z" />
                        </svg>
                        <span>Share</span>
                      </template>
                      <b-dropdown-item :href="
                          'https://www.facebook.com/sharer/sharer.php?u=https://skrollo.com/post/' +
                            post.id
                        " target="_blank">
                        <i class="fab fa-facebook-square"></i> Facebook
                      </b-dropdown-item>
                      <b-dropdown-item :href="
                          'https://wa.me/?text=https://skrollo.com/post/' +
                            post.id
                        " target="_blank">
                        <i class="fab fa-whatsapp-square"></i> Whatsapp
                      </b-dropdown-item>
                      <b-dropdown-item :href="
                          'https://www.facebook.com/sharer/sharer.php?u=https://skrollo.com/post/' +
                            post.id
                        " target="_blank">
                        <i class="fab fa-twitter-square"></i> Twitter
                      </b-dropdown-item>
                      <b-dropdown-item :href="
                          'https://www.facebook.com/sharer/sharer.php?u=https://skrollo.com/post/' +
                            post.id
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
          </div>


          <div>

            <!-- <div v-touch="selected" class="card-img-top clickable"> -->
            <div class="card-img-top clickable">
              <div v-if="
                  post.content_type.includes('image') || post.content_type == ''
                ">
                <!-- this is the changed part by Ivan -->
                <!-- <visual in-viewport-root-margin="10% 0%" width="100%" loop :muted="isMuted" autoplay autopause="visible"
                :image="image" :video="video" @loaded="load"></visual>-->

                <div class="vv-visual vv-loaded vv-image-loaded" style="width: 100%;">
                  <div class="vv-transition vv-image-transition">
                    <picture>
                      <source :src="post.media_location" media="(min-width: 800px)" />
                      <img :src="post.media_location" class="vv-asset vv-image vv-has-width" />
                    </picture>
                  </div>
                </div>
                <!-- this is the changed part by Ivan -->
              </div>

              <div v-if="post.platform == 'youtube'">
                <LazyYoutubeVideo :url="post.location" />
              </div>

              <div v-if="post.content_type.includes('video')">
                <video width="100%" :src="post.media_location" controls loop :muted="isMuted"
                  preload="metadata"></video>
              </div>
            </div>
          </div>
          <div class="card-body pt-1 pb-0">
            <a :href="post.location">
              <!-- @click="selected" -->
              <h5 class="card-title clickable">
                <b>{{ post.title }}</b>
              </h5>
            </a>

            <div class="row" id="comments">
              <div class="col-6">
                <h4 :class="{
                    'text-light': $store.state.dark,
                    'float-left': true,
                    'mb-1': true
                  }" class="post-info" @click="handleCommentClick()">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    class="post-info__image post-info__image--comments">
                    <path
                      d="M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.145 7.961-9.91 7.961-1.937 0-3.383-.397-4.394-.644-1 .613-1.595 1.037-4.272 1.82.535-1.373.723-2.748.602-4.265-.838-1-2.025-2.4-2.025-4.872-.001-4.415 4.485-8.007 9.999-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.418.345 2.775.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006zm-3.5 10c0 .829-.671 1.5-1.5 1.5-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5c.829 0 1.5-.671 1.5-1.5s-.671-1.5-1.5-1.5zm5 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5c.829 0 1.5-.671 1.5-1.5s-.671-1.5-1.5-1.5z" />
                  </svg>
                  <b class="post-info__number" :class="{ 'text-light': $store.state.dark }">{{ post.comment_count }}</b>
                </h4>
              </div>
              <div class="col-6">
                <div class="text-white float-right mb-1" @click="onLike">
                  <h4 @click="onLike" :class="{
                      'text-light': $store.state.dark,
                      'float-right': true,
                      'mb-1': true
                    }" class="post-info">
                    <b class="post-info__number"
                      :class="{ 'text-light': $store.state.dark }">{{ post.score + post.like_count }}</b>
                    <svg v-if="!post.user_liked" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div style=" color: #4c86b8;
                    padding-bottom: 15px;
                    margin-left: -75px;
                    cursor: pointer;">
          Back to feed?
        </div> -->
        
        <div class="my-4">
          <b-button to="/" :variant="btnColor">
            Back to feed?
          </b-button>
        </div>


        <div class="card mb-3" :class="{ 'bg-dark text-light': $store.state.dark }">
          <div class="card-header tabs py-0 px-0">
            <div class="row">
              <div class="col-6 text-center py-2">
                <span @click="setTab('comments')" class="tab px-1" :class="{ active: tabIsComments }">Comments</span>
              </div>

              <div class="col-6 text-center py-2">
                <span @click="setTab('journal')" class="tab px-1" :class="{ active: tabIsJournal }">Journal</span>
              </div>
            </div>
          </div>
          
          <div class="card-body py-0 px-0">
            <div v-if="tabIsComments">
              <div v-if="$store.getters.isLoggedIn" class="px-3 py-3">
                <div class="skrollo-comment">
                  <textarea v-model="new_comment" placeholder="Add a comment" rows="4" class="px-2 py-2"
                    :class="{ 'bg-dark text-light': $store.state.dark }"></textarea>

                  <svg @click="onAddComment" class="skrollo-comment-send" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
                    <title>Send</title>
                    <path
                      d="M31.543 0.16c-0.166-0.107-0.355-0.16-0.543-0.16-0.193 0-0.387 0.055-0.555 0.168l-30 20c-0.309 0.205-0.479 0.566-0.439 0.936 0.038 0.369 0.278 0.688 0.623 0.824l7.824 3.131 3.679 6.438c0.176 0.309 0.503 0.5 0.857 0.504 0.004 0 0.007 0 0.011 0 0.351 0 0.677-0.186 0.857-0.486l2.077-3.463 9.695 3.877c0.119 0.048 0.244 0.071 0.371 0.071 0.17 0 0.338-0.043 0.49-0.129 0.264-0.148 0.445-0.408 0.496-0.707l5-30c0.065-0.393-0.109-0.787-0.443-1.004zM3.136 20.777l23.175-15.451-16.85 18.037c-0.089-0.053-0.168-0.123-0.266-0.162l-6.059-2.424zM10.189 24.066c-0.002-0.004-0.005-0.006-0.007-0.010l18.943-20.275-16.149 25.162-2.787-4.877zM25.217 29.609l-8.541-3.416c-0.203-0.080-0.414-0.107-0.623-0.119l13.152-20.388-3.988 23.923z" />
                  </svg>
                </div>
              </div>

              <div v-else class="px-3 py-3">
                <div class="d-flex justify-content-between align-items-center">
                  <p class="text-centered mb-0">Please login to comment.</p>
                  <nuxt-link to="/login">
                    <b-btn>Login</b-btn>
                  </nuxt-link>
                </div>
              </div>
            </div>

            <div v-if="tabIsJournal">
              <div v-if="$store.getters.isLoggedIn" class="px-3 py-3">
                <p class="d-flex align-items-center">
                  <span class="mr-2">Upload Supporting Content</span>
                  <span class="skrollo-question" id="skrollo-question">?</span>
                </p>
                <b-tooltip target="skrollo-question">
                  Users are able to link supporting content and media to a post.
                  This allows others to track the story, stay informed, or see a
                  post from another Skroller’s perspective.
                </b-tooltip>


                <div class="skrollo-journal">
                  <input v-model="journalTitle" placeholder="Title" class="px-2 py-2 mb-4"
                    :class="{ 'bg-dark text-light': $store.state.dark }" />

                  <div @click="$refs.journalFile.click()" ref="filebar"
                    class="skrollo-journal-filebar d-flex align-items-center justify-content-center mb-4">
                    <p class="mb-0">Drag and drop your file here...</p>
                  </div>

                  <input v-if="journalFileVisible" v-show="false" ref="journalFile" type="file"
                    @change="addFile($event.target.files[0])" />

                  <b-btn class="d-flex align-items-center skrollo-journal-send mx-auto">
                    <span>Send</span>
                    <svg @click="addJournalPost" class="ml-2" version="1.1" xmlns="http://www.w3.org/2000/svg"
                      width="16" height="16" viewBox="0 0 32 32">
                      <path
                        d="M31.543 0.16c-0.166-0.107-0.355-0.16-0.543-0.16-0.193 0-0.387 0.055-0.555 0.168l-30 20c-0.309 0.205-0.479 0.566-0.439 0.936 0.038 0.369 0.278 0.688 0.623 0.824l7.824 3.131 3.679 6.438c0.176 0.309 0.503 0.5 0.857 0.504 0.004 0 0.007 0 0.011 0 0.351 0 0.677-0.186 0.857-0.486l2.077-3.463 9.695 3.877c0.119 0.048 0.244 0.071 0.371 0.071 0.17 0 0.338-0.043 0.49-0.129 0.264-0.148 0.445-0.408 0.496-0.707l5-30c0.065-0.393-0.109-0.787-0.443-1.004zM3.136 20.777l23.175-15.451-16.85 18.037c-0.089-0.053-0.168-0.123-0.266-0.162l-6.059-2.424zM10.189 24.066c-0.002-0.004-0.005-0.006-0.007-0.010l18.943-20.275-16.149 25.162-2.787-4.877zM25.217 29.609l-8.541-3.416c-0.203-0.080-0.414-0.107-0.623-0.119l13.152-20.388-3.988 23.923z" />
                    </svg>
                  </b-btn>
                </div>
              </div>

              <div v-else class="px-3 py-3">
                <div class="d-flex justify-content-between align-items-center">
                  <p class="text-centered mb-0">Please login to post in journal.</p>
                  <nuxt-link to="/login">
                    <b-btn>Login</b-btn>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="tabIsComments">
          <div v-for="comment in $store.state.comment.comments">
            <comment :comment="comment" />
          </div>
        </div>
      </div>


      <div class="col-md-4" :class="{ ' p-0': window.width < 760 }">
        <div v-for="item of $store.state.posts.related" :key="item._id">
          <Post @selected="onRelatedSelected" :item="item" class="mb-3" />
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="row">
        <div class="col-6 ml-auto">
          <nuxt-link to="/" @click="$router.back()" exact>
            <h5>Back to feed?</h5>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from "~/components/Navbar.vue";
  import Post from "~/components/Post.vue";
  import Comment from "~/components/Comment.vue";

  // Importing the pure-swipe.js library
  import _ from "pure-swipe";


  export default {
    name: "post_id",
    layout: "default",
    scrollToTop: true,
    components: {
      Navbar,
      Post,
      Comment
    },
    async fetch({ store, params }) {
      let post = store.dispatch("posts/selectPost", params.id);
      let related = store.dispatch("posts/getRelated", params.id);
      let comments = store.dispatch("comment/getComments", params.id);
      return {
        selectposts: await post,
        getrelated: await related,
        getcomments: await comments
      };
    },
    computed: {
      post() {
        return this.$store.state.posts.selected;
      },
      sources() {
        return this.$store.state.posts.sources;
      },
      loading() {
        if (this.$store.state.posts.selected === null) {
          return true;
        } else {
          return false;
        }
      },
      isAuthenticated() {
        return this.authenticated;
      },
      tabIsComments() {
        return this.currentTab === "comments";
      },
      tabIsJournal() {
        return this.currentTab === "journal";
      }
    },
    data() {
      return {
        id: this.$route.params.id,
        url: null,
        image: null,
        video: null,
        fallback: null,
        shar: false,
        share: false,
        currentTab: "comments",
        menuC: false,
        menuS: false,
        authenticated: true,
        maxScrollHeight: 0,
        window: {
          width: 0
        },
        ques: false,
        top: 0,
        new_comment: "",
        prevRoute: null,

        journalTitle: "",
        journalFile: null,
        journalFileVisible: true,

        dragAndDropCapable: false,
        dragAndDropEvents: [
          "drag",
          "dragstart",
          "dragend",
          "dragover",
          "dragenter",
          "dragleave",
          "drop"
        ]
      };
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.prevRoute = from;
      });
    },

    beforeDestroy() {
      window.removeEventListener("resize", this.getWindowWidth);
      window.removeEventListener("resize", this.getWindowHeight);
    },
    mounted() {
      // Window onScroll - Coded by Selyatin Ismet

      var mobileSwipeInformators = document.querySelector(".my-1-mobile-info");
      var timer = null
      window.addEventListener("scroll", function(){
          if(timer != null){
            clearTimeout(timer);
          }
          mobileSwipeInformators.classList.add("hide");
          timer = window.setTimeout(function(){
            mobileSwipeInformators.classList.remove("hide");
          }, 500);
      });

      ///////////////////////////////////////////
      // Hooking the swiping events - Coded by Selyatin Ismet
      document.addEventListener("swiped-right", this.handleBack);
      document.addEventListener("swiped-left", this.handleForward);
      document.onkeydown = (evt) => {
        evt = evt || window.event;
        switch (evt.keyCode) {
          case 37:
            this.handleBack();
            break;
          case 39:
            this.handleForward();
            break;
        }
      };
      /////////////////////////////////////////////////////////
      //Current Url
      this.url = window.location.href;

      window.scrollTo(0, 0);

      this.$nextTick(function () {
        window.addEventListener("resize", this.onResize);
        //Init
        this.onResize();
      });
      this.top = document.querySelector("nav.navbar").scrollHeight;
      if (!this.$store.getters.isLoggedIn) {
        this.authenticated = false;
      } else {
        this.authenticated = true;
      }
    },
    methods: {
      copyLink() {
        this.$copyText("https://skrollo.com/post/" + this.post.id);
        this.$bvToast.toast("https://skrollo.com/post/" + this.post.id, {
          title: "Link Copied! Share around :)",
          autoHideDelay: 5000,
          appendToast: true,
          variant: "success"
        });
      },
      handleBack() {
        this.prevRoute.path === "/"
          ? this.$router.push("/")
          : this.$router.back();
      },
      // Written by Selyatin Ismet
      handleForward() {
        console.log("Swiped right or clicked Right arrow key");
      },
      //////////////////////////
      onLike() {
        if (this.$store.getters.isLoggedIn) {
          if (this.post.user_liked) {
            // this.item.user_liked = false;
            this.$store.commit("posts/decrementPost", this.post);
          } else {
            this.$store.commit("posts/incrementPost", this.post);
          }
          this.$store.commit("posts/likePost", this.post);
          this.$store.dispatch("posts/likePost", this.post);
        }
      },
      onResize(event) {
        this.window.width = document.documentElement.clientWidth;
        this.pageHeight = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        );
        this.maxScrollHeight =
          this.pageHeight - document.getElementById("navbar").clientHeight;
      },
      setTab(tab) {
        this.currentTab = tab;
        if (tab === "comments") return;
        if (!this.dragAndDropCapable) {
          this.$nextTick(() => {
            this.addDragAndDropListner();
          });
        }
      },
      getWindowWidth() {
        this.window.width = document.documentElement.clientWidth;
      },
      onPostSelected(post) {
        window.location(post.location, "_blank");
        // location.href = 'http://github.com'
        // $store.state.posts.selected.location
      },
      onRelatedSelected(post) {
        this.$router.replace({
          path: "/post/" + post.id
        });
      },
      onNextPost() {
        this.$router.replace({
          path: "/post/" + String(parseInt(this.id) + 1)
        });
      },
      onPrevPost() {
        this.$router.replace({
          path: "/post/" + String(parseInt(this.id) - 1)
        });
      },
      onAddComment() {
        let comment = this.new_comment;
        this.$store.commit("comment/appendComment", {
          author: this.$store.state.user,
          content: comment,
          created: new Date()
        });
        this.$store
          .dispatch("comment/addComment", {
            post: this.id,
            comment: { content: comment }
          })
          .then(res => {
            this.new_comment = "";
            this.$store.commit("comment/replaceNew", res);
          });
      },
      toggleShare() {
        this.share = !this.share;
      },
      addDragAndDropListner() {
        this.dragAndDropCapable = this.determineDragAndDropCapable();
        if (this.dragAndDropCapable) {
          this.dragAndDropEvents.forEach(
            function (event) {
              this.$refs.filebar.addEventListener(
                event,
                function (e) {
                  e.preventDefault();
                  e.stopPropagation();
                }.bind(this),
                false
              );
            }.bind(this)
          );
          this.$refs.filebar.addEventListener(
            "drop",
            function (e) {
              this.addFiles(e.dataTransfer.files);
            }.bind(this)
          );
        }
      },
      determineDragAndDropCapable() {
        if (!("FormData" in window)) return false;
        if (!("FileReader" in window)) return false;
        const div = document.createElement("div");
        if (!("draggable" in div)) return false;
        if (!("ondragstart" in div)) return false;
        if (!("ondrop" in div)) return false;
        return true;
      },
      addFile(file) {
        this.journalFile = file;
        // this.$refs.filebar.setAttribute('style', `background-image: url(${URL.createObjectURL(file)});`);
        this.clearInput();
      },
      clearInput() {
        this.journalFileVisible = false;
        this.$nextTick(() => (this.journalFileVisible = true));
      }
    }
  };
</script>

<style lang="scss">
  // #post-wrapper{
  //   position: fixed; /* Stay in place */
  //   z-index: 1; /* Sit on top */
  //   left: 0;
  //   top: 0;
  //   width: 100%; /* Full width */
  //   height: 100%; /* Full height */
  //   overflow: auto; /* Enable scroll if needed */
  //   background: #292929;
  // }

  .source {
    font-weight: 600;
    font-size: 20px;
    font-style: italic;
  }

  .source--dark {
    color: rgba(255, 255, 255, 0.8);
  }

  .parent-back {
    background-color: transparent !important;
  }

  .sty {
    padding: 10px 25px !important;
    margin: 10px -15px !important;
  }

  .social-share-single {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 10px;
    z-index: 99;
    width: 100%;
    right: 0px;
  }

  .tabs {
    .tab {
      cursor: pointer;
      -webkit-transition: all 0.4s ease;
      -o-transition: all 0.4s ease;
      transition: all 0.4s ease;

      &.active {
        border-bottom: 2px solid #fed04d;
      }
    }
  }

  .skrollo-comment {
    position: relative;

    textarea {
      width: 100%;
      border-radius: 2px;

      &:focus {
        outline: #fed04d auto 2px;
      }
    }

    &-send {
      cursor: pointer;
      position: absolute;
      bottom: 15px;
      right: 10px;
      -webkit-transition: all 0.4s ease;
      -o-transition: all 0.4s ease;
      transition: all 0.4s ease;
      fill: #a9a9a9;

      &:hover {
        fill: #fed04d;
      }
    }
  }

  .skrollo-journal {
    input {
      width: 100%;
      border: 1px solid #a9a9a9;
      border-radius: 2px;

      &:focus {
        outline: #fed04d auto 2px;
      }
    }

    &-filebar {
      cursor: pointer;
      width: 100%;
      border: 1px dashed #a9a9a9;
      border-radius: 2px;
      height: 100px;
      -webkit-transition: all 0.4s ease;
      -o-transition: all 0.4s ease;
      transition: all 0.4s ease;

      &:hover {
        border-color: #fed04d;

        p {
          color: #fed04d;
        }
      }

      p {
        -webkit-transition: all 0.4s ease;
        -o-transition: all 0.4s ease;
        transition: all 0.4s ease;
        color: #6b756c;
      }
    }

    svg {
      fill: #fff;
    }
  }

  .skrollo-question {
    border: 2px solid #a9a9a9;
    border-radius: 10em;
    -webkit-transition: all 0.4s ease;
    -o-transition: all 0.4s ease;
    transition: all 0.4s ease;
    font-size: 14px;
    line-height: 1.2;
    padding-left: 1px;
    width: 20px;
    height: 20px;
    display: inline-block;
    text-align: center;
    color: #a9a9a9;
    cursor: pointer;

    &:hover {
      color: #fed04d;
      border-color: #fed04d;
    }
  }

  .supporteds {
    .supported {
      box-shadow: 0 0 0 0;
      margin: 20px 0;
      position: relative;

      .supporting-light {
        position: absolute;
        color: #fff;
        background-color: #ffffff;
        width: 100%;
        padding: 5px 15px;
        border-radius: 3px 3px 0 0;
        font-size: 12px;
      }

      .supporting-dark {
        position: absolute;
        color: #fff;
        background-color: #1d1d1d;
        width: 100%;
        padding: 5px 15px;
        border-radius: 3px 3px 0 0;
        font-size: 12px;
      }

      .menu {
        position: relative;

        img {
          z-index: 999;
          position: relative;
          cursor: pointer;
        }

        .flag {
          background-color: #ececec;
          position: absolute;
          font-size: 12px;
          padding: 10px;
          top: 5px;
          right: -4px;
          width: 120px;
          color: #949494;
        }
      }
    }

    .supported--dark {
      .menu {
        .flag {
          background-color: #000;
        }
      }
    }
  }

  // Change on Card component's

  // The Previous and Next buttons - Coded by Selyatin Ismet
  .my-1 {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: auto;
  }

  .my-1 button {
    background-color: #2c2c2c;
    height: 100%;
    border: none;
    border-radius: 0;
  }

  .my-1 button:hover {
    background-color: #2c2c2c;
  }

  .my-1 button:nth-child(1) {
    float: left;
  }

  .my-1 button:nth-child(2) {
    float: right;
  }

  .my-1 button svg {
    width: 2rem;
    fill: #fafafa;
    transition: all 0.3s ease;
  }

  .my-1 button:hover svg {
    fill: #fed04d;
  }

@keyframes mobileInfoLeft {
  from{
    transform: translateX(0);
    opacity: 0;
  }
  to{
    opacity: 1;
    transform: translateX(1rem);
  }
}
@keyframes mobileInfoRight {
  from{
    opacity: 0;
    transform: translateX(0);
  }
  to{
    opacity: 1;
    transform: translateX(-1rem);
  }
}
  .my-1-mobile-info {
    display: none;
    position: fixed;
    bottom: 0;
    width: 100%;
    margin: 0;
    padding: 0;
    z-index: 999;
    transition: all 1s ease;
  }
  .my-1-mobile-info.hide {
    opacity: 0;
  }
  .my-1-mobile-info span{
    color: #fafafa;
    font-size: 1rem;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease;
    transition: all 0.5s ease;
  }
   .my-1-mobile-info span:nth-child(1){
      animation-name: mobileInfoLeft;
  }
  .my-1-mobile-info span:nth-child(2){
      animation-name: mobileInfoRight;
  }

  .my-1-mobile-info span svg {
    width: 4rem;
    height: 5rem;
    stroke: #fafafa;
    fill: #fafafa;
  }
  @media(max-width: 862px) {
    .my-1 button {
      width: 2.5rem;
    }

    .my-1 button svg {
      width: 1rem;
      margin: 0 !important;
    }
  }

  @media(max-width: 768px) {
    .my-1 {
      display: none;
    }
    .my-1-mobile-info {
      display: block;
    }
  }
  @media(max-width: 360px){
    .my-1-mobile-info span {
      font-size: 0.8rem;
    }
  }
</style>