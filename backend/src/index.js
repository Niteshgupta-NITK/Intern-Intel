const express = require("express");
require("./db/mongoose");
const app = express();
const userrouter =require('./routes/user');
const feedrouter= require('./routes/feed');
require('dotenv').config()

const port = process.env.PORT;
// console.log(process.env);
app.use(express.json());
app.use(userrouter);
app.use(feedrouter);

app.listen(port, () => {
  console.log("server is up running at port "+ port);
});
