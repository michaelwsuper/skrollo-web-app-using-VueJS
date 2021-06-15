export default ({ store, app: { $axios } }) => {
  $axios.defaults.headers.common['Authorization'] = store.state.token_type +" " + store.state.token
};
