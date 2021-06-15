export const state = () => ({
    list: [],
    page_num: 1,
    loading: true
});

export const mutations = {
    setPosts(state, posts) {
        state.list = posts;
    },
    setLoading(state, bool){
        state.loading = bool;
    }
    
};

export const actions = {
    async fetchPage({ commit, state }) {
        let url = "/api/posts/";        
        if (state.page != 0) {
            params += "page=" + state.page + "&";
        }        
        commit("setLoading", true);
        await this.$axios.$get(url).then(res => {
            commit("addPage", res);
            setTimeout(() => {
                commit("setLoading", false);
            }, 1000);
            commit("incrementPage");
        });
    },
    
    
    
};

export const getters = {};