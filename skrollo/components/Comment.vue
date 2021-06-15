<template>
  <b-card
    class="comment mb-3"
    :class="{ 'bg-dark text-light': $store.state.dark }"
  >
    <template v-slot:header>
      <span 
        class="user float-left"
        :class="{ 'dark': $store.state.dark }"
      >
        <span class="user-name">{{ comment.author.username }}</span> -
        {{ new Date(comment.created) | moment("from", "now") }}
      </span>

      <b-dropdown style="z-index:99999" class="float-right" size="lg"  variant="link" toggle-class="text-decoration-none" no-caret right v-if="$store.state.loggedIn">
        <template v-slot:button-content>
          <i class="fas fa-ellipsis-h"></i>
        </template>
        <b-dropdown-item href="#">Flag</b-dropdown-item>
        <b-dropdown-item @click="onDelete" v-if="$store.state.user.id == comment.author.id" href="#">Delete</b-dropdown-item>          
      </b-dropdown>      
    </template>

    <b-card-text>{{ comment.content }}</b-card-text>    
  </b-card>
</template>

<script>
  export default {
    props: {
      comment: {}
    },
    data() {
      return {
        menuC: false,
        created: null
      };
    },
    computed: {},
    components: {},
    created() { },
    methods: {
      onDelete(){
        this.$store.dispatch("comment/deleteComment", this.comment.id)
      }
    }
  };
</script>

<style lang="scss">
  .comment {
    .user {
      color: #949494;
      font-size: 12px;

      &.dark .user-name {
        color: #FED04D;
      }
    }

    .right-reply {
      float: right !important;
      display: flex;

      .reply {
        color: #949494;
        font-size: 15px;
        margin-right: 20px;
      }
    }

    a {
      text-decoration: none;
    }

  }
</style>