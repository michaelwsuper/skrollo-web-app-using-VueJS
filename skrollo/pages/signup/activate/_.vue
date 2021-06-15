<template>
  
</template>

<script>
  import Vue from "vue";
  import { mapMutations } from "vuex";

  export default {
    name: "signup_activate",
    layout: "default",
    components: {},
    async fetch({ store, params, $axios, redirect }) {
      let p_split = params.pathMatch.split("/")
      
      if (p_split.length == 2){
        try {
          let data = await $axios.$post("/api/auth/users/activation/", {uid: p_split[0], token: p_split[1]});          
          redirect("/login");
        } catch (error) {
          console.log(error);
          redirect("/");          
        }
      }
    },
    data() {
      return {
        form: {}
      };
    },
    mounted() { },
    beforeDestroy() { },
    created() { },
    updated() { },
    computed: {},
    methods: {
      
    }
  };
</script>

<style lang="scss">

</style>