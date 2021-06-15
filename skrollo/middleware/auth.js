export default function({ $axios, store, redirect, route }) {
  if (!store.state.user) {
    return redirect("/login", { next: encodeURIComponent(route.fullPath) });
  }

  $axios.onError(error => {
    $axios.$post("/auth/refresh/");
  });
}
