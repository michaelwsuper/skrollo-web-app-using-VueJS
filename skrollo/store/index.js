import jcookies from 'js-cookie'
export const state = () => ({
  counter: 0,
  dark: true,
  scrollLocation: undefined,
  windowwidth: 0,
  loggedIn: false,
  user: JSON.parse(localStorage.getItem("user")) || null,
  message: null,
  token: localStorage.getItem("token") || null,
  token_type: localStorage.getItem("token_type") || null,
  refresh: null,
  login_error: {}
});

export const mutations = {
  initialiseStore(state) {
    let cookie = jcookies.get('__session');
    
    if(cookie)
    {
      let data = JSON.parse(cookie);
      if(data.isdark == 1)
        state.dark = true;
      else  
        state.dark = false;
    }
    else
      state.dark = true;
  },
  increment(state) {
    state.counter++;
  },
  saveScrollLocation(state, scroll) {
    state.scrollLocation = scroll;
  },
  dark(state) {
    state.dark = !state.dark;
    let data = {
      isdark:state.dark?1:0
    }
    jcookies.set("__session",data);

  },
  windowwidth(state, width) {
    state.windowwidth = width;
  },
  SET_LOGIN_ERROR(state, error) {
    state.login_error = error;
  },
  SET_AUTH(state, data) {
    state.token = data.token;
    state.token_type = data.token_type;
  },
  SET_USER(state, user) {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      state.user = user;
    } else {
      localStorage.removeItem("user");
      state.user = null;
    }
  },
  SET_MESSAGE(state, message) {
    state.message = message;
  },
  CLEAR_MESSAGE(state) {
    state.message = null;
  }
};

export const actions = {
  /**
   * Log the user in wih the given credentials returns boolean of login status
   * @param {access, refresh} form
   */
  async login({ commit }, form) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post("/api/auth/jwt/create/", form)
        .then(res => {
          commit("SET_AUTH", { token: res.access, token_type: "JWT" });
          console.log("JWT", res.access);
          this.$axios.defaults.headers.common["Authorization"] =
            "JWT " + res.access;
          // this.$axios.setToken(res.access_token, res.token_type);
          localStorage.setItem("token", res.access);
          localStorage.setItem("token_type", "JWT");
          this.$axios.$get("/api/auth/users/me/").then(data => {
            commit("SET_USER", data);
          });
          resolve(res);
        })
        .catch(err => {
          localStorage.removeItem("token");
          reject(err);
        });
    });
  },
  /* Get the user details of the given id can be 'me'  to get the user logged in*/
  getUser({ commit, dispatch }, id) {
    return this.$axios.$get("/api/auth/users/" + id);
  },
  /**
   * Login with google
   * @param {GoogleUser} user
   */
  async loginGoogle({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit("SET_AUTH", {
        token: user.uc.access_token,
        token_type: "Bearer google-oauth2"
      });
      this.$axios.defaults.headers.common["Authorization"] =
        "Bearer google-oauth2 " + user.uc.access_token;
      localStorage.setItem("token", user.uc.access_token);
      localStorage.setItem("token_type", "Bearer google-oauth2");
      this.$axios.$get("/api/auth/users/me/").then(data => {
        commit("SET_USER", data);
        resolve(data);
      }).catch((err)=>{
        localStorage.removeItem("token");
        localStorage.removeItem("token_type");
        reject(err);
      });      
    });
  },
  async refreshToken({ commit, state, dispatch }) {
    // api/auth/jwt/refresh/
    let data = await this.$axios.post("/api/auth/jwt/refresh/", {
      refresh: state.refresh
    });
    commit("SET_AUTH", data);
  },
  logout({ commit }) {
    commit("SET_USER", null);
    commit("SET_AUTH", { access: null, refresh: null });
    localStorage.removeItem("token");
    localStorage.removeItem("token_type");
    localStorage.removeItem("user");
  },
  async activate({ commit }, details) {
    await this.$axios.$post("/api/users/activation/", details);
    const data = await this.$axios.$get("/api/auth/users/me/");
    commit("SET_USER", data);
  },
  test({ commit, state }) {
    return "Hello world" + state.token;
  }
};
1;

export const getters = {
  token(state, getters) {
    // Check that we have it in state
    let token =
      state.token == null ? localStorage.getItem("token") : state.token;
    return token;
  },
  isLoggedIn(state) {
    return state.user != null;
  }
};
