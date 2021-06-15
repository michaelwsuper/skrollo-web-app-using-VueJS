<template>
  <div class="filter" >
    <div style="width: 100%; height:100%;" @click="clickOutside">

    </div>
    <div class="f2" :class="{ 'f2--dark': $store.state.dark }">
      <div class="p-4">
        <div v-b-toggle.collapse-1 class="close">
          <i class="fas fa-times text-light"></i>
        </div>
        <br />
        <br />
        <br />
        <div class="mb-3">
          Theme:
          <span @click="dark">
            <b-button class="ml-2" pill size="sm" variant="dark" v-if="!$store.state.dark">Dark</b-button>
            <b-button class="ml-2" pill size="sm" variant="light" v-if="$store.state.dark">Light</b-button>
          </span>
        </div>
        <div v-for="(source, index) in $store.state.posts.sources" :key="source.name">
          <div class="row space">
            <div class="col-8">
              <img
                :src="'/images/social/'+source.name+'-icon.png'"
                class="mr-1 mb-1 rounded-circle"
                height="22px"
              />
              <b>{{source.name}}</b>
              <!-- <b-form-checkbox
                style="display: inline"
                v-model="filter"
                :value="source.id"
                name="check-button"
                switch
              ></b-form-checkbox>-->
            </div>

            <div class="col-4">
              <div class="input-number">
                <div class="row">
                  <button class="button p-2" @click="sourceMin(source.id)">-</button>
                  <input
                    type="number"
                    name="limit"
                    placeholder="4"
                    v-model="filter[source.name]"                    
                    min="0"
                    max="20"
                  />
                  <button class="button plus" @click="sourceAdd(source.id)">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  computed: {    
    // filter: {
    //   get: function() {
    //     return this.$store.state.posts.filter;
    //   },
    //   set: function(items) {
    //     this.$store.commit("posts/updateFilter", items);
    //     this.$store.dispatch("posts/resetFeed");
    //   }
    // },
    searchTerm: {
      get: function() {
        return this.$store.state.posts.search;
      },
      set: function(term) {
        this.$store.commit("posts/updateSearch", term);
        this.$store.dispatch("posts/resetFeed");
      }
    }
  },
  methods: {
    sourceAdd(id){
      console.log("test");      
      console.log(id);
      console.log(this.filter[String(id)]);
      if(this.filter[String(id)] != undefined){
        this.filter[String(id)] = String(Number(this.filter[String(id)]) +1)
      }else{
        console.log("Set one");
        
        this.filter[String(id)] = String(1)
      }
      this.filter = {...this.filter}
    },
    sourceMin(id){
      if(this.filter[String(id)] != undefined && this.filter[String(id)] != 0){
        this.filter[String(id)] = String(Number(this.filter[String(id)]) -1)
      }else{               
        this.filter[String(id)] = String(0)
      }
      this.filter = {...this.filter}
    },
    dark() {
      this.$store.commit("dark");
    },
    onChange() {
      this.$emit("change", this.sources);
    },
    onPerPageChange() {    

      for(let item in this.filter){
        if(this.filter[item] == ""){
          delete this.filter[item]
        }
      }

      this.$store.commit("posts/updateFilter", {...this.filter});  
      this.$store.dispatch("posts/resetFeed");
      this.$store.dispatch("posts/fetchPage");
    },
    clickOutside(){
      for(let item in this.filter){
        if(this.filter[item] == ""){
          delete this.filter[item]
        }
      }

      this.$store.commit("posts/updateFilter", {...this.filter});  
      this.$store.dispatch("posts/resetFeed");
      this.$store.dispatch("posts/fetchPage");

      this.$emit('outsideClick')      
    }
  },
  created() {},
  data() {
    return {
      filter: {}
    };
  }
};
</script>



<style lang="scss">
.filter {
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9999999999999;
  right: 0;
  top: 0;
  overflow: hidden;
  .close{
    cursor: pointer !important;
  }
  .f2 {
    height: 100%;
    width: 300px;
    position: fixed;
    background-color: #ececec;
    z-index: 9999;
    right: 0;
    top: 0;
    .space{
      margin: 20px 0;
    }
    .input-number {
      input[type="number"]::-webkit-outer-spin-button,
      input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }
      input {
        width: 30px !important;
        text-align: center;
        background-color: transparent;
        border: 0;
      }
      button {
        background-color: #000;
        color: #fff;
        border: 0;
        line-height: 10px;
        border-radius: 3px;
      }
      .plus {
        padding: 6px;
      }
      button:focus {
        outline: 0;
      }
    }
  }
  .f2--dark {
    background-color: #1d1d1b !important;
    color: rgba(255, 255, 255, 0.8);
    .input-number {
      input {
        color: rgba(255, 255, 255, 0.8);
      }
      .button {
        background-color: #fff;
        color: #000;
      }
    }
  }
}
</style>
