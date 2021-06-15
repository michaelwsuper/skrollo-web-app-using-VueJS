// export default function({ $axios, redirect, router, store }) {
//   axios.interceptors.response.use(
//     response => {
//       // Return a successful response back to the calling service
//       return response;
//     },
//     error => {
//       // Return any error which is not due to authentication back to the calling service
//       if (error.response.status !== 401) {
//         return new Promise((resolve, reject) => {
//           reject(error);
//         });
//       }

//       if (
//         error.config.url.contains("api/auth/jwt/refresh/") ||
//         error.response.message == "Account is disabled."
//       ) {
//         store.commit("logout");
//         router.push({ name: "root" });
//         return new Promise((resolve, reject) => {
//           reject(error);
//         });
//       }

//       store
//         .dispatch("refreshToken")
//         .then(() => {
//           const config = error.config;
//           return new Promise((resolve, reject) => {
//             axios
//               .request(config)
//               .then(response => {
//                 resolve(response);
//               })
//               .catch(error => {
//                 reject(error);
//               });
//           });
//         })
//         .catch(error => {
//           Promise.reject(error);
//         });
//     }
//   );
// }
