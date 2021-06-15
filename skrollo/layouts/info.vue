<template>
  <div id="app" class="app" :class="{ 'app--dark': $store.state.dark }">
    <Navbar id="navbar"/>
    

    <nuxt />    
  </div>
</template>
<script>
import Navbar from "./../components/Navbar.vue";

export default {
  components: {
    Navbar,    
  },
  data() {
    return {  
      
    };
  }
};
</script>
<style lang="scss">

.app {
  background-color: #ececec;
  
}
.app--dark {
  background-color: #1d1d1b;
}
body {
  background-color: #1d1d1b !important;
  font-family: "Open Sans", sans-serif !important;
}
.btn,
button {
  &-primary {
    background-color: #21a6ff !important;
  }
}

</style>
