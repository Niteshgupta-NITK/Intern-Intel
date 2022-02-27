const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://root:hackverse@cluster0.poz6p.mongodb.net/hackverseapi?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
 
});
