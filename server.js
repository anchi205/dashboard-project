const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const app = express();
const PORT = process.env.PORT || 8080;
const enableCORS = require("./utils/enableCORS");

// Middlewares
app.use(express.json());

// Enabling CORS
app.use(enableCORS);

// Importing Routes
app.use("/api", require("./routes/index"));

// Connect to DB
require("./utils/connectDB")();

app.post("/", (req, res) => {
    console.log(req.body.titleInput);
    console.log(req.body.likelihoodInput);
    console.log(req.body.relevanceInput);
    console.log(req.body.topicInput);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
