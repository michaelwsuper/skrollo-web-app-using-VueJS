// const redis = require("redis");

// const session = require("express-session");
// const RedisStore = require("connect-redis")(session);

// const REDIS_HOST = process.env.REDIS_HOST || "localhost"
// const REDIS_PORT = process.env.REDIS_PORT || 6379

// let redisClient = redis.createClient({
//   host: REDIS_HOST,
//   port: REDIS_PORT
// });

// module.exports = session({
//   store: new RedisStore({ client: redisClient }),
//   secret: "super-secret-key", // TBD: grab from env
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     maxAge: 1000 * 60 * 60 * 24,
//     secure: false // require HTTPS in production
//   }
// });
