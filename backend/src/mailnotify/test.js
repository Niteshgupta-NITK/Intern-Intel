// const axios = require("axios");
// require("../db/mongoose");
// const User = require("../models/user");

// var session_url = "https://api.search.io/v4/collections/hello-world:query";
// var username = "U0h1ZuWMQClF6yVl";
// var password = "4gjInVHONDqfWJWn";


//  axios({
//   url: session_url,
//   method: "post",
//   auth: {
//     username,
//     password,
//   },
//   data: {
//     pipeline: {
//       name: "website",
//     },
//     variables: {
//       q: search,
//     },
//   },
// })
//   .then((response) => console.log(response.data.results[0].record))
//   .catch((error) => console.log(error));
const schedulemail= require("./scheduler");
schedulemail('guptanitesh400@gmail.com','Hii');