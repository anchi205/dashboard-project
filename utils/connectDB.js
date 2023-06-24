const { default: mongoose } = require("mongoose");

const connectDB = () => {
  mongoose.connect(
    "mongodb://127.0.0.1:27017/dashboard",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) {
        console.log("Connection Error: ", err);
      } else {
        console.log(`DB Connected Successfully`);
      }
    }
  );
};

module.exports = connectDB;
