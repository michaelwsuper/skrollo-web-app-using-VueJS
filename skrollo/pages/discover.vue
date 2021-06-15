<template>
  <div>
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

    <!-- <infinite-loading @infinite="fetchPage" :status="loading">
      <div slot="spinner">
        <div class="text-center">
          <b-spinner
            style="width: 9rem; height: 9rem; "
            variant="warning"
            key="warning"
            type="grow"
          ></b-spinner>
        </div>
      </div>
    </infinite-loading> -->
  </div>
</template>

<script>
import Vue from "vue";
import Post from "~/components/Post.vue";
import DiscoveryWrapper from "~/components/DiscoveryWrapper.vue";
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
    DiscoveryWrapper
  },
  created() {
    
    this.$store.dispatch('test').then((res)=>{
      console.log(res)
    })
  },
  mounted() {
    this.resizeAllGridItems();
    window.addEventListener("resize", this.onload);
    let allItems = document.getElementsByClassName("item");
    this.fetchPage();
    // for(let x=0;x<allItems.length;x++){
    //   this.resizeInstance(allItems[x])
    // }
  },
  methods: {
    fetchPage() {
      if (this.loading) {
        return;
      }
      this.loading = true;
      let url = "/api/feed/once";
      
      
      console.log(this.$store.state)
      this.$axios.defaults.headers.common['Authorization'] = this.$store.state.token_type +" " + this.$store.state.token
      let params = "";
      if (this.$store.state.posts.filter) {
        for (const key in this.$store.state.posts.filter) {
          params += "filter=" + key + "=" + this.$store.state.posts.filter[key] + "&";
        }
      }
      if (params != "") {
        url = url + "?" + params;
      }
      if (this.page != 0) {
        params += "page=" + this.page + "&";
      }
      this.$axios.$get(url).then(data => {
        this.posts = this.posts.concat(
          data.map(item => {
            return {
              content: item,
              height: 5
            };
          })
        );
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
      let allItems = document.getElementsByClassName("item");
      for (let x = 0; x < allItems.length; x++) {
        this.resizeGridItem(allItems[x]);
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
