<template>
 
    <div>
      <FeedNavbar />
      <client-only>
      <!-- :style="{ 'max-height': maxScrollHeight + 'px' }" -->
      <div
        id="scroll-wrapper"
        v-if="posts.length != 0"
      >
       
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
              />
            </div>
          </masonry>
          
        </div>
       </div>
      <div v-else>
        <div class="loading">
          <img src="/assets/img/logo2.png" />
        </div>
      </div>
 
      <!-- <v-infinite-scroll    
    :loading="loading"
    @top="prevPage"
    @bottom="getNextPage"
    :offset="20"
    :style="{'max-height': maxScrollHeight + 'px'}"
  >
   
    <div class="text-center">
      <b-spinner
        style="width: 9rem; height: 9rem; "
        v-if="posts.length != 0"
        variant="warning"
        key="warning"
        type="grow"
      ></b-spinner>
    </div>
  </v-infinite-scroll> -->
 
      <!-- <div id="page-wrapper"> -->
 
      <!-- <div class="loadin" v-if="loading">
      <b-spinner
        class="spiner"
        variant="warning"
        key="warning"
        type="grow"
      ></b-spinner>
    </div>
 
    <div class="h-100">
      <div v-if="posts.length == 0" class="loading">
        <img src="/assets/img/logo2.png" />
      </div>      
    </div> -->
 
      <!-- </div> -->
      <Elevator />
      </client-only>
     
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
  name: "page_like",
  layout: "default",
  scrollToTop: false,
  components: {
    Post,
    Sources,    
    FeedNavbar,
    Elevator
  },
  async fetch({ store, params }) {
    if (store.state.scrollLocation != undefined) {
      // If we have a saved location in the store, dont download a new page keep it the same
      console.log("Set the scroll location");
      // document.getElementById("scroll-wrapper").scrollTop =
      //   store.state.scrollLocation;
    } else {
      await store.dispatch("posts/getUserLike", params.username);
    }
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
      endAudio: ""
    };
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.onResize);
      this.onResize();
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
    posts() {
      return this.$store.state.posts.list;
    },
    
    isLoading() {
      return this.$store.state.posts.isLoading;
    }
  },
  layout: "default",
  methods: {
    prevPage() {
      console.log("PrevPage");
    },
    nextPage() {
      this.loading = true;
      console.log("Next Page");
      this.loading = false;
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
// html {
//   overflow-y: hidden;
// }
 
// #scroll-wrapper {
//   overflow-y: scroll;
// }
 
.card-post {
  // .card-title {
  //   max-height: 3rem;
  // }
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
 
// #topUp {
//   position: fixed;
//   right: 30px;
//   bottom: -20px;
//   z-index: 99;
//   .position {
//     .icon {
//       background-color: #dfcd9b;
//       border-radius: 3px;
//       margin: 5px 0;
//       padding: 2px;
//       cursor: pointer;
//       img {
//         width: 40px;
//       }
//     }
//   }
//   .none {
//     opacity: 0;
//     z-index: 999999;
//     position: relative;
//     bottom: 95px;
//   }
// }
</style>