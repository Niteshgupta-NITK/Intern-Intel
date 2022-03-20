const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_KEY, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
});
