// const proxy = require("http-proxy-middleware");
// const app = require("express")();

// const API_URI = process.env.API_URI || "https://api.skrollo.com";

// // API_URI should end in /api/, and we remove that part in the URL.
// app.use(
//   proxy({
//     target: API_URI + "/api",
//     prependPath: false,
//     changeOrigin: true,
//     auth: false,
//     logLevel: "debug",
//     onProxyReq(proxyReq, req, res) {

//       // console.log(req.cookies);
//       // if (req.cookies.csrftoken){
//       //   req.clearCookie('csrftoken');
//       //   // proxyReq.clearCookie('csrftoken');
//       //   // res.cookie('csrftoken', '')
//       // }

//       if (req.session.authToken) {
//         proxyReq.setHeader("Authorization", req.session.tokenType + " " + req.session.authToken);
//       }
//       // workaround for bodyParser incompat
//       // https://stackoverflow.com/questions/25207333/socket-hang-up-error-with-nodejs/25651651#25651651
//       if (req.body) {
//         let bodyData = JSON.stringify(req.body);
//         // in case if content-type is application/x-www-form-urlencoded -> we need to change to application/json
//         proxyReq.setHeader("Content-Type", "application/json");
//         proxyReq.setHeader("Content-Length", Buffer.byteLength(bodyData));
//         // stream the content
//         proxyReq.write(bodyData);
//       }
//     },
//     async onProxyRes(proxyRes, req, res) {
//       // if the API returns a 401, the token can be considered invalid. Delete the token.
//       if (proxyRes.statusCode === 401) {
//         delete req.session.authToken;
//         await req.session.save();        
//       }
//     }
//   })
// );

// module.exports = {
//   path: "/api",
//   handler: app
// };
