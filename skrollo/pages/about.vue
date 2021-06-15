<template>
  <div class="container px-0 pb-4">
    <div class="my-4">
      <b-button @click="$router.back()" :variant="btnColor">
        Go Back
      </b-button>
    </div>

    <div class="text--wrap" :class="textClass">
      <h1>About</h1>

      <p>Skrollo is a digital news and media platform designed to report trending and viral posts from all over the web. Users are able to find videos, gifs, memes, new formats, and posts to be informed on what the internet is buzzing about.</p>

      <h2>How To Skrollo</h2>

      <p>Skrollo makes it easy to share, search, interact, and archive what is happening as it happens! Every action taken on a post: upvote, comment, share, or journal* will automatically put the media into a user’s personal feed so no great lol ever goes missing.</p>

      <p>*Journal is a feature that allows a user to participate with a post by linking a chain of events or like media, so that other users can track the progress of a post. For example, if a new meme format arises, users could link their own version of the new meme, provide backstory on the origination of the particular meme, or just link relevant content. If there is a big event like the World Series and a post is trending on Skrollo, the user could link their own photos or relevant photos from around the web to provide a unique perspective on the post.</p>

      <p>Also, the team at Skrollo, is always wanting to partner with people who blog/vlog about trending topics on various platforms. If you are interested in having your blog/vlog on Skrollo, feel free to submit your content at, Team@Skrollo.com</p>
    </div>

    <div class="my-4">
      <b-button to="/" :variant="btnColor">
        Back to feed?
      </b-button>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import { mapMutations } from "vuex";

  export default {
    name: "page_about",
    layout: "default",
    scrollToTop: true,    
    computed:{
      btnColor() {
        if (this.$store.state.dark) return 'light';
        return 'dark'
      },
      textClass() {
        if (this.$store.state.dark) return 'text-light';
        return 'text-dark'
      }
    }
  };
</script>

<style lang="scss">
  .card-post {

    &:hover {
      box-shadow: 0 4px 8px 0 rgba(254, 208, 77, 0.3);
    }
  }

  .text--wrap.text-dark p {
    color: #4d4d4d;
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


</style>