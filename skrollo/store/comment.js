export const state = () => ({  
  comments: []
});

export const mutations = {
  appendComment(state, comment){
    state.comments.unshift(comment)
  },
  setComments(state, comments) {
    state.comments = comments;
  },
  replaceNew(state, comment) {
    state.comments[0] = comment;
  },
};

export const actions = {
  getComments({commit, state}, id){
    return this.$axios.$get("/api/posts/" + id + "/comments").then(res => {
      commit("setComments", res);
    });
  },
  addComment({commit, state}, data){    
    return this.$axios.$post("/api/posts/" + data.post + "/add_comment/", data.comment)
  },
  deleteComment({commit, state}, id){    
    // Remove from list of comments
    commit("setComments", state.comments.filter(comment => comment.id !=id))
    //Tell the server to delete it
    return this.$axios.$delete("/api/comments/" + id)
  } 
};

export const getters = {};
