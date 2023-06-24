// To import JSON data to the mongoDB database
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/dashboard", { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("Connection Error: ", err);
    } else {
      console.log(`DB Connected Successfully`);
    }
  }
);
const Analytics = require("./analytic_model.js");

const data = require("./jsondata.json");

for (var i = 0; i < data.length; i++) {
  const analytics = new Analytics({
    ...data[i],
  });
  analytics.save();
}
// useUnifiedTopology - False by default. Set to true to opt in to using the MongoDB driver's new connection management engine