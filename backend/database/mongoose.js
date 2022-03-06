const mongoose = require("mongoose");

// db config
mongoose.connect(
  "mongodb://localhost:27017/bookstore",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("DB connected successfully !")
);

module.exports = {
  mongoose,
};
