const express = require("express");
require("./db/mongoose");
const app = express();
const userrouter = require("./routes/user");
require("dotenv").config();

const cors = require("cors");

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(userrouter);

app.listen(port, () => {
    console.log("server is up running at port " + port);
});
