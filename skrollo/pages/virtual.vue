<template>
  <div>
    <!-- <FeedNavbar />
    <div class="grid" ref="grid">
      <DiscoveryWrapper
        :style="{ gridRowEnd: 'span ' + item.height }"
        v-for="item of posts"
        :key="item.content.id"
        :ref="item.content.id"
        @load="onload"
        :item="item"
      />
    </div>

    <div v-show="false">
      <h1>Render items while hiding them</h1>
    </div>

    <div slot="spinner" v-view="loaderView">
      <div class="text-center">
        <b-spinner
          style="width: 9rem; height: 9rem; "
          variant="warning"
          key="warning"
          type="grow"
        ></b-spinner>
      </div>
    </div> -->
    <!-- transform-origin -->
    <div class="bg-success" style="position: absolute; bottom: 10px;">
      <h1>
        Test object One
      </h1>
    </div>

    <div class="bg-success" style="position: absolute; transform-origin: bottom left; transform: translateY(200px); ">
      <h1>
        Test object
      </h1>
    </div>

  </div>
</template>

<script>
import Vue from "vue";
import Post from "~/components/Post.vue";
import DiscoveryWrapper from "~/components/DiscoveryWrapper.vue";
import FeedNavbar from "~/components/FeedNavbar.vue";
export default {
  name: "Grid",
  data() {
    return {
      item_pool: [],
      ren_pool: [],
      posts: [],
      loading: false,
      page: 0
    };
  },
  components: {
    Post,
    DiscoveryWrapper,
    FeedNavbar
  },
  created() {
    this.$store.dispatch("test").then(res => {
      console.log(res);
    });
  },
  mounted() {
    this.resizeAllGridItems();
    window.addEventListener("resize", this.onload);
    let allItems = document.getElementsByClassName("item");
    this.fetchPage();
    setInterval(() => {
      this.resizeAllGridItems();
      console.log("resized");
    }, 1000);
    //Once a second resize the items

    // for(let x=0;x<allItems.length;x++){
    //   this.resizeInstance(allItems[x])
    // }
  },
  methods: {
    loaderView(e) {
      if (!this.loading && e.percentInView > 0) {
        this.fetchPage();
      }
    },
    fetchPage() {
      if (this.loading) {
        return;
      }
      if (!this.$store.getters.isLoggedIn) {
        this.loading = true;
        this.$store
          .dispatch("posts/fetchPage", this.$store.getters["posts/pageRequest"])
          .then(data => {
            this.posts = this.posts.concat(
              data.map(item => {
                return {
                  content: item,
                  height: 5
                };
              })
            );
            this.loading = false;
          });
        return;
      }

      this.loading = true;
      let url = "/api/feed/once";
      console.log(this.$store.state);
      this.$axios.defaults.headers.common["Authorization"] =
        this.$store.state.token_type + " " + this.$store.state.token;
      let params = "";
      if (this.$store.state.posts.filter) {
        for (const key in this.$store.state.posts.filter) {
          params +=
            "filter=" + key + "=" + this.$store.state.posts.filter[key] + "&";
        }
      }
      if (params != "") {
        url = url + "?" + params;
      }
      if (this.page != 0) {
        params += "page=" + this.page + "&";
      }
      this.$axios.$get(url).then(data => {
        let newPosts = data.map(item => {
          return {
            content: item,
            height: 5
          };
        });
        if (this.posts.length == 0) {
          this.posts = this.posts.concat(newPosts)
        } else {
          for (let post of newPosts) {
            let match = this.posts.find((i) => {
              return i.content.id == post.content.id
            });
            if (match == undefined) {
              this.posts.push(post);
            }
          }
        }
        this.loading = false;
        this.page += 1;
      });
    },
    onload() {
      for (let item of this.posts) {
        this.$refs[item.content.id][0].resize();
      }
    },
    resizeGridItem(item) {
      let grid = document.getElementsByClassName("grid")[0];
      let rowHeight = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
      );
      let rowGap = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
      );
      let rowSpan = Math.ceil(
        (item.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap)
      );
      item.style.gridRowEnd = "span " + rowSpan;
    },
    resizeAllGridItems() {
      for (let post of this.posts) {
        if (post.isReady && !post.removed) {
          this.resizeGridItem(this.$refs.post.content.id);
        }
      }
    },
    resizeInstance(instance) {
      let item = instance.elements[0];
      this.resizeGridItem(item);
    }
  }
};
</script>

<style>
.grid {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(318px, 1fr));
  grid-auto-rows: 10px;
}

/* Non-grid specific CSS */
body {
  background-color: #1d1d1b !important;
}
</style>
